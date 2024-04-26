import React, { useState, useEffect } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const {
    listening,
    transcript: recognizedTranscript,
    startListening,
    stopListening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (listening) {
      setTranscript(recognizedTranscript);
    }
  }, [listening, recognizedTranscript]);

  const handleSpeechRecognition = (recognition) => {
    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          transcript += event.results[i][0].transcript;
        }
      }
      // Process the transcript here
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };
  };

  const createSpeechRecognition = (stream) => {
    if (window.SpeechRecognition) {
      const recognition = new window.SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US'; // Change language as needed
      recognition.start(stream);
      handleSpeechRecognition(recognition);
      return recognition;
    } else {
      console.error('SpeechRecognition API is not supported in this browser.');
      return null;
    }
  };

  const requestMicrophoneAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      return stream;
    } catch (error) {
      console.error('Error accessing microphone:', error);
      return null;
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Speech recognition is not supported by your browser.</div>;
  }

  return (
    <div>
      <button onClick={startListening} disabled={isListening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Stop Listening
      </button>
      <button onClick={resetTranscript} disabled={!transcript}>
        Reset Transcript
      </button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default SpeechToText;

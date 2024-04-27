import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function ReadAloud() {
    const [finalTranscript, setFinalTranscript] = useState(''); // Store the final transcript

    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const stopListening = () => {
        SpeechRecognition.stopListening();
        setFinalTranscript(transcript); // Store the final transcript when speech stops
    };

    if (!browserSupportsSpeechRecognition) {
        return <div>Speech recognition is not supported by your browser.</div>;
    }

    return (
        <div className="container">
            <h2>Speech to Text Converter</h2>
            <br/>
            <p>A React hook that converts speech from the microphone to text and makes it available to your React components.</p>

            <div className="main-content">
                {finalTranscript || transcript} {/* Display final transcript or live transcript */}
            </div>

            <div className="btn-style">
                <button onClick={startListening}>Start Listening</button>
                <button onClick={stopListening}>Stop Listening</button>
                <button onClick={resetTranscript}>Reset</button>
            </div>
        </div>
    );
}

export default ReadAloud;

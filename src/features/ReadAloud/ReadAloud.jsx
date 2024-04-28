import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function ReadAloud() {
    const [finalTranscript, setFinalTranscript] = useState(''); // Store the final transcript

    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const stopListening = () => {
        SpeechRecognition.stopListening();
        setFinalTranscript(transcript); 
    };

    if (!browserSupportsSpeechRecognition) {
        return <div>Speech recognition is not supported by your browser.</div>;
    }
    const handleTopic =()=>{
        console.log(finalTranscript);
    }

    const line = ["Science" , "Food" , "History",  "Economics" , "Psychology" ,  "Self-Health" , "Sprituality", "Technology"]

    return (
        <div className="flex h-screen justify-center ">
            <div className=" flex justify-center ">
            <div className="font-serif text-6xl mt-10">
                <div className="top h-1/6"></div>
                <div className="heading flex items-center justify-center">
                    <h2>Read Aloud</h2>
                </div>
                <div className='text-xl flex flex-col items-center justify-center mt-10'>
                    <div className="w-2/3 flex items-center justify-center">
                        Topic Plays A Vital Role In Your Reading Habits.
                    </div>
                    <div className="w-2/3 flex items-center justify-center">
                        Kindly Select One Before Moving Further.
                    </div>
                </div>


                <div className='text-4xl  flex items-center justify-center mt-10'>
                    Choose Your Topic
                </div>
                
                <div className="flex items-center justify-center mt-10">
                    <div className="">
                    {line && (
                        <div className="button-container flex flex-wrap justify-center items-center ">
                            {line.map((item, index) => (
                                <div key={index} className='flex'>
                                    <button
                                        onClick={() => handleTopic(item)}
                                        type="button"
                                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-4 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    >
                                        {item}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    </div>
                </div>
                {/* {selectedTopic && (
                    <div className="mt-4">
                        You selected: <strong>{selectedTopic}</strong>
                    </div>
                )} */}
            </div>

        </div>
        </div>  
    );
}

export default ReadAloud;

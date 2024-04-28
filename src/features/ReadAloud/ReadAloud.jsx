import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ReadAloudHeroSection from '../../components/ReadAloudHeroSection';

const History={
    "title" : "History of India",
    "text": ["History is the study of the past, encompassing all human experiences and activities that have occurred before the present. It encompasses various aspects such as political, social, economic, cultural, and technological changes that have shaped human societies over time. The study of history helps us understand the roots of our present circumstances and provides insights into how societies evolve and develop.",
    "The Paleolithic Era, also known as the Stone Age, spans from the earliest known use of stone tools by hominins about 3.3 million years ago to the end of the last Ice Age around 12,000 years ago. During this period, early humans were hunter-gatherers, relying on hunting wild animals and gathering wild plants for sustenance. Cave paintings, such as those found in Lascaux, France, provide insights into their culture and way of life.",
    "Around 10,000 BCE, humans began transitioning from hunting and gathering to agriculture and settled life. This transition, known as the Neolithic Revolution, led to the domestication of plants and animals, the development of permanent settlements, and the emergence of complex societies. It marked a significant turning point in human history, paving the way for the development of civilizations.",
    "Mesopotamia, located in the fertile crescent between the Tigris and Euphrates rivers, is often regarded as the cradle of civilization. The Sumerians, Akkadians, Babylonians, and Assyrians were among the prominent civilizations that emerged in this region. They developed writing systems, such as cuneiform, and made significant advancements in agriculture, architecture, and governance.",
    "Ancient Egypt, situated along the Nile River, flourished for thousands of years. The civilization of ancient Egypt is renowned for its monumental architecture, such as the pyramids and temples, as well as its intricate hieroglyphic writing system. The pharaohs, who were considered divine rulers, played a central role in Egyptian society and religion.",
    "The Indus Valley Civilization, located in present-day Pakistan and northwest India, was one of the world's earliest urban civilizations. It flourished around 2600-1900 BCE and featured well-planned cities with advanced drainage systems and grid-like street layouts. The civilization had a sophisticated culture, as evidenced by its seals, pottery, and urban planning.",
    "Ancient China, with a history spanning thousands of years, saw the rise and fall of several dynasties. The Shang, Zhou, Qin, Han, and Tang dynasties were among the most influential in shaping Chinese civilization. China made significant contributions to philosophy, technology, and governance, including the invention of papermaking, printing, and the compass.",
    "Ancient Greece is often regarded as the cradle of Western civilization. It was home to great philosophers such as Socrates, Plato, and Aristotle, who laid the foundations of Western thought. Greek city-states, such as Athens and Sparta, made significant contributions to art, architecture, literature, and democracy.",
    "Ancient Rome, founded in 753 BCE, grew from a small city-state to a vast empire spanning three continents. Roman civilization made enduring contributions to law, engineering, architecture, and governance. The Roman Republic, followed by the Roman Empire, played a central role in shaping the history of Europe and the Mediterranean region.",
    "The Byzantine Empire, also known as the Eastern Roman Empire, emerged after the fall of the Western Roman Empire. Centered around the capital city of Constantinople (modern-day Istanbul), it preserved and transmitted classical knowledge and culture while developing its own distinct identity. The Byzantine Empire played a crucial role in the spread of Christianity and the preservation of Greek and Roman traditions.",
    "The Islamic Golden Age, spanning from the 8th to the 14th century, witnessed remarkable advancements in science, mathematics, medicine, philosophy, and art within the Islamic world. Scholars such as Avicenna, Al-Khwarizmi, and Ibn Rushd made groundbreaking contributions that laid the foundation for the Renaissance in Europe.",
    "The European Middle Ages, also known as the medieval period, lasted from the 5th to the 15th century. It was characterized by feudalism, the rise of Christianity, the Crusades, and the growth of medieval towns and trade networks. The period saw the emergence of powerful kingdoms and empires, such as the Carolingian Empire, the Holy Roman Empire, and the Kingdom of France.",
    "The Renaissance, meaning rebirth was a cultural and intellectual movement that began in Italy in the 14th century and spread across Europe. It marked a revival of interest in classical art, literature, science, and learning. Artists such as Leonardo da Vinci, Michelangelo, and Raphael produced masterpieces that embodied the spirit of humanism and creativity.",
    "The Age of Exploration, beginning in the 15th century, saw European explorers venture into uncharted territories in search of new trade routes and territories. Explorers such as Christopher Columbus, Vasco da Gama, and Ferdinand Magellan made significant voyages that expanded European influence and led to the colonization of the Americas, Africa, and Asia.",
    "The Protestant Reformation, initiated by Martin Luther in the early 16th century, challenged the authority of the Catholic Church and led to the emergence of Protestantism as a major branch of Christianity. The Reformation sparked religious conflicts, wars, and social upheaval across Europe, profoundly impacting the course of European history.",
    "The Age of Enlightenment, also known as the Age of Reason, was an intellectual and philosophical movement that emerged in the 17th and 18th centuries. Enlightenment thinkers such as Voltaire, John Locke, and Jean-Jacques Rousseau advocated for reason, liberty, and progress, laying the groundwork for modern democratic societies.",
    "The Industrial Revolution, which began in Britain in the late 18th century, marked a profound shift from agrarian and handmade production to industrialized manufacturing. Technological innovations such as the steam engine, textile machinery, and iron smelting transformed society, leading to urbanization, mass production, and economic growth.",
    "The 19th century saw the expansion of European powers through imperialism, colonization, and the establishment of overseas empires. European nations, including Britain, France, Germany, and Belgium, carved up Africa, Asia, and the Pacific, exploiting their resources and dominating indigenous populations.",
    "The 20th century was marked by two devastating world wars that reshaped the geopolitical landscape and had far-reaching consequences. World War I, fought from 1914 to 1918, saw the collapse of empires, the redrawing of borders, and the emergence of new nations. World War II, fought from 1939 to 1945, resulted in unprecedented destruction, genocide, and the emergence of the United States and the Soviet Union as superpowers.",
    
]
}

function ReadAloud() {
    const [finalTranscript, setFinalTranscript] = useState(''); 
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [start, setStart] = useState(false);
    const [result, setResult] = useState(false);
    const [sameWord, setSameWord] = useState(0);
    const [count, setCount] = useState(0);
    const [category, setCategory] = useState(null);

    if (!browserSupportsSpeechRecognition) {
        return <div>Speech recognition is not supported by your browser.</div>;
    }

    const handleTopic = (item) => {
        setCategory(item);
    };

    function countWords(text) {
        text = text.trim();
        const words = text.split(/\s+/);
        return words.length;
    }
    
    // useEffect(() => {
    //     const countCommonWords = (str1, str2) => {
    //         const words1 = str1.trim().split(/\s+/);
    //         const words2 = str2.trim().split(/\s+/);
    //         let commonCount = 0;
    //         words1.forEach(word1 => {
    //             if (words2.includes(word1)) {
    //                 commonCount++;
    //             }
    //         });
    //         return commonCount;
    //     };
    
    //     if (result) {
    //         const commonWordsCount = countCommonWords(finalTranscript, transcript);
    //         setSameWord(commonWordsCount);
    //     }
    // }, [result, finalTranscript, transcript]);

    const handleStartClick = () => {
        setStart(true);
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    };

    const handleStop = () => {
        SpeechRecognition.stopListening();
        setFinalTranscript(transcript); 
        setResult(true);
        setCount(count + 1);
    };

    const handleReset = () => {
        setStart(false);
        resetTranscript();
        setResult(false);
        setCategory(null);
    };
    
    const line = ["Science", "Food", "History",  "Economics", "Psychology",  "Self-Health", "Sprituality", "Technology", "Free-Style"];
    const margin = `top ${category ? 'h-1/12' : 'h-1/6'}`;

    return (
        <div className=" bg-slate-900">
            <div className="blur-sm">
                <ReadAloudHeroSection />
            </div>
            <div className="flex h-screen justify-center relative text-slate-200">
                <div className="flex justify-center ">
                    <div className="font-serif text-6xl mt-10">
                        <div className={margin}></div>
                        <div className="heading flex items-center justify-center">
                            <h1 className="mb-4 text-3xl font-sans text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Read Aloud</span></h1>
                        </div>
                        {!category && (
                            <div>
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
                                    <div>
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
                            </div>
                        )}
                        {category && !start && (
                            <div className='text-3xl flex flex-col items-center justify-center'>
                    <div className="w-2/3 flex items-center justify-center font-extrabold text-4xl">
                        {category}
                    </div>
                    <div className="w-2/3 flex items-center justify-center bg-slate-700 m-5 rounded-xl p-5 text-2xl text-white opacity-70 shadow-xl shadow-black">
                        {History.text[0]}
                    </div>

                    <div className="" 
                    onClick={handleStartClick}
                    ><button
                    
                    className="px-6 py-2 font-medium bg-indigo-600 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] mt-10">
                        Start!
                    </button></div>
                    </div>
                )
                }
                {category && start && !result && (
                    <div className='text-3xl flex flex-col items-center justify-center mt-10 font-mono '>
                    <div className="w-2/3 flex items-center justify-center font-extrabold text-2xl">
                        {category}
                    </div>
                    <div className="w-2/3 flex items-center justify-center bg-slate-700 m-5 rounded-xl p-5 text-xl text-white opacity-70 shadow-xl shadow-black">
                        {History.text[0]}
                    </div>
                    <div className="w-2/3 flex items-center justify-center font-extrabold text-2xl">
                        Your Output
                    </div>
                    <div className="w-2/3 flex items-center justify-center bg-slate-700 m-5 rounded-xl p-5 text-xl text-white opacity-70 shadow-xl shadow-black">
                        { transcript }
                    </div>

                    <div className="" 
                    onClick={handleStop}
                    ><button
                    
                    className="px-6 py-2 font-medium bg-indigo-600 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] mt-10">
                        End
                    </button></div>
                    </div>
                )

                }

                {result &&(
                    <div className='text-3xl flex flex-col items-center justify-center mt-10 font-mono '>
                    <div className="w-2/3 flex items-center justify-center font-extrabold text-2xl">
                        Your Result
                    </div>
                    <div className="w-full flex items-center justify-between bg-slate-700 m-5 rounded-xl p-5 text-xl text-white opacity-70 shadow-xl shadow-black">
                        <div className="box1 ">
                            <div className="field1 m-2 flex justify-between"><div className="">Topic</div> <div>:</div></div>
                            <div className="field1 m-2 flex justify-between"><div className="">Total Words</div> <div>:</div></div>
                            <div className="field1 m-2 flex justify-between"><div className="">Words Matched</div> <div>:</div></div>
                            <div className="field1 m-2 flex justify-between"><div className="">Ideal Time</div> <div>:</div></div>
                            <div className="field1 m-2 flex justify-between"><div className="">Your Time</div> <div>:</div></div>
                            <div className="field1 m-2 flex justify-between"><div className="">Stummer Time</div> <div>:</div></div>
                            <div className="field1 m-2 flex justify-between"><div className="">Accuracy</div> <div>:</div></div>
                        </div>
                        <div className="box2">
                            <div className="field1 m-2 w-full"> {category} </div>
                            <div className="field1 m-2">{countWords(History.text[0])} </div>
                            <div className="field1 m-2">{sameWord}</div>
                            <div className="field1 m-2">Ideal Time</div>
                            <div className="field1 m-2">Your Time</div>
                            <div className="field1 m-2">Stummer Time</div>
                            <div className="field1 m-2">Accuracy</div>
                        </div>
                    </div>




                    <div className="" 
                    onClick={handleReset}
                    ><button
                    
                    className="px-6 py-2 font-medium bg-indigo-600 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] mt-10">
                        Restart
                    </button></div>
                    </div>
                )

                }
            </div>

        </div>
        </div>  
        </div>
    );
}

export default ReadAloud;

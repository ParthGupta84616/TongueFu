import React, { Children, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTwisterEnglishAsync, selectTwisterEnglish } from './tongueSlice';
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { FiLock, FiSend } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Tongue = () => {
  const [language, setLanguage] = useState(null)
  const [level, setLevel] = useState(null)
  const dispatch = useDispatch();
  const Twister = useSelector(selectTwisterEnglish);
  const [showTwister, setShowTwister] = useState(false);
  const color = useMotionValue(COLORS_TOP[0]);
  const [showWindow, setShowWindow] = useState(1)
  const [randomNumber, setRandomNumber] = useState(1)

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    if (language && level) { 
      dispatch(fetchTwisterEnglishAsync({ level: level, language: language }));
      setLevel(null);
      setLanguage(null);
    }
    
    const timer = setTimeout(() => {
      setShowTwister(true);
    }, 500); 
    
    return () => clearTimeout(timer);
  }, [dispatch, language, level]);
  
  useEffect(() => {
   

  if(showTwister && Twister){
    setRandomNumber(Math.floor(Math.random() * Twister.length) + 1)
    

  }
  }, [Twister?.text])
  
  // let line = Twister[randomNumber].text

  // let lineArr = line.split(" ")


  return (
    <div>
    <div className="relative h-screen w-full">
      <motion.section
      style={{
        backgroundImage,
      }}
      className="absolute grid w-full h-full min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200 z-0"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
    <div className="relative z-20 text-white flex justify-center h-screen w-full lg:p-10">
  <div className="upperbox lg:w-1/2 w-4/5 flex flex-col justify-center items-center"> 
    <div className="text-6xl text-gray-100 font-bold p-10 text-center">
      Tongue Twister
    </div>
    <div className="text-2xl text-gray-300 font-semibold p-10 text-center "> 
      A Random Paragraph Generator That Will Generate Random Sentence For You Help's You In Fluency 
    </div>
      {showWindow===1? (
        <div className="language">
        <div className="text-2xl text-gray-300 font-semibold p-10 text-center"> 
              Select Your Language
            </div>
            <div className="level flex gap-8 justify-center items-center">
            <button className="rounded-2xl border-2 border-dashed border-black  bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none" 
            onClick={() => {
              setLanguage("English");
              setShowTwister(false);
              setShowWindow(2);

            }}>
              English
            </button>
            <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"  
            onClick={() => {
              setLanguage("Hindi");
              setShowTwister(false);
              setShowWindow(2);
            }}>
              Hindi
            </button>
            </div>
        </div>

      ):showWindow===2?(

        <div className="level">
      <div className="text-2xl text-gray-300 font-semibold p-10 text-center"> 
        Select Your Level
      </div>
      <div className="level flex gap-8">
      <button className="rounded-2xl border-2 border-dashed border-black  bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
       onClick={() => {setLevel("Easy");
        setShowTwister(false);
        setShowWindow(3)
        }}>
        Easy
      </button>
      <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none" 
      onClick={() => {setLevel("Moderate");
      setShowTwister(false);
      setShowWindow(3)}}>
        Medium
      </button>
      <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none" 
       onClick={() => {setLevel("Hard");
       setShowTwister(false);
       setShowWindow(3)}}>
        Hard
      </button>
      </div>
        </div>
      ):showWindow===3?(
        <div className="w-full">
          <div class=" flex text-blue-950 rounded-full border-gray-900 opacity-80 bg-gray-500 border-4 m-10 p-5 font-mono  text-center justify-center text-3xl">
     <h1> 
     {!showTwister && (
        <div>Loading</div>
      )}
      {showTwister && Twister && Twister[1] && (
        <div>{Twister[randomNumber].text}</div>

      )}
      </h1>
    </div>
    <div className="flex justify-center items-center">
    <button className="rounded-2xl border-2 border-dashed border-black  bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none" 
            onClick={() => {
              setShowWindow(1);
            }}>
              Regenerate
            </button>
    
    </div>

        </div>
      ):(
        <h2>Error</h2>
      )
      }
      
    


  </div>
</div>

    </div>
    </div>
  );
};


const NeumorphismButton = ({children , handleReset}) => {
  return (
    <button
      className="
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-black
        font-semibold
        bg-gray-500
        
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    "
    onclick={handleReset}
    >
      <FiSend />
      <span> {children} </span>
    </button>
  );
};

export default Tongue;


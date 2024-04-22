import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

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

  return (
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
    {/* <div className="text-2xl text-gray-300 font-semibold p-10 text-center"> 
      Select Your Language
    </div>
    <div className="level flex gap-8">
    <button className="rounded-2xl border-2 border-dashed border-black  bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      English
    </button>
    <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Hindi
    </button>
    </div> */}
    <div className="text-2xl text-gray-300 font-semibold p-10 text-center"> 
      Select Your Level
    </div>
    <div className="level flex gap-8">
    <button className="rounded-2xl border-2 border-dashed border-black  bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Easy
    </button>
    <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Medium
    </button>
    <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Hard
    </button>
    </div>
    <div class="w-full flex text-white rounded-lg border-gray-900 opacity-80 bg-gray-800 border-4 m-10 p-auto font-mono  text-center justify-center text-xl">
     <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, illo?</h1>
    </div>


  </div>
</div>

    </div>
  );
};
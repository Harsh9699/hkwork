import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LaptopUI = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
    {/* Grid Background for extra tech feel */}
    <div className="absolute inset-0 opacity-20" 
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }}
    />

    <div className="relative flex flex-col items-center">
      {/* Laptop Screen */}
      <div className="relative flex h-[180px] w-[280px] items-center justify-center rounded-t-3xl border-[6px] border-[#1a1a1a] bg-black shadow-2xl sm:h-[280px] sm:w-[440px]">
        {/* Screen Glare */}
        <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
        
        {/* Webcam */}
        <div className="absolute top-2 h-1.5 w-1.5 rounded-full bg-[#333] shadow-inner" />
        
        {/* "HK" Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-6xl font-display font-bold tracking-widest text-white sm:text-8xl"
          style={{ textShadow: "0 0 40px rgba(122, 162, 255, 0.6)" }}
        >
          HK
        </motion.div>
      </div>

      {/* Laptop Base */}
      <div className="relative h-4 w-[320px] rounded-b-2xl rounded-t-[2px] bg-gradient-to-b from-[#2a2a2a] to-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:w-[500px]">
        {/* Opening Groove */}
        <div className="mx-auto h-1 w-20 rounded-b-md bg-[#0a0a0a] sm:w-28" />
      </div>
      
      {/* Glow cast on table */}
      <div className="absolute -bottom-10 h-4 w-[300px] rounded-[100%] bg-blueGlow/20 blur-xl sm:w-[460px]" />
    </div>
  </div>
);

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  // Fallback to ensure unmount happens if animation gets stuck
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* Left Door */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.17, 1], delay: 1.8 }}
      >
        <LaptopUI />
      </motion.div>

      {/* Right Door */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.17, 1], delay: 1.8 }}
        onAnimationComplete={() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }}
      >
        <LaptopUI />
      </motion.div>
    </div>
  );
}

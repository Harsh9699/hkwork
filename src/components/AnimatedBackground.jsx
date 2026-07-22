import { motion } from "framer-motion";
import PaperBackground from "./PaperBackground";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-bg">
      {/* Animated Glowing Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 100, -50, 0], 
          y: [0, 50, -100, 0],
          scale: [1, 1.2, 0.8, 1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-16 h-[500px] w-[500px] rounded-full bg-blueGlow/20 blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, -100, 50, 0], 
          y: [0, 100, -50, 0],
          scale: [1, 0.9, 1.3, 1] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 top-1/4 h-[600px] w-[600px] rounded-full bg-violetGlow/15 blur-[140px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, 50, -100, 0], 
          y: [0, -150, 50, 0],
          scale: [1, 1.4, 0.9, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-blueGlow/10 blur-[100px]" 
      />

      {/* Crumpled Paper Animated Grid */}
      <PaperBackground />

      {/* Matte Noise Texture */}
      <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-multiply" />
    </div>
  );
}

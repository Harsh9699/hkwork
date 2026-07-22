import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // Use Framer Motion values for ultra-smooth, 60fps performance without React re-renders
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring physics for the trailing outer ring
  const outerSpringConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXOuter = useSpring(cursorX, outerSpringConfig);
  const cursorYOuter = useSpring(cursorY, outerSpringConfig);

  // Spring physics for the inner dot (much faster, tighter spring)
  const innerSpringConfig = { damping: 30, stiffness: 700, mass: 0.1 };
  const cursorXInner = useSpring(cursorX, innerSpringConfig);
  const cursorYInner = useSpring(cursorY, innerSpringConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide custom cursor on mobile touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e) => {
      if (!isVisible) setIsVisible(true);
      // Offset by half width/height to center the div on the cursor
      cursorX.set(e.clientX - 20); 
      cursorY.set(e.clientY - 20);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if we are hovering a clickable element
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner precise dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-textMain shadow-soft"
        style={{
          x: cursorXInner,
          y: cursorYInner,
          // Adjust offset since outer is 40px but inner is 10px (offset by 15px)
          translateX: 15,
          translateY: 15,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Outer trailing spring ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d4b455]"
        style={{
          x: cursorXOuter,
          y: cursorYOuter,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(212, 180, 85, 0.15)" : "rgba(212, 180, 85, 0)",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}

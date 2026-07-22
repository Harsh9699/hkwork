import { useEffect, useRef, useState } from "react";

export default function InteractiveGrid() {
  const containerRef = useRef(null);
  const [gridSize, setGridSize] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setGridSize({
          columns: Math.floor(clientWidth / 40) + 1,
          rows: Math.floor(clientHeight / 40) + 1,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update CSS variables directly on the DOM node to avoid React re-renders!
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--mouse-x", `-1000px`);
      containerRef.current.style.setProperty("--mouse-y", `-1000px`);
    }
  };

  // Pre-generate grid items
  const gridItems = Array.from({ length: gridSize.columns * gridSize.rows }).map((_, i) => (
    <div key={i} className="flex h-10 w-10 items-center justify-center">
      <div className="text-[12px] font-bold font-sans">+</div>
    </div>
  ));

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 z-0 overflow-hidden"
      style={{
        "--mouse-x": "-1000px",
        "--mouse-y": "-1000px",
      }}
    >
      {/* Base faint grid */}
      <div 
        className="absolute inset-0 flex flex-wrap text-black/10" 
        style={{ width: gridSize.columns * 40, height: gridSize.rows * 40 }}
      >
        {gridItems}
      </div>

      {/* Glowing yellow grid revealed purely by GPU CSS mask */}
      <div 
        className="absolute inset-0 flex flex-wrap text-[#eab308] drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]"
        style={{ 
          width: gridSize.columns * 40, 
          height: gridSize.rows * 40,
          maskImage: "radial-gradient(180px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(180px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
        }}
      >
        {gridItems}
      </div>
    </div>
  );
}

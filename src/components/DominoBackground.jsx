import { useEffect, useRef, useState } from "react";

export default function DominoBackground() {
  const containerRef = useRef(null);
  const [gridSize, setGridSize] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        // Tile size 150px
        setGridSize({
          columns: Math.ceil(clientWidth / 150) + 1,
          rows: Math.ceil(clientHeight / 150) + 1,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <div 
        className="absolute inset-0 flex flex-wrap" 
        style={{ width: gridSize.columns * 150, height: gridSize.rows * 150 }}
      >
        {Array.from({ length: gridSize.columns * gridSize.rows }).map((_, i) => {
          const col = i % gridSize.columns;
          const row = Math.floor(i / gridSize.columns);
          
          // Calculate diagonal wave delay
          const delay = (col + row) * 0.15;

          return (
            <div
              key={i}
              className="animate-domino border border-[#b4a078]/20"
              style={{ 
                width: 150, 
                height: 150, 
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

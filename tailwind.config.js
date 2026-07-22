/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fcfcfa",
        surface: "rgba(255,255,255,0.7)",
        borderSoft: "rgba(255,255,255,0.8)",
        textMain: "#1c1917",
        textMuted: "#78716c",
        blueGlow: "#fce97a", // Whitish-yellow glow
        violetGlow: "#fef08a", // Softer yellow glow
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        display: ["Syne", "sans-serif"],
        serifAccent: ["Syne", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glass:
          "0 12px 40px rgba(220, 205, 160, 0.14), inset 0 1px 0 rgba(255,255,255,0.85)",
        soft:
          "0 10px 30px rgba(180, 160, 120, 0.08), 0 2px 10px rgba(180, 160, 120, 0.04)",
        glow:
          "0 0 0 1px rgba(255,255,255,0.8), 0 20px 50px rgba(252, 233, 122, 0.25)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 20%, rgba(252, 233, 122, 0.25), transparent 30%), radial-gradient(circle at 80% 10%, rgba(254, 240, 138, 0.2), transparent 25%), radial-gradient(circle at 50% 90%, rgba(252, 233, 122, 0.15), transparent 30%)",
        "card-radial":
          "radial-gradient(circle at top right, rgba(252, 233, 122, 0.25), transparent 40%), radial-gradient(circle at bottom left, rgba(254, 240, 138, 0.2), transparent 40%)",
      },
      blur: {
        xs: "2px",
      },
      keyframes: {
        floatY: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.65", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        floatY: "floatY 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        spinSlow: "spinSlow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

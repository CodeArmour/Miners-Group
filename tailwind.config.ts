import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigoElectric: "#5B3DF5",
        lilacSoft: "#E8DEFF",
        ink: "#11111A",
        offWhite: "#F8F8FB",
        muted: "#72727E",
        limeSignal: "#CFFF74"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 17, 26, 0.08)",
        lift: "0 28px 90px rgba(91, 61, 245, 0.18)"
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "Geist", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

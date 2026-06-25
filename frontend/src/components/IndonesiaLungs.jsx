import React from "react";
import { motion } from "framer-motion";

const ISLANDS = [
  { name: "Sumatra", res: "Palm · Petroleum · Minerals", x: "8%", y: "42%", w: 130, h: 70, rot: -18 },
  { name: "Java", res: "Rice · Industry", x: "30%", y: "66%", w: 150, h: 38, rot: -4 },
  { name: "Kalimantan", res: "★ First Project · 243,000 ha · KalSel", x: "34%", y: "30%", w: 150, h: 110, rot: 6, star: true },
  { name: "Sulawesi", res: "Nickel · Cocoa", x: "56%", y: "34%", w: 90, h: 100, rot: 10 },
  { name: "Nusa Tenggara · Bali", res: "Tourism · Marine", x: "52%", y: "70%", w: 130, h: 26, rot: -2 },
  { name: "Maluku", res: "Spice · Marine", x: "72%", y: "52%", w: 60, h: 60, rot: 0 },
  { name: "Papua", res: "Gold · Copper · Biodiversity", x: "78%", y: "38%", w: 150, h: 95, rot: -6 },
];

export const IndonesiaLungs = () => (
  <div className="relative w-full aspect-[16/8] max-w-5xl mx-auto">
    <div className="absolute inset-0 grid-texture opacity-30 rounded-lg" />
    {ISLANDS.map((i, idx) => (
      <motion.div
        key={i.name}
        className="absolute"
        style={{ left: i.x, top: i.y }}
        animate={{ scale: [1, 1.035, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.25 }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            width: i.w,
            height: i.h,
            transform: `rotate(${i.rot}deg)`,
            borderRadius: "48% 52% 56% 44% / 54% 46% 58% 42%",
            background: i.star
              ? "radial-gradient(circle at 40% 40%, #52b788, #1a3c2b)"
              : "radial-gradient(circle at 40% 40%, #2d6a4f, #0f1e16)",
            boxShadow: i.star
              ? "0 0 50px rgba(82,183,136,0.55), inset 0 0 20px rgba(216,243,220,0.3)"
              : "inset 0 0 16px rgba(0,0,0,0.4)",
          }}
        >
          {i.star && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ borderRadius: "48% 52% 56% 44% / 54% 46% 58% 42%", border: "1px solid #95d5b2" }}
              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
          )}
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 text-center whitespace-nowrap" style={{ top: i.h }}>
          <p className={`text-[11px] font-medium ${i.star ? "text-leaf" : "text-white/80"}`}>{i.name}</p>
          <p className="text-[9px] text-mint/45">{i.res}</p>
        </div>
      </motion.div>
    ))}
    <p className="absolute bottom-0 left-0 eyebrow text-mint/40">Indonesia · 17,508 Islands · 5.8M km² Sea</p>
  </div>
);

export default IndonesiaLungs;

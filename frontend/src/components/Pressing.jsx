import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMG } from "@/lib/site";

// "The Pressing" — cinematic opening sequence.
// Treatment B (default): layered parallax + particle field morph.
// Treatment C (reduced-motion / mobile): minimal particle resolve to the mark.
export const Pressing = ({ onComplete }) => {
  const [beat, setBeat] = useState(0);
  const beatRef = useRef(0);
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const timeouts = useRef([]);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const small = window.innerWidth < 768;
    const isC = mq.matches || small;
    setReduced(isC);

    const schedule = isC
      ? [[1, 200], [5, 1100], [7, 2100], [8, 3100]]
      : [[1, 800], [2, 2300], [3, 3600], [4, 4200], [5, 5200], [6, 6300], [7, 7200], [8, 8100]];

    schedule.forEach(([b, t]) => {
      const id = setTimeout(() => {
        beatRef.current = b;
        setBeat(b);
        if (b === 8) setTimeout(() => onComplete?.(), 1100);
      }, t);
      timeouts.current.push(id);
    });

    return () => timeouts.current.forEach(clearTimeout);
    // eslint-disable-next-line
  }, []);

  // Canvas particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);

    const N = reduced ? 90 : 150;
    const parts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.4,
      vy: -(Math.random() * 0.4 + 0.15),
      vx: (Math.random() - 0.5) * 0.2,
      a: Math.random() * 0.6 + 0.2,
      tx: w / 2 + (Math.random() - 0.5) * 120,
      ty: h / 2 + (Math.random() - 0.5) * 120,
    }));
    const sils = [
      { x: w * 0.2, y: h * 0.55, s: 70, dir: -1 },
      { x: w * 0.75, y: h * 0.45, s: 90, dir: 1 },
      { x: w * 0.5, y: h * 0.7, s: 60, dir: -1 },
    ];

    const draw = () => {
      const b = beatRef.current;
      ctx.clearRect(0, 0, w, h);

      // particles
      parts.forEach((p) => {
        if (reduced && b >= 5) {
          // converge toward centre to "assemble"
          p.x += (p.tx - p.x) * 0.04;
          p.y += (p.ty - p.y) * 0.04;
        } else {
          p.y += p.vy;
          p.x += p.vx;
          if (p.y < -5) { p.y = h + 5; p.x = Math.random() * w; }
        }
        const visible = b >= 1 && b <= 6 ? p.a : b < 1 ? p.a * 0.4 : p.a * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(82,183,136,${visible})`;
        ctx.fill();
      });

      // sea-life silhouettes part during descent (beat 4), gone by beat 5+
      if (!reduced && (b === 4 || b === 5)) {
        const partAmt = b === 5 ? 240 : 0;
        sils.forEach((s) => {
          ctx.save();
          ctx.globalAlpha = b === 5 ? 0.12 : 0.22;
          ctx.fillStyle = "#06120c";
          ctx.beginPath();
          ctx.ellipse(s.x + s.dir * partAmt, s.y, s.s, s.s * 0.4, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", onResize); };
  }, [reduced]);

  const skip = () => {
    timeouts.current.forEach(clearTimeout);
    cancelAnimationFrame(rafRef.current);
    onComplete?.();
  };

  const layer = (show, extra = {}) => ({
    initial: { opacity: 0 },
    animate: { opacity: show ? 1 : 0, ...extra },
    transition: { duration: 1.1, ease: "easeInOut" },
  });

  return (
    <motion.div
      data-testid="pressing-sequence"
      className="fixed inset-0 z-[100] bg-black overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* BEAT 1-2: living emerald Indonesia */}
      <motion.div
        className="absolute inset-0"
        {...layer(beat >= 1 && beat <= 3)}
      >
        <motion.img
          src={IMG.canopyKalimantan}
          alt=""
          className="w-full h-full object-cover"
          animate={beat === 2 ? { scale: [1.05, 1.1, 1.05] } : { scale: 1.05 }}
          transition={{ duration: 1.6, repeat: beat === 2 ? 2 : 0, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-base/40 via-transparent to-forest-base/80 mix-blend-multiply" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, rgba(82,183,136,0.25), transparent 60%)" }} />
      </motion.div>

      {/* BEAT 3-6: deep water / ocean */}
      <motion.div className="absolute inset-0" {...layer(beat >= 4 && beat <= 6)}>
        <img src={IMG.ocean} alt="" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* BEAT 5: octopus unfurls */}
      <motion.div className="absolute inset-0 flex items-center justify-center" {...layer(beat === 5 || beat === 6)}>
        <motion.img
          src={IMG.octopusEmerald}
          alt=""
          className="w-[min(60vw,520px)] mark-glow"
          animate={{ scale: beat >= 5 ? [0.85, 1] : 0.85, rotate: beat === 6 ? 4 : 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </motion.div>

      {/* BEAT 6: sea becomes soil */}
      <motion.div className="absolute inset-0" {...layer(beat === 6)}>
        <img src={IMG.soilDark} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest-base/40" />
      </motion.div>

      {/* BEAT 7: the mark is pressed and resolves */}
      <motion.div className="absolute inset-0 flex items-center justify-center" {...layer(beat >= 7)}>
        <motion.img
          src={IMG.octopusBiochar}
          alt="OKN mark"
          className="w-[min(50vw,420px)]"
          initial={{ scale: 1.3, filter: "blur(14px)" }}
          animate={beat >= 7 ? { scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* BEAT 0: first breath point of light */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: beat === 0 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-3 h-3 rounded-full bg-leaf mark-glow animate-pulse" />
      </motion.div>

      {/* Canvas particles overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Captions */}
      <div className="absolute inset-x-0 bottom-[18%] flex justify-center pointer-events-none px-6">
        <AnimatePresence mode="wait">
          {beat >= 1 && beat <= 2 && (
            <motion.p
              key="cap1"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="font-serif italic text-xl sm:text-2xl text-mint/90 text-center"
            >
              Zamrud Khatulistiwa — the Emerald of the Equator
            </motion.p>
          )}
          {beat === 2 && (
            <motion.p key="cap2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="eyebrow text-leaf absolute -bottom-8">The world's other lung</motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Skip */}
      <button
        onClick={skip}
        data-testid="skip-intro"
        className="absolute top-6 right-6 z-10 eyebrow text-white/60 hover:text-leaf transition-colors px-4 py-2 border border-white/15 rounded-full"
      >
        Skip Intro
      </button>
    </motion.div>
  );
};

export default Pressing;

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function BoomBookPage({
  title = "BOOM SHAKA LAKA!",
  tagline = "Play. Learn. Grow.",
  blurb =
    "A high-energy kids' book from Luma Sportz n Fun—packed with movement, mini-games, and memorable lessons for home, class, and the field.",
  primaryImage = {
    src: "/images/boom-banner2.png",
    alt: "Boom Shaka Laka banner",
  },
  secondaryImage = {
    src: "/images/boom-info.png",
    alt: "Coach C message spread",
  },
  buyUrl = "https://square.link/u/152nPlPX",
  buyText = "Buy Now",
  releaseNote = "Coming December 2025",
  accent = "violet",
}) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yPrimary = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  const accentBg = `bg-${accent}-600`;
  const accentBgHover = `hover:bg-${accent}-700`;
  const accentRing = `focus-visible:ring-${accent}-400`;

  // Lightbox state
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-indigo-900 via-violet-900 to-slate-950 text-white">
      {/* HERO - Two column with a dedicated gallery column for readability */}
      <section ref={heroRef} className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <motion.div style={{ opacity: heroOpacity }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-5">
            {/* Copy / CTA */}
            <div className="md:col-span-2">
              <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide">
                Luma Sportz n Fun
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                {title}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-3 text-xl/8 text-violet-100">
                {tagline}
              </motion.p>
              {releaseNote && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-2 text-sm font-semibold text-amber-300">
                  {releaseNote}
                </motion.p>
              )}
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 max-w-prose text-base/7 text-violet-100/90">
                {blurb}
              </motion.p>

              <motion.a
                href={buyUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-8 inline-flex items-center gap-2 rounded-2xl ${accentBg} ${accentBgHover} px-6 py-3 text-base font-semibold shadow-lg ring-1 ring-white/10 transition focus-visible:outline-none focus-visible:ring-4 ${accentRing}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M2.25 3.75a.75.75 0 0 1 .75-.75h1.636a1.5 1.5 0 0 1 1.44 1.091l.383 1.436h12.516a1.5 1.5 0 0 1 1.456 1.894l-1.5 5.25A1.5 1.5 0 0 1 18.5 14.25H8.053l.287 1.076a.75.75 0 0 0 .723.574H19.5a.75.75 0 0 1 0 1.5H9.063a2.25 2.25 0 0 1-2.177-1.72L4.51 5.25H3a.75.75 0 0 1-.75-.75ZM8.25 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>
                {buyText}
              </motion.a>
            </div>

            {/* Gallery column: larger, readable images with equal priority */}
            <div className="md:col-span-3">
              <div className="grid gap-6">
                {/* Primary image - large, aspect fit for readability */}
                <motion.div
                  style={{ y: yPrimary }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl"
                >
                  <motion.img
                    src={primaryImage.src}
                    alt={primaryImage.alt || "Primary book artwork"}
                    className="mx-auto h-auto w-full max-w-[1200px] object-contain"
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setLightbox(primaryImage)}
                    role="button"
                  />
                  <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20 blur-2xl" />
                </motion.div>

                {/* Secondary image - equally large for inside spread readability */}
                <motion.div
                  style={{ y: ySecondary }}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl"
                >
                  <motion.img
                    src={secondaryImage.src}
                    alt={secondaryImage.alt || "Secondary book artwork"}
                    className="mx-auto h-auto w-full max-w-[1400px] object-contain"
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setLightbox(secondaryImage)}
                    role="button"
                  />
                  <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-tr from-sky-500/20 via-emerald-500/20 to-purple-500/20 blur-2xl" />
                </motion.div>
              </div>
              <p className="mt-2 text-xs text-violet-100/70">Click an image to view larger.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.button
            aria-label="Close image"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              key={lightbox.src}
              src={lightbox.src}
              alt={lightbox.alt || "Book artwork"}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="max-h-[88vh] w-auto max-w-[92vw] rounded-2xl object-contain shadow-2xl"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
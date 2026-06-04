import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

const trainingPhotos = [
  "/training1.webp",
  "/training2.webp",
  "/training3.webp",
  "/training4.webp",
];

export default function Training() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c === trainingPhotos.length - 1 ? 0 : c + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c === 0 ? trainingPhotos.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === trainingPhotos.length - 1 ? 0 : c + 1));

  return (
    <section id="training" className="deepa-bg section-padding relative overflow-hidden"
      aria-label="Trained by professional - Deepa Bridal Studio Nellore">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Award size={16} className="text-yellow-500" strokeWidth={1.5} />
            <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-yellow-600/75">Professional Training</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-2">Trained by Professionals</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-700" />
            <span className="font-script text-xl text-yellow-400/60">master the craft</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-700" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,x:-50}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8}}
            className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-2 border border-yellow-700/20" />
              <div className="absolute -inset-4 border border-yellow-800/10" />
              <div className="relative aspect-[4/3] overflow-hidden border border-yellow-800/30"
                style={{backgroundColor:'#0a2016'}}>
                <AnimatePresence mode="wait">
                  <motion.img key={current} src={trainingPhotos[current]}
                    alt={`Training photo ${current + 1} - Deepa Bridal Studio Nellore`}
                    initial={{opacity:0,scale:1.1}} animate={{opacity:1,scale:1}} exit={{opacity:0}}
                    transition={{duration:0.4}}
                    className="w-full h-full object-cover absolute inset-0" loading="lazy" />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 to-transparent pointer-events-none" />
                <button onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 border border-yellow-700/50 flex items-center justify-center hover:border-yellow-500 hover:bg-yellow-500/10 transition-all bg-green-950/70 z-10"
                  aria-label="Previous training photo">
                  <ChevronLeft size={16} className="text-yellow-400" />
                </button>
                <button onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 border border-yellow-700/50 flex items-center justify-center hover:border-yellow-500 hover:bg-yellow-500/10 transition-all bg-green-950/70 z-10"
                  aria-label="Next training photo">
                  <ChevronRight size={16} className="text-yellow-400" />
                </button>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {trainingPhotos.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-yellow-500 w-5' : 'bg-yellow-700/50 hover:bg-yellow-600/60'}`}
                    aria-label={`View training photo ${i + 1}`} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,x:50}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8,delay:0.2}}>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-yellow-600/75 mb-4">Our Expertise</p>
            <h3 className="font-display text-3xl md:text-4xl gold-text mb-4">Refined Under Expert Guidance</h3>
            <div className="divider-gold mb-6 opacity-50" />
            <div className="space-y-4 font-body text-base text-yellow-100/85 leading-relaxed">
              <p>At <strong className="gold-text">Deepa Bridal Studio</strong>, our craft has been shaped by rigorous training under seasoned industry professionals. Every technique — from airbrush application to intricate draping — is honed to perfection through years of mentorship and real-world experience.</p>
              <p>We bring that same dedication to every bride who trusts us with her big day. Our training ensures you receive the highest standard of bridal artistry in <strong>Nellore</strong>.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Advanced Airbrush","HD Finishing","Bridal Styling","Skin Science"].map(tag => (
                <span key={tag} className="px-4 py-1.5 border border-yellow-800/40 font-sans text-xs tracking-[0.18em] uppercase text-yellow-500/80">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

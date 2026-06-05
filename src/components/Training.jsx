import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, Trophy } from "lucide-react";

const trainingPhotos = [
  { src: "/train.jpeg", label: "b3bridal studio karthika shyam" },
  { src: "/train2.jpeg", label: "International Makeup Artist Suji" },
  { src: "/train3.jpeg", label: "International Saree Drapist Thivyan Jayareuben" },
];

const workExperiencePhotos = [
  { src: "/work1.webp", label: "Work Experience 1" },
  { src: "/work2.webp", label: "Work Experience 2" },
  { src: "/work3.webp", label: "Work Experience 3" },
];

function Slider({ photos, label, icon: Icon, inView }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c === photos.length - 1 ? 0 : c + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [photos.length]);

  const prev = () => setCurrent(c => (c === 0 ? photos.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === photos.length - 1 ? 0 : c + 1));

  return (
    <div className="relative max-w-md mx-auto w-full">
      <div className="flex items-center justify-center gap-2 mb-5">
        <Icon size={14} className="text-yellow-500" strokeWidth={1.5} />
        <p className="font-sans text-xs tracking-[0.5em] uppercase text-yellow-600/75">{label}</p>
      </div>
      <div className="absolute -inset-2 border border-yellow-700/20" />
      <div className="absolute -inset-4 border border-yellow-800/10" />
      <div className="relative aspect-[3/4] overflow-hidden border border-yellow-800/30 group"
        style={{backgroundColor:'#0a2016'}}>
        <AnimatePresence mode="wait">
          <motion.img key={current} src={photos[current].src}
            alt={`${label} photo ${current + 1}`}
            initial={{opacity:0,scale:1.1}} animate={{opacity:1,scale:1}} exit={{opacity:0}}
            transition={{duration:0.4}}
            className="w-full h-full object-cover absolute inset-0" loading="lazy" />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 p-3 m-2 z-10" style={{backgroundColor:'rgba(6,15,9,0.85)'}}>
          <p className="font-display text-base md:text-lg gold-text text-right leading-snug">{photos[current].label}</p>
        </div>
        <button onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 border border-yellow-700/50 flex items-center justify-center hover:border-yellow-500 hover:bg-yellow-500/10 transition-all bg-green-950/70 z-10"
          aria-label={`Previous ${label} photo`}>
          <ChevronLeft size={16} className="text-yellow-400" />
        </button>
        <button onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 border border-yellow-700/50 flex items-center justify-center hover:border-yellow-500 hover:bg-yellow-500/10 transition-all bg-green-950/70 z-10"
          aria-label={`Next ${label} photo`}>
          <ChevronRight size={16} className="text-yellow-400" />
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {photos.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-yellow-500 w-5' : 'bg-yellow-700/50 hover:bg-yellow-600/60'}`}
            aria-label={`View ${label} photo ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default function Training() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="training" className="deepa-bg section-padding relative overflow-hidden"
      aria-label="Training and achievements - Deepa Bridal Studio Nellore">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.6em] uppercase text-yellow-600/75 mb-2">Professional Training & Work Experience</p>
          <h2 className="font-display text-5xl md:text-6xl gold-text mb-2">Trained by Professionals</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-700" />
            <span className="font-sans text-2xl text-yellow-400/60">master the craft</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-700" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div initial={{opacity:0,x:-50}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8}}>
            <Slider photos={trainingPhotos} label="training" icon={Award} inView={inView} />
          </motion.div>
          <motion.div initial={{opacity:0,x:50}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8}}>
            <Slider photos={workExperiencePhotos} label="work experience" icon={Trophy} inView={inView} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

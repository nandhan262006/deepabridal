import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="deepa-bg relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="deepa-vignette" />

      {/* Extra center glow behind content */}
      <div className="absolute inset-0 z-[2] pointer-events-none"
        style={{background:'radial-gradient(ellipse 55% 55% at 50% 45%, rgba(26,79,52,0.35) 0%, transparent 70%)'}} />

      {/* Corner ornaments */}
      <svg className="absolute top-20 left-6 w-20 h-20 opacity-25 z-[3]" viewBox="0 0 80 80">
        <path d="M8,8 L8,36 M8,8 L36,8" stroke="#d4a017" strokeWidth="1" fill="none"/>
        <circle cx="8" cy="8" r="2" fill="#d4a017"/>
      </svg>
      <svg className="absolute top-20 right-6 w-20 h-20 opacity-25 z-[3]" viewBox="0 0 80 80">
        <path d="M72,8 L72,36 M72,8 L44,8" stroke="#d4a017" strokeWidth="1" fill="none"/>
        <circle cx="72" cy="8" r="2" fill="#d4a017"/>
      </svg>

      <div className="relative z-[3] text-center px-6 max-w-5xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.2}}
          className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-600" />
          <div className="flex items-center gap-2">
            <Sparkles size={11} className="text-yellow-500" />
            <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-yellow-500/70">Est. in Hyderabad</span>
            <Sparkles size={11} className="text-yellow-500" />
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-600" />
        </motion.div>

        <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}}
          transition={{duration:1,delay:0.4,type:"spring",stiffness:80}}
          className="mb-6 flex justify-center">
          <div className="w-28 h-28 border border-yellow-600/50 rounded-sm flex items-center justify-center relative">
            <div className="absolute inset-0 border border-yellow-400/15 rounded-sm m-1" />
            <span className="font-script text-7xl gold-text leading-none">d</span>
          </div>
        </motion.div>

        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,delay:0.6}}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[0.1em] uppercase gold-text mb-2">
          Deepa Bridal
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:0.8}}
          className="font-sans text-xs md:text-sm tracking-[0.6em] uppercase text-yellow-400/60 mb-6">
          Studio
        </motion.p>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:1.0}}
          className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-10 bg-yellow-700/50" />
          {["Hair","Skin","Makeup","Nails"].map((s,i)=>(
            <span key={s} className="flex items-center gap-3">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-yellow-300/80">{s}</span>
              {i<3&&<span className="text-yellow-700/50 text-xs">|</span>}
            </span>
          ))}
          <div className="h-px w-10 bg-yellow-700/50" />
        </motion.div>

        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1.2}}
          className="font-script text-4xl md:text-5xl text-white/90 mb-12 leading-relaxed">
          Signature bridal artistry by Deepa
        </motion.p>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:1.4}}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact"
            className="px-10 py-4 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 text-green-950 font-sans text-xs tracking-[0.3em] uppercase font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105">
            Book Your Bridal Look
          </a>
          <a href="#gallery"
            className="px-10 py-4 border border-yellow-600/50 text-yellow-300/80 font-sans text-xs tracking-[0.3em] uppercase hover:border-yellow-400 hover:bg-yellow-500/5 transition-all duration-300">
            View Portfolio
          </a>
        </motion.div>

        <motion.a href="tel:+917993393339" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:1.6}}
          className="inline-block mt-8 font-display text-2xl md:text-3xl gold-text hover:opacity-80 transition-opacity">
          Call: 799 339 3339
        </motion.a>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.2}}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[3]">
        <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-yellow-600/40">Scroll</span>
        <motion.div animate={{y:[0,7,0]}} transition={{repeat:Infinity,duration:2}}>
          <ChevronDown size={15} className="text-yellow-600/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

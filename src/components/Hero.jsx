import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="deepa-bg relative min-h-[60vh] sm:min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Deepa Bridal Studio - Best Bridal Makeup Artist in Nellore">
      <div className="deepa-vignette" />

      <div className="absolute inset-0 z-[2] pointer-events-none"
        style={{background:'radial-gradient(ellipse 55% 55% at 50% 45%, rgba(26,79,52,0.35) 0%, transparent 70%)'}} />

      <svg className="absolute top-14 sm:top-20 left-3 sm:left-6 w-14 sm:w-20 h-14 sm:h-20 opacity-25 z-[3]" viewBox="0 0 80 80" aria-hidden="true">
        <path d="M8,8 L8,36 M8,8 L36,8" stroke="#d4a017" strokeWidth="1" fill="none"/>
        <circle cx="8" cy="8" r="2" fill="#d4a017"/>
      </svg>
      <svg className="absolute top-14 sm:top-20 right-3 sm:right-6 w-14 sm:w-20 h-14 sm:h-20 opacity-25 z-[3]" viewBox="0 0 80 80" aria-hidden="true">
        <path d="M72,8 L72,36 M72,8 L44,8" stroke="#d4a017" strokeWidth="1" fill="none"/>
        <circle cx="72" cy="8" r="2" fill="#d4a017"/>
      </svg>

      <div className="relative z-[3] text-center px-6 max-w-5xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.2}}
          className="flex items-center justify-center gap-2 sm:gap-4 mb-5 sm:mb-8">
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-yellow-600" />
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Sparkles size={10} className="text-yellow-500 hidden sm:block" />
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] uppercase text-yellow-500/80">Est. in Nellore</span>
            <Sparkles size={10} className="text-yellow-500 hidden sm:block" />
          </div>
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-yellow-600" />
        </motion.div>

        <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}}
          transition={{duration:1,delay:0.4,type:"spring",stiffness:80}}
          className="mb-4 sm:mb-6 flex justify-center">
          <img src="/LOGO.png" alt="Deepa Bridal Studio - Luxury Bridal Makeup Artist in Nellore" className="h-32 sm:h-44 lg:h-52 w-auto" loading="eager" />
        </motion.div>

        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,delay:0.6}}
          className="font-display hero-heading text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[0.06em] sm:tracking-[0.1em] uppercase gold-text mb-2">
          Deepa Bridal
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:0.8}}
          className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.6em] uppercase text-yellow-400/75 mb-3 sm:mb-4">
          Best Bridal Makeup Studio in Nellore
        </motion.p>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:1.0}}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="h-px w-6 sm:w-10 bg-yellow-700/50" />
          {["Hair","Skin","Makeup","Nails"].map((s,i)=>(
            <span key={s} className="flex items-center gap-2 sm:gap-3">
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] uppercase text-yellow-300/85">{s}</span>
              {i<3&&<span className="text-yellow-700/50 text-[10px] sm:text-xs">|</span>}
            </span>
          ))}
          <div className="h-px w-6 sm:w-10 bg-yellow-700/50" />
        </motion.div>

        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1.2}}
          className="font-display hero-sub text-3xl sm:text-4xl md:text-5xl text-white mb-6 sm:mb-8 leading-relaxed" style={{textShadow:'0 2px 8px rgba(0,0,0,0.5)'}}>
          Signature bridal artistry by Deepa
        </motion.p>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:1.4}}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a href="#contact"
            className="touch-target w-full sm:w-auto flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 text-green-950 font-sans text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
            aria-label="Book your bridal makeup appointment at Deepa Bridal Studio Nellore">
            Book Your Bridal Look
          </a>
          <a href="#gallery"
            className="touch-target w-full sm:w-auto flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 border border-yellow-600/50 text-yellow-300/85 font-sans text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:border-yellow-400 hover:bg-yellow-500/5 transition-all duration-300"
            aria-label="View Deepa Bridal Studio portfolio and bridal makeup gallery">
            View Portfolio
          </a>
        </motion.div>

        <motion.a href="tel:+917993393339" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:1.6}}
          className="touch-target inline-flex items-center mt-4 sm:mt-5 font-display text-xl sm:text-2xl md:text-3xl gold-text hover:opacity-80 transition-opacity"
          aria-label="Call Deepa Bridal Studio at +91 79933 93339">
          Call: 799 339 3339
        </motion.a>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.2}}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[3]">
        <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.35em] sm:tracking-[0.4em] uppercase text-yellow-600/60">Scroll</span>
        <motion.div animate={{y:[0,7,0]}} transition={{repeat:Infinity,duration:2}}>
          <ChevronDown size={15} className="text-yellow-600/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

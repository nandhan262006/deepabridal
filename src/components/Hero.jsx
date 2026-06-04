import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home"
      className="deepa-bg relative min-h-[60vh] sm:min-h-[85vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden"
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

      <div className="relative z-[3] flex flex-col items-center text-center w-full px-6 max-w-5xl gap-y-5 sm:gap-y-6">

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:0.2}}
          className="flex items-center justify-center gap-2 sm:gap-4">
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-yellow-600" />
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Sparkles size={10} className="text-yellow-500 hidden sm:block" />
            <span className="font-sans text-xs tracking-[0.4em] uppercase text-yellow-500/80">Est. in Nellore</span>
            <Sparkles size={10} className="text-yellow-500 hidden sm:block" />
          </div>
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-yellow-600" />
        </motion.div>

        <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}}
          transition={{duration:1,delay:0.4,type:"spring",stiffness:80}}>
          <img src="/LOGO.webp" alt="Deepa Bridal Studio - Luxury Bridal Makeup Artist in Nellore"
            width="500" height="500" className="h-32 sm:h-44 lg:h-52 w-auto mx-auto" loading="eager" />
        </motion.div>

        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.9,delay:0.6}}
          className="font-display hero-heading text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[0.02em] sm:tracking-[0.08em] uppercase gold-text">
          Deepa Bridal Studio
        </motion.h1>

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:0.8}}
          className="font-sans text-xs sm:text-sm md:text-base tracking-[0.4em] sm:tracking-[0.6em] uppercase text-yellow-400/75">
          Best Bridal Makeup Studio in Nellore
        </motion.p>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:1.0}}
          className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="h-px w-6 sm:w-10 bg-yellow-700/50" />
          {["Hair","Skin","Makeup","Nails"].map((s,i)=>(
            <span key={s} className="flex items-center gap-2 sm:gap-3">
              <span className="font-sans text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.25em] uppercase text-yellow-300/85">{s}</span>
              {i<3&&<span className="text-yellow-700/50 text-xs sm:text-sm">|</span>}
            </span>
          ))}
          <div className="h-px w-6 sm:w-10 bg-yellow-700/50" />
        </motion.div>

        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1.2}}
          className="font-display hero-sub text-4xl sm:text-5xl md:text-6xl gold-text italic font-light leading-relaxed mb-2 sm:mb-3"
          style={{textShadow:'0 2px 12px rgba(0,0,0,0.6)'}}>
          Signature bridal artistry with Deepa
        </motion.p>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8,delay:1.4}}
          className="flex flex-col items-center w-full sm:flex-row sm:justify-center gap-3">
          <a href="#contact"
            className="touch-target w-full max-w-xs sm:max-w-none sm:w-auto flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 text-green-950 font-sans text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
            aria-label="Book your bridal makeup appointment at Deepa Bridal Studio Nellore">
            Book Your Bridal Look
          </a>
          <a href="#gallery"
            className="touch-target w-full max-w-xs sm:max-w-none sm:w-auto flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 border border-yellow-600/50 text-yellow-300/85 font-sans text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase hover:border-yellow-400 hover:bg-yellow-500/5 transition-all duration-300"
            aria-label="View Deepa Bridal Studio portfolio and bridal makeup gallery">
            View Portfolio
          </a>
        </motion.div>

        <motion.a href="tel:+917993393339" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:1.6}}
          className="touch-target font-display text-3xl sm:text-4xl md:text-5xl gold-text hover:opacity-80 transition-opacity"
          aria-label="Call Deepa Bridal Studio at +91 79933 93339">
          Call: 799 339 3339
        </motion.a>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.2}}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[3]">
        <span className="font-sans text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-yellow-600/60">Scroll</span>
        <motion.div animate={{y:[0,7,0]}} transition={{repeat:Infinity,duration:2}}>
          <ChevronDown size={15} className="text-yellow-600/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

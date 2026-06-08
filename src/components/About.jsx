import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Heart, Users, Clock } from "lucide-react";

const stats = [
  { icon: Heart,  value: "1000+", label: "Happy Brides" },
  { icon: Award,  value: "10+",   label: "Years Experience" },
  { icon: Users,  value: "1500+", label: "Clients Served" },
  { icon: Clock,  value: "24/7",  label: "Bridal Support" },
];

function CountUp({ to, suffix, inView, duration = 2000 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let startTime;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);
  return <>{count}{suffix}</>;
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="about" className="deepa-bg-dark section-padding relative overflow-hidden"
      aria-label="About Deepa Bridal Studio - Best Bridal Makeup Artist in Nellore">
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.025] pointer-events-none"
        style={{backgroundImage:'repeating-linear-gradient(45deg,#d4a017 0,#d4a017 1px,transparent 0,transparent 50%)',backgroundSize:'18px 18px'}} />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div initial={{opacity:0,x:-50}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.9}}
            className="relative">
            <div className="relative mx-auto max-w-xs sm:max-w-sm">
              <div className="absolute -inset-2 sm:-inset-3 border border-yellow-700/20" />
              <div className="absolute -inset-4 sm:-inset-6 border border-yellow-800/10" />
              <div className="w-full aspect-[3/4] border border-yellow-700/30 overflow-hidden flex items-center justify-center relative"
                style={{
                  backgroundColor:'#0e2a1a',
                  backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.022) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.022) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.022) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.022) 75%)`,
                  backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'
                }}>
                <img src="/hero1.webp" alt="Deepa - Professional Bridal Makeup Artist at Deepa Bridal Studio in Nellore" className="absolute inset-0 w-full h-full object-cover z-10" loading="lazy" width="800" height="1067" />
                <div className="absolute inset-0 z-20" style={{background:'radial-gradient(ellipse 70% 65% at 50% 35%,rgba(26,79,52,0.15) 0%,rgba(3,10,6,0.55) 100%)'}} />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,x:50}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.9,delay:0.2}}
            className="p-6 sm:p-8" style={{backgroundColor:'#000'}}>
            <p className="font-sans text-sm sm:text-base tracking-[0.4em] sm:tracking-[0.5em] uppercase text-yellow-600/75 mb-3 sm:mb-4">Deepa Bridal Studio</p>
            <h2 className="font-display section-title-lg text-5xl md:text-6xl gold-text mb-2">Meet Deepa</h2>
            <p className="font-sans text-xl sm:text-2xl text-yellow-400/70 mb-3 sm:mb-4">Professional Makeup Artist in Nellore</p>
            <div className="divider-gold mb-4 sm:mb-5" />
            <div className="space-y-3 sm:space-y-4 font-body text-base sm:text-lg text-yellow-100/85 leading-relaxed">
              <p>Hi, I am <span className="gold-text text-lg sm:text-xl">Deepa</span>, a professional makeup artist based in Nellore with over <strong className="text-yellow-300">15 years of experience</strong> in the beauty and makeup industry.</p>
              <p>Before starting my own salon, I worked for 9 years with some of the most reputed salon brands, including <strong className="text-yellow-300">Green Trends</strong>, <strong className="text-yellow-300">Javed Habib</strong>, <strong className="text-yellow-300">Naturals</strong>, and <strong className="text-yellow-300">Page3</strong>. <strong className="text-yellow-300">Six years ago</strong>, I established my own salon under my name, and since then, I have been dedicated to providing exceptional beauty and bridal services to my clients.</p>
              <p>The key to my success has always been my <strong className="text-yellow-300">client-first approach</strong>. I constantly put myself in my clients' shoes and ask, <span className="italic text-yellow-200/90">"If I were the client, what kind of service would I expect?"</span> This mindset helps me deliver the best possible experience every time.</p>
              <p>I <strong className="text-yellow-300">never compromise on quality</strong>. I use only <strong className="text-yellow-300">premium, branded products</strong> to ensure the highest standards of safety, comfort, and results. Because of this commitment, my clients trust me completely and continue to return for their beauty and bridal needs year after year.</p>
              <p>Many of my clients have been with me for years and still contact me for their special occasions and bookings. Understanding that every client has unique requirements, we now offer services tailored to both current beauty trends and <strong className="text-yellow-300">individual budgets</strong>. Whether you are looking for a simple makeover or a premium bridal package, we are ready to provide the best service within your budget.</p>
              <p className="gold-text text-lg sm:text-xl font-semibold">At Deepa Bridal Studio, our mission is simple: to make every client feel confident, beautiful, and satisfied with the highest level of professional care.</p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8,delay:0.5}}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px" style={{backgroundColor:'rgba(212,160,23,0.12)'}}>
          {stats.map(({icon:Icon,value,label})=>{
            const num = parseInt(value);
            const isNumeric = !isNaN(num) && value !== "24/7";
            const suffix = isNumeric ? value.replace(/[0-9]/g,'') : '';
            return (
            <div key={label} className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 flex flex-col items-center text-center group transition-colors duration-300"
              style={{backgroundColor:'#060f09',backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.02) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.02) 75%)`,backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'}}>
              <Icon size={16} className="text-yellow-600/75 mb-2 sm:mb-3 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5}/>
              <span className="font-display text-3xl sm:text-4xl md:text-5xl gold-text mb-1">
                {isNumeric ? <CountUp to={num} suffix={suffix} inView={inView} /> : value}
              </span>
              <span className="font-sans text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.28em] uppercase text-yellow-600/70">{label}</span>
            </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

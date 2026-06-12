import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Heart, Users, Clock } from "lucide-react";
import { useSanity } from "../sanity/useSanity";
import { aboutQuery } from "../sanity/queries";
import { urlFor } from "../sanity/client";

const defaultStats = [
  { icon: Heart,  value: "1000+", label: "Happy Brides" },
  { icon: Award,  value: "10+",   label: "Years Experience" },
  { icon: Users,  value: "1500+", label: "Clients Served" },
  { icon: Clock,  value: "24/7",  label: "Bridal Support" },
];

const defaultAbout = {
  title: "Meet Deepa",
  subtitle: "Professional Makeup Artist in Nellore",
  paragraph: "Hi, I am Deepa — a professional makeup artist from Nellore with over 15 years of experience in the beauty industry. Before starting my own salon, I spent 9 years working with leading brands like Green Trends, Javed Habib, Naturals, and Page3. For the past 6 years, I have channeled that expertise into building Deepa Bridal Studio — a salon built on a client-first philosophy, premium branded products, and an unwavering commitment to excellence. Every service is tailored to your unique style and budget, because I believe every client deserves to feel confident, beautiful, and completely at ease on their special day. It is this dedication that has earned the trust of countless loyal clients who return to us, time and again."
};

const iconMap = { Award, Heart, Users, Clock };

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
  const { data: about } = useSanity(aboutQuery);

  const title = about?.title || defaultAbout.title;
  const subtitle = about?.subtitle || defaultAbout.subtitle;
  const paragraphs = about?.paragraphs || [defaultAbout.paragraph];
  const image = about?.image;
  const stats = about?.stats || defaultStats;

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
              <div className="w-full aspect-[3/4] border border-yellow-700/30 overflow-hidden flex items-center justify-center relative group"
                style={{
                  backgroundColor:'#0e2a1a',
                  backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.022) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.022) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.022) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.022) 75%)`,
                  backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'
                }}>
                {image ? (
                  <img src={urlFor(image).width(800).height(1067).url()} alt={title} className="absolute inset-0 w-full h-full object-cover z-10" loading="lazy" width="800" height="1067" />
                ) : (
                  <img src="/hero1.webp" alt="Deepa - Professional Bridal Makeup Artist at Deepa Bridal Studio in Nellore" className="absolute inset-0 w-full h-full object-cover z-10" loading="lazy" width="800" height="1067" />
                )}
                <div className="absolute inset-0 z-20" style={{background:'radial-gradient(ellipse 70% 65% at 50% 35%,rgba(26,79,52,0.15) 0%,rgba(3,10,6,0.55) 100%)'}} />
                <div className="absolute bottom-0 left-0 z-30 bg-black/70 px-4 py-2 border-t border-r border-yellow-700/40 rounded-tr-lg">
                  <span className="font-display text-sm md:text-base text-yellow-300/90 tracking-wider">Signature Bridal Artistry by Deepa</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,x:50}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.9,delay:0.2}}
            className="p-6 sm:p-8" style={{backgroundColor:'#000'}}>
            <p className="font-sans text-sm sm:text-base tracking-[0.4em] sm:tracking-[0.5em] uppercase text-yellow-600/75 mb-3 sm:mb-4">Deepa Bridal Studio</p>
            <h2 className="font-display section-title-lg text-5xl md:text-6xl gold-text mb-2">{title}</h2>
            <p className="font-sans text-xl sm:text-2xl text-yellow-400/70 mb-3 sm:mb-4">{subtitle}</p>
            <div className="divider-gold mb-4 sm:mb-5" />
            <div className="space-y-3 sm:space-y-4 font-body text-base sm:text-lg text-yellow-100/85 leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8,delay:0.5}}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px" style={{backgroundColor:'rgba(212,160,23,0.12)'}}>
          {stats.map((stat)=>{
            const val = stat.value || stat;
            const label = stat.label || stat;
            const Icon = stat.icon ? (iconMap[stat.icon] || Heart) : Heart;
            const num = parseInt(val);
            const isNumeric = !isNaN(num) && val !== "24/7";
            const suffix = isNumeric ? val.replace(/[0-9]/g,'') : '';
            return (
            <div key={label} className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 flex flex-col items-center text-center group transition-colors duration-300"
              style={{backgroundColor:'#060f09',backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.02) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.02) 75%)`,backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'}}>
              <Icon size={16} className="text-yellow-600/75 mb-2 sm:mb-3 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5}/>
              <span className="font-display text-3xl sm:text-4xl md:text-5xl gold-text mb-1">
                {isNumeric ? <CountUp to={num} suffix={suffix} inView={inView} /> : val}
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

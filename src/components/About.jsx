import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Users, Clock } from "lucide-react";

const stats = [
  { icon: Heart,  value: "500+", label: "Happy Brides" },
  { icon: Award,  value: "8+",   label: "Years Experience" },
  { icon: Users,  value: "1000+",label: "Clients Served" },
  { icon: Clock,  value: "24/7", label: "Bridal Support" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="about" className="deepa-bg-dark relative py-28 px-6 overflow-hidden">
      {/* diagonal stripe accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.025] pointer-events-none"
        style={{backgroundImage:'repeating-linear-gradient(45deg,#d4a017 0,#d4a017 1px,transparent 0,transparent 50%)',backgroundSize:'18px 18px'}} />
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <motion.div initial={{opacity:0,x:-50}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.9}}
            className="relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 border border-yellow-700/20" />
              <div className="absolute -inset-6 border border-yellow-800/10" />
              <div className="w-full aspect-[3/4] border border-yellow-700/30 overflow-hidden flex items-center justify-center relative"
                style={{
                  backgroundColor:'#0e2a1a',
                  backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.022) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.022) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.022) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.022) 75%)`,
                  backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'
                }}>
                {/* Vignette */}
                <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 70% 65% at 50% 35%,rgba(26,79,52,0.3) 0%,rgba(3,10,6,0.7) 100%)'}} />
                <svg width="100%" height="100%" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" className="relative z-10">
                  <ellipse cx="150" cy="140" rx="55" ry="65" fill="rgba(212,160,23,0.08)"/>
                  <circle cx="150" cy="140" r="75" fill="none" stroke="rgba(212,160,23,0.1)" strokeWidth="0.5"/>
                  <text x="150" y="370" textAnchor="middle" fill="rgba(212,160,23,0.25)"
                    fontFamily="'Great Vibes',cursive" fontSize="16">Add your photo here</text>
                </svg>
                <div className="absolute bottom-5 left-5 right-5 px-4 py-3 border-l-2 border-yellow-500 z-20"
                  style={{backgroundColor:'rgba(4,10,6,0.88)'}}>
                  <p className="font-script text-2xl gold-text">Deepa</p>
                  <p className="font-sans text-[9px] tracking-[0.32em] uppercase text-yellow-500/55">Lead Artist & Founder</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 border border-yellow-700/50 flex flex-col items-center justify-center"
                style={{backgroundColor:'#060f09',backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.02) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.02) 75%)`,backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'}}>
                <span className="font-display text-2xl gold-text font-bold">8+</span>
                <span className="font-sans text-[8px] tracking-[0.18em] uppercase text-yellow-600/55">Years</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{opacity:0,x:50}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.9,delay:0.2}}>
            <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-yellow-600/55 mb-4">Meet the Artist</p>
            <h2 className="font-display text-4xl md:text-5xl gold-text mb-2">The Vision</h2>
            <p className="font-script text-2xl text-yellow-400/45 mb-6">Behind Every Bride's Glow</p>
            <div className="divider-gold mb-7" />
            <div className="space-y-4 font-body text-base text-yellow-100/60 leading-relaxed">
              <p>Welcome to Deepa Bridal Studio — where every bride's unique beauty is celebrated and elevated through makeup, hair, skincare, and nail design.</p>
              <p>Founded by Deepa, a passionate bridal artist with over 8 years of experience in Hyderabad, the studio has transformed thousands of brides into the most radiant version of themselves.</p>
              <p>We believe every woman deserves to feel extraordinary. Our signature approach blends classic Indian bridal traditions with contemporary aesthetics — timeless, personal, and breathtakingly beautiful.</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Airbrush Makeup","HD Bridal","Organic Skincare","Nail Art"].map(tag=>(
                <span key={tag} className="px-4 py-2 border border-yellow-800/40 font-sans text-[10px] tracking-[0.22em] uppercase text-yellow-500/65">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8,delay:0.5}}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px" style={{backgroundColor:'rgba(212,160,23,0.12)'}}>
          {stats.map(({icon:Icon,value,label})=>(
            <div key={label} className="px-8 py-10 flex flex-col items-center text-center group transition-colors duration-300"
              style={{backgroundColor:'#060f09',backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.02) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.02) 75%)`,backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'}}>
              <Icon size={18} className="text-yellow-600/55 mb-3 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5}/>
              <span className="font-display text-3xl md:text-4xl gold-text mb-1">{value}</span>
              <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-yellow-600/50">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

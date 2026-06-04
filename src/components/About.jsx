import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Users, Clock } from "lucide-react";

const stats = [
  { icon: Heart,  value: "5000+", label: "Happy Brides" },
  { icon: Award,  value: "10+",   label: "Years Experience" },
  { icon: Users,  value: "5000+", label: "Clients Served" },
  { icon: Clock,  value: "24/7",  label: "Bridal Support" },
];

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
                <img src="/hero.png" alt="Deepa - Professional Bridal Makeup Artist at Deepa Bridal Studio in Nellore" className="absolute inset-0 w-full h-full object-cover z-10" loading="lazy" />
                <div className="absolute inset-0 z-20" style={{background:'radial-gradient(ellipse 70% 65% at 50% 35%,rgba(26,79,52,0.15) 0%,rgba(3,10,6,0.55) 100%)'}} />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,x:50}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.9,delay:0.2}}>
            <p className="font-sans text-xs sm:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase text-yellow-600/75 mb-3 sm:mb-4">Deepa Bridal Studio</p>
            <h2 className="font-display section-title-lg text-4xl md:text-5xl gold-text mb-2">Get Your Dreamy Look</h2>
            <p className="font-script text-xl sm:text-2xl text-yellow-400/70 mb-4 sm:mb-6">With Our Professional Bridal Makeup in Nellore</p>
            <div className="divider-gold mb-5 sm:mb-7" />
            <div className="space-y-4 sm:space-y-5 font-body text-base sm:text-lg text-yellow-100/85 leading-relaxed">
              <p>Choosing the right <strong>bridal makeup artist in Nellore</strong> is the most important decision for every bride. At <strong className="gold-text font-semibold text-base sm:text-lg">Deepa Bridal Studio</strong>, we specialize in creating timeless, flawless, and camera-ready bridal looks with customized care and premium products.</p>
              <p>Led by <span className="gold-text text-base sm:text-lg">Deepa</span>, our <strong>bridal studio in Nellore</strong> combines artistry with precision — every look is tailored to enhance your natural features, complement your outfit, and photograph beautifully at every angle. We are recognized as one of the <strong>best bridal makeup artists in Nellore</strong>, serving brides across Magunta Layout, Ravindra Nagar, and all of Andhra Pradesh.</p>
            </div>

            <div className="mt-5 sm:mt-7 mb-4 sm:mb-6">
              <p className="font-sans text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.35em] uppercase text-yellow-400/80 mb-3">Bridal Makeup Packages</p>
              <ul className="space-y-2 sm:space-y-3 font-body text-base sm:text-lg text-yellow-100/80">
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1 shrink-0">•</span><span><strong className="text-yellow-300/90">Basic Makeup</strong> — Natural Look, light coverage — perfect for engagement ceremonies in Nellore</span></li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1 shrink-0">•</span><span><strong className="text-yellow-300/90">HD Makeup</strong> — Flawless HD Finish for high-definition cameras — ideal for wedding photography</span></li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1 shrink-0">•</span><span><strong className="text-yellow-300/90">Ultra HD Makeup</strong> — Ultra-fine pigments for flawless 4K resolution</span></li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1 shrink-0">•</span><span><strong className="text-yellow-300/90">Enhanced Skin Finish</strong> — The no-makeup makeup look for a natural glow</span></li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-1 shrink-0">•</span><span><strong className="text-yellow-300/90">Airbrush Makeup</strong> — Long-lasting, transfer-proof, camera-ready finish</span></li>
              </ul>
            </div>

            <div className="mt-4 sm:mt-6 mb-5 sm:mb-7">
              <p className="font-sans text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.35em] uppercase text-yellow-400/80 mb-3">Premium Brands Used</p>
              <p className="font-body text-sm sm:text-base text-yellow-100/80 leading-relaxed">
                Kryolan · MAC · Make Up Studio · Seasoul · Huda Beauty · NARS · Too Faced · Smashbox · Estée Lauder
              </p>
            </div>

            <div className="mt-5 sm:mt-7 flex flex-wrap gap-1.5 sm:gap-2">
              {["Airbrush Makeup Nellore","HD Bridal Nellore","Ultra HD Makeup","Natural Bridal Look","4K Finish","Bridal Glam"].map(tag=>(
                <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 border border-yellow-800/40 font-sans text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.18em] uppercase text-yellow-500/80">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8,delay:0.5}}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px" style={{backgroundColor:'rgba(212,160,23,0.12)'}}>
          {stats.map(({icon:Icon,value,label})=>(
            <div key={label} className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 flex flex-col items-center text-center group transition-colors duration-300"
              style={{backgroundColor:'#060f09',backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.02) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.02) 75%)`,backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'}}>
              <Icon size={16} className="text-yellow-600/75 mb-2 sm:mb-3 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5}/>
              <span className="font-display text-2xl sm:text-3xl md:text-4xl gold-text mb-1">{value}</span>
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.28em] uppercase text-yellow-600/70">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

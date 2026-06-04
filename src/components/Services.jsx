import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Sparkles, Star, Gem } from "lucide-react";

const services = [
  { icon: Scissors, title: "Hair Services", subtitle: "Style & Care",
    desc: "Haircuts, styling, and advanced treatments." },
  { icon: Star, title: "Skin Care Studio", subtitle: "Glow & Radiance",
    desc: "Facials and targeted treatments for a brighter complexion." },
  { icon: Sparkles, title: "Bridal Makeup", subtitle: "Artistry & Elegance",
    desc: "HD-ready bridal makeup tailored to your style." },
  { icon: Gem, title: "Nail Studio", subtitle: "Details & Design",
    desc: "Bridal nail art, gel extensions, and custom designs." },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref}
      initial={{opacity:0,y:50}} animate={inView?{opacity:1,y:0}:{}}
      transition={{duration:0.7,delay:index*0.12}}
      className="relative group border border-yellow-800/30 hover:border-yellow-600/50 transition-all duration-500 p-5 sm:p-6 md:p-8 overflow-hidden"
      style={{backgroundColor:'rgba(10,25,16,0.7)'}}>
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.018) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.018) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.018) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.018) 75%)`,
        backgroundSize:'5px 5px',
        backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'
      }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,160,23,0.05),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-14 h-14 overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-7 bg-gradient-to-b from-yellow-600/50 to-transparent" />
        <div className="absolute top-0 right-0 h-px w-7 bg-gradient-to-l from-yellow-600/50 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="mb-5 flex items-center gap-4">
          <div className="w-11 h-11 border border-yellow-700/50 flex items-center justify-center group-hover:border-yellow-500 transition-colors">
            <service.icon size={18} className="text-yellow-500" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-display text-2xl gold-text">{service.title}</h3>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-yellow-600/75">{service.subtitle}</p>
          </div>
        </div>
        <div className="divider-gold mb-4 opacity-25" />
        <p className="font-body text-sm text-yellow-100/75 leading-relaxed mb-5">{service.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="services" className="deepa-bg-dark section-padding relative overflow-hidden"
      aria-label="Bridal makeup, hair styling, skin care and nail services in Nellore by Deepa Bridal Studio">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-yellow-600/75 mb-4">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-5">Our Services in Nellore</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-700" />
            <span className="font-script text-xl text-yellow-400/60">crafted with love</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-700" />
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s,i)=><ServiceCard key={s.title} service={s} index={i}/>)}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Sparkles, Star, Gem } from "lucide-react";

const services = [
  { icon: Scissors, title: "Hair Services", subtitle: "Style & Care" },
  { icon: Star, title: "Skin Care Studio", subtitle: "Glow & Radiance" },
  { icon: Sparkles, title: "Bridal Makeup", subtitle: "Artistry & Elegance" },
  { icon: Gem, title: "Nail Studio", subtitle: "Details & Design" },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref}
      initial={{opacity:0,y:50}} animate={inView?{opacity:1,y:0}:{}}
      transition={{duration:0.7,delay:index*0.12}}
      className="border border-yellow-800/30 p-4"
      style={{backgroundColor:'rgba(10,25,16,0.7)'}}>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 border border-yellow-700/50 flex items-center justify-center">
          <service.icon size={15} className="text-yellow-500" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="font-display text-xl gold-text">{service.title}</h3>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-yellow-600/75">{service.subtitle}</p>
        </div>
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
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-8">
          <p className="font-sans text-xs tracking-[0.6em] uppercase text-yellow-600/75 mb-2">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl gold-text">Our Services</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s,i)=><ServiceCard key={s.title} service={s} index={i}/>)}
        </div>
      </div>
    </section>
  );
}

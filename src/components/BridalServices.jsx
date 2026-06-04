import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const bridalPackages = [
  { title: "Basic Bridal Makeup Nellore", 
    desc: "Classic bridal look with high-quality products. Perfect for intimate ceremonies and traditional functions at your wedding in Nellore.",
    features: ["Matte/Glossy Finish", "Long-Lasting Formula", "Bridal Trials Included", "Touch-up Kit"],
    img: "/basica.webp" },
  { title: "HD Bridal Makeup Nellore",
    desc: "Flawless HD finish designed for high-definition photography. Airbrushed perfection for your big day. The best HD bridal makeup in Nellore.",
    features: ["HD Foundation & Setting", "Camera-Ready Finish", "Water-Resistant", "Complimentary Trial"],
    img: "/hd6.webp" },
  { title: "Airbrush Makeup Nellore",
    desc: "Ultra-lightweight airbrush application for a second-skin finish. Transfer-proof, sweat-proof, and weightless. Premium airbrush makeup artist in Nellore.",
    features: ["4K Resolution Finish", "Transfer-Proof Formula", "Buildable Coverage", "Lasts 16+ Hours"],
    img: "/airbrush2.webp" },
];

function BridalImage({ src, title }) {
  return (
    <div className="relative aspect-[1/1] overflow-hidden border border-yellow-800/30 mb-5"
      style={{backgroundColor:'#0a2016'}}>
      <img src={src} alt={`${title} - Deepa Bridal Studio Nellore`}
        className="w-full h-full object-cover object-top absolute inset-0" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-950/30 to-transparent pointer-events-none" />
    </div>
  );
}

function BridalPackageCard({ pkg, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref}
      initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}}
      transition={{duration:0.6,delay:index*0.15}}
      className="relative group border border-yellow-800/30 hover:border-yellow-600/50 transition-all duration-500 overflow-hidden flex flex-col"
      style={{backgroundColor:'rgba(10,25,16,0.7)'}}>
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.018) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.018) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.018) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.018) 75%)`,
        backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'
      }} />
      <div className="absolute top-0 right-0 w-14 h-14 overflow-hidden z-20">
        <div className="absolute top-0 right-0 w-px h-7 bg-gradient-to-b from-yellow-600/50 to-transparent" />
        <div className="absolute top-0 right-0 h-px w-7 bg-gradient-to-l from-yellow-600/50 to-transparent" />
      </div>
      <BridalImage src={pkg.img} title={pkg.title} />
      <div className="relative z-10 flex flex-col flex-1 px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8">
        <div className="mb-3">
          <h3 className="font-display text-3xl gold-text">{pkg.title}</h3>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-yellow-600/75 mt-1">Bridal Package</p>
        </div>
        <div className="divider-gold mb-4 opacity-25" />
        <ul className="space-y-2 mt-auto">
          {pkg.features.map(f=>(
            <li key={f} className="flex items-center gap-3">
              <Sparkles size={10} className="text-yellow-500 flex-shrink-0" />
              <span className="font-sans text-sm tracking-[0.08em] text-yellow-300/85">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function BridalServices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="bridal-services" className="deepa-bg section-padding relative overflow-hidden"
      aria-label="Bridal makeup packages in Nellore - Deepa Bridal Studio">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.6em] uppercase text-yellow-600/75 mb-4">Choose Your Package</p>
          <h2 className="font-display text-5xl md:text-6xl gold-text mb-5">Bridal Packages in Nellore</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-700" />
            <span className="font-sans text-2xl text-yellow-400/60">your perfect look awaits</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-700" />
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bridalPackages.map((p,i)=><BridalPackageCard key={p.title} pkg={p} index={i}/>)}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useSanity } from "../sanity/useSanity";
import { bridalPackagesQuery, siteSettingsQuery } from "../sanity/queries";
import { urlFor } from "../sanity/client";

const defaultPackages = [
  { title: "Timeless Elegance", subtitle: "Basic Makeup",
    description: "Embrace a simple, natural radiance with lightweight coverage. Perfect for brides who love a subtle, fresh, and effortlessly beautiful look." },
  { title: "Picture-Perfect Glow", subtitle: "HD Makeup",
    description: "Achieve a smooth, high-definition finish that looks flawless both in person and in photographs, giving you a polished and radiant appearance throughout your celebration." },
  { title: "Airbrush Perfection", subtitle: "Airbrush Makeup",
    description: "Experience advanced airbrush technology that delivers an ultra-lightweight, even, and radiant finish. Perfect for achieving a naturally flawless look that lasts throughout your special day." },
];

const defaultImgs = ["/basica.webp", "/hd6.webp", "/airbrush2.webp"];

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
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-yellow-400/80 mt-1">{pkg.subtitle}</p>
        </div>
        <p className="font-body text-base sm:text-lg text-white/90 leading-relaxed">{pkg.description}</p>
      </div>
    </motion.div>
  );
}

export default function BridalServices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { data: packages } = useSanity(bridalPackagesQuery);
  const { data: settings } = useSanity(siteSettingsQuery);

  const pkgList = packages && packages.length > 0 ? packages : defaultPackages;
  const heading = settings?.bridalSectionHeading || "Bespoke Bridal Makeup Packages";
  const tagline = settings?.bridalSectionTagline || "\u201cTransforming Dreams into Timeless Beauty\u201d";
  const intro = settings?.bridalSectionIntro || "At Deepa Brides Studio, once you walk in, no matter the occasion, we surpass your expectations, delivering a result beyond what you imagined \u2014 always within your budget.";

  return (
    <section id="bridal-services" className="deepa-bg section-padding relative overflow-hidden"
      aria-label="Bridal makeup packages in Nellore - Deepa Bridal Studio">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.6em] uppercase text-yellow-600/75 mb-4">Deepa Brides Studio</p>
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-3">{heading}</h2>
          <p className="font-display text-xl md:text-2xl text-yellow-300/80 italic mb-5">&ldquo;{tagline.replace(/["""]/g, '')}&rdquo;</p>
          <p className="font-body text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">{intro}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pkgList.map((p,i)=>{
            const img = p.image ? urlFor(p.image).width(600).height(600).url() : defaultImgs[i]
            return <BridalPackageCard key={p.title} pkg={{...p, img}} index={i}/>
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useSanity } from "../sanity/useSanity";
import { brandsQuery } from "../sanity/queries";
import { urlFor } from "../sanity/client";

const fallbackBrands = [
  { name: "MAC", initials: "MAC", color: "#000000", textColor: "#ffffff" },
  { name: "NARS", initials: "NARS", color: "#1a1a1a", textColor: "#ffffff", image: "/nars-logo-png_seeklogo-320780.png" },
  { name: "Makeup Studio", initials: "MS", color: "#0d0d0d", textColor: "#d4af37", image: "/MAKEUPSTUDio.png" },
  { name: "Seasoul Australia", initials: "SS", color: "#003d3d", textColor: "#b8e6e6", image: "/seasoul.webp" },
  { name: "Sephora", initials: "S", color: "#000000", textColor: "#ffffff", image: "/sephora.png" },
  { name: "Smashbox", initials: "SB", color: "#242424", textColor: "#d4af37", image: "/SMASHBOX.png" },
  { name: "Kylie", initials: "K", color: "#3a1a1a", textColor: "#ff85a2", image: "/KYLiE.jpg" },
  { name: "Urban Decay", initials: "UD", color: "#1a1a2e", textColor: "#b388ff", image: "/URBANDECAY.png" },
  { name: "Rare Beauty", initials: "RB", color: "#0d0d0d", textColor: "#d4af37", image: "/Rare_beauty.webp" },
  { name: "Benefit", initials: "B", color: "#301a1a", textColor: "#ff69b4", image: "/Benefit_Cosmetics_logo.png" },
  { name: "Fenty Beauty", initials: "FB", color: "#000000", textColor: "#ffffff", image: "/fentybeauty.png" },
  { name: "Est\u00e9e Lauder", initials: "EL", color: "#002060", textColor: "#d4af37", image: "/estee-lauder-logo-png_seeklogo-49534.png" },
  { name: "Schwarzkopf", initials: "SC", color: "#000000", textColor: "#d4af37", image: "/schwarzkopf.png" },
  { name: "Dyson", initials: "D", color: "#1a1a1a", textColor: "#b87333", image: "/Dyson-logo.png" },
  { name: "Ikonic Professional", initials: "IK", color: "#0d0d0d", textColor: "#d4af37", image: "/ikonic.jpg" },
];

function BrandSlide({ items }) {
  return (
    <div className="flex gap-3 sm:gap-4 md:gap-5 marquee-slide">
      {items.map((brand, i) => (
        <div
          key={`${brand.name}-${i}`}
          className="brand-card group flex-shrink-0 w-[100px] sm:w-[120px] md:w-[140px]"
        >
           <div className="border border-yellow-800/40 hover:border-yellow-600/70 transition-all duration-500 ease-out p-2 sm:p-3 md:p-4 h-full flex flex-col items-center"
             style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
              <div className="w-full aspect-square mb-1 sm:mb-2 flex items-center justify-center overflow-hidden relative"
               style={{ backgroundColor: brand.image ? '#ffffff' : brand.color }}>
                {brand.image ? (
                  <img src={brand.image} alt={brand.name}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                ) : (
                  <span className="font-sans text-base sm:text-lg md:text-xl font-bold tracking-wider"
                    style={{ color: brand.textColor }}>
                    {brand.initials}
                  </span>
                )}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, rgba(212,160,23,0.15) 0%, rgba(247,231,161,0.08) 50%, transparent 100%)`
                }} />
            </div>
            <p className="font-sans text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] text-yellow-400/90 text-center leading-tight font-medium">
              {brand.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MarqueeTrack({ brands }) {
  return (
    <div className="marquee-track flex gap-3 sm:gap-4 md:gap-5 w-max">
      <BrandSlide items={brands} />
      <BrandSlide items={brands} />
    </div>
  );
}

export default function Brands() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { data: sanityBrands } = useSanity(brandsQuery);

  const brands = sanityBrands && sanityBrands.length > 0
    ? sanityBrands.map(b => ({
        name: b.name,
        image: b.logo ? urlFor(b.logo).width(140).url() : null,
        initials: b.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(),
        color: '#ffffff',
        textColor: '#d4af37',
      }))
    : fallbackBrands;

  return (
    <section id="brands" className="section-padding relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
      aria-label="Brands and experience - Deepa Bridal Studio works with leading beauty brands">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.025) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.025) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.025) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.025) 75%)`,
          backgroundSize: '5px 5px',
          backgroundPosition: '0 0, 0 2.5px, 2.5px -2.5px, -2.5px 0'
        }} />

      <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg,#d4af37 0,#d4af37 1px,transparent 0,transparent 50%)', backgroundSize: '18px 18px' }} />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-14 px-4"
        >
          <p className="font-sans text-[10px] sm:text-xs tracking-[0.5em] sm:tracking-[0.6em] uppercase text-yellow-600/75 mb-3 sm:mb-4">
            Our Partnerships
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl gold-text gold-shimmer mb-4 sm:mb-5">
            Trusted Experience With Leading Beauty Brands
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-yellow-100/70 max-w-2xl mx-auto">
            15+ Years of Professional Experience Across India's Leading Salon Brands
          </p>
          <div className="divider-gold max-w-xs mx-auto mt-4 sm:mt-5" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="marquee-container relative">
            <div className="marquee-holder">
              <MarqueeTrack brands={brands} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

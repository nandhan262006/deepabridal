import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const galleryItems = [
  { id:1, label:"Bridal Look",      cat:"Makeup", shade:"#12301e" },
  { id:2, label:"Hair Styling",     cat:"Hair",   shade:"#0b2416" },
  { id:3, label:"Mehendi Ceremony", cat:"Makeup", shade:"#163d26" },
  { id:4, label:"Reception Glow",   cat:"Skin",   shade:"#091d11" },
  { id:5, label:"Nail Artistry",    cat:"Nails",  shade:"#12301e" },
  { id:6, label:"Engagement Look",  cat:"Makeup", shade:"#0d2a1a" },
  { id:7, label:"Updo & Veil",      cat:"Hair",   shade:"#0a2016" },
  { id:8, label:"Bridal Glow",      cat:"Skin",   shade:"#143520" },
];
const categories = ["All","Makeup","Hair","Skin","Nails"];

function GalleryItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div ref={ref}
      initial={{opacity:0,scale:0.92}} animate={inView?{opacity:1,scale:1}:{}}
      transition={{duration:0.55,delay:index*0.06}}
      className="relative overflow-hidden cursor-pointer group border border-yellow-900/25 hover:border-yellow-600/45 transition-all duration-500"
      style={{aspectRatio: index%5===0 ? '1/1.3' : '1/1'}}
      onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
      {/* textured bg matching the brand green */}
      <div className="absolute inset-0" style={{backgroundColor: item.shade}} />
      <div className="absolute inset-0" style={{
        backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.025) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.025) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.025) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.025) 75%)`,
        backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'
      }} />
      <div className="absolute inset-0" style={{background:`radial-gradient(ellipse 70% 70% at 50% 40%, rgba(26,79,52,0.25) 0%, rgba(3,10,6,0.5) 100%)`}} />
      {/* decorative */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
        <circle cx="100" cy="85" r="45" fill="none" stroke="rgba(212,160,23,0.4)" strokeWidth="0.5"/>
        <circle cx="100" cy="85" r="30" fill="none" stroke="rgba(212,160,23,0.25)" strokeWidth="0.5"/>
        <line x1="100" y1="40" x2="100" y2="130" stroke="rgba(212,160,23,0.2)" strokeWidth="0.4"/>
        <line x1="55" y1="85" x2="145" y2="85" stroke="rgba(212,160,23,0.2)" strokeWidth="0.4"/>
      </svg>
      {/* shimmer on hover */}
      {hovered && <div className="absolute inset-0 shimmer" />}
      {/* category badge */}
      <div className="absolute top-3 left-3 px-3 py-1 border border-yellow-800/40" style={{backgroundColor:'rgba(4,10,6,0.75)'}}>
        <span className="font-sans text-[9px] tracking-[0.28em] uppercase text-yellow-500/75">{item.cat}</span>
      </div>
      {/* hover overlay */}
      <motion.div initial={false} animate={hovered?{opacity:1}:{opacity:0}} transition={{duration:0.25}}
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{background:'rgba(4,13,7,0.78)'}}>
        <span className="font-script text-2xl text-yellow-300 mb-2">{item.label}</span>
        <div className="h-px w-10 bg-yellow-600/55" />
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const filtered = active==="All" ? galleryItems : galleryItems.filter(g=>g.cat===active);
  return (
    <section id="gallery" className="deepa-bg-flat relative py-28 px-6 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-12">
          <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-yellow-600/55 mb-4">Our Work</p>
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-5">Portfolio</h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </motion.div>
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map(cat=>(
            <button key={cat} onClick={()=>setActive(cat)}
              className={`px-5 py-2 font-sans text-[10px] tracking-[0.28em] uppercase transition-all duration-300 ${
                active===cat
                  ? 'border border-yellow-500/65 text-yellow-300'
                  : 'border border-yellow-900/35 text-yellow-600/50 hover:border-yellow-700/50 hover:text-yellow-500/70'
              }`}
              style={active===cat?{backgroundColor:'rgba(212,160,23,0.1)'}:{}}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((item,i)=><GalleryItem key={item.id} item={item} index={i}/>)}
        </div>
        <p className="text-center mt-8 font-sans text-xs tracking-[0.3em] uppercase text-yellow-700/35">
          Replace placeholders with your actual portfolio images
        </p>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = ["Home","Services","Gallery","About","Testimonials","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=>{
    const fn = ()=>setScrolled(window.scrollY>50);
    window.addEventListener("scroll",fn);
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  const scrolledStyle = {
    backgroundColor:'rgba(6,15,9,0.96)',
    backdropFilter:'blur(12px)',
    borderBottom:'1px solid rgba(212,160,23,0.12)',
    backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.018) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.018) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.018) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.018) 75%)`,
    backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'
  };

  return (
    <motion.nav initial={{y:-80}} animate={{y:0}} transition={{duration:0.8,ease:"easeOut"}}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled ? scrolledStyle : {}}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded border border-yellow-600/55 flex items-center justify-center">
            <span className="font-script text-2xl gold-text leading-none">d</span>
          </div>
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.2em] gold-text uppercase">Deepa Bridal</p>
            <p className="font-sans text-[9px] tracking-[0.35em] text-yellow-600/55 uppercase">Studio</p>
          </div>
        </div>
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(link=>(
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}
                className="font-sans text-xs tracking-[0.2em] uppercase text-yellow-400/65 hover:text-yellow-400 transition-colors duration-300 relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-600 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <a href="tel:+917993393339"
          className="hidden lg:flex items-center gap-2 px-5 py-2 border border-yellow-700/50 hover:border-yellow-500 hover:bg-yellow-500/8 transition-all duration-300 group">
          <Phone size={12} className="text-yellow-500 group-hover:animate-pulse"/>
          <span className="font-sans text-xs tracking-[0.15em] gold-text">Book Now</span>
        </a>
        <button className="lg:hidden text-yellow-500" onClick={()=>setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}
            className="lg:hidden border-t border-yellow-900/30"
            style={{backgroundColor:'rgba(6,15,9,0.98)',backdropFilter:'blur(12px)'}}>
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map(link=>(
                <a key={link} href={`#${link.toLowerCase()}`} onClick={()=>setMenuOpen(false)}
                  className="font-sans text-sm tracking-[0.25em] uppercase text-yellow-400/75 hover:text-yellow-400 transition-colors">{link}</a>
              ))}
              <a href="tel:+917993393339" className="flex items-center gap-2 mt-2 px-4 py-3 border border-yellow-700/40 justify-center">
                <Phone size={12} className="text-yellow-500"/>
                <span className="font-sans text-xs tracking-[0.2em] gold-text">799 339 3339</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

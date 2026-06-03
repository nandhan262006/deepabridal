import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Bridal Packages", href: "#bridal-services" },
  { name: "Gallery", href: "#gallery" },
  
  { name: "Contact", href: "#contact" },
];

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
      style={scrolled ? scrolledStyle : {}}
      aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Deepa Bridal Studio - Home">
          <img src="/LOGO.png" alt="Deepa Bridal Studio - Best Bridal Makeup Artist in Nellore" className="h-10 sm:h-12 md:h-14 w-auto" loading="eager" />
        </a>
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8" role="list">
          {navLinks.map(link=>(
            <li key={link.name}>
              <a href={link.href}
                className="font-sans text-xs tracking-[0.2em] uppercase text-yellow-400/80 hover:text-yellow-400 transition-colors duration-300 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-600 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-2">
          <a href="https://wa.me/917993393339?text=Hi%20Deepa%20Bridal%20Studio!%20I'd%20like%20to%20book%20a%20consultation."
            target="_blank" rel="noopener noreferrer"
            className="touch-target flex items-center gap-2 px-4 py-2 border border-green-700/50 hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 group"
            aria-label="Book via WhatsApp">
            <MessageCircle size={12} className="text-green-400 group-hover:animate-pulse"/>
            <span className="font-sans text-xs tracking-[0.15em] text-green-300/90">WhatsApp</span>
          </a>
          <a href="tel:+917993393339"
            className="touch-target flex items-center gap-2 px-4 py-2 border border-yellow-700/50 hover:border-yellow-500 hover:bg-yellow-500/8 transition-all duration-300 group"
            aria-label="Call Deepa Bridal Studio at +91 79933 93339">
            <Phone size={12} className="text-yellow-500 group-hover:animate-pulse"/>
            <span className="font-sans text-xs tracking-[0.15em] gold-text">Call</span>
          </a>
        </div>
        <button className="lg:hidden text-yellow-500 touch-target flex items-center justify-center" onClick={()=>setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}>
          {menuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}
            className="lg:hidden border-t border-yellow-900/30"
            style={{backgroundColor:'rgba(6,15,9,0.98)',backdropFilter:'blur(12px)'}}
            role="navigation" aria-label="Mobile navigation">
            <div className="px-4 sm:px-6 py-6 flex flex-col gap-5">
              {navLinks.map(link=>(
                <a key={link.name} href={link.href} onClick={()=>setMenuOpen(false)}
                  className="touch-target flex items-center font-sans text-sm tracking-[0.25em] uppercase text-yellow-400/75 hover:text-yellow-400 transition-colors">{link.name}</a>
              ))}
              <div className="flex gap-2 mt-2">
                <a href="https://wa.me/917993393339?text=Hi%20Deepa%20Bridal%20Studio!%20I'd%20like%20to%20book%20a%20consultation."
                  target="_blank" rel="noopener noreferrer"
                  className="touch-target flex items-center gap-2 flex-1 px-4 py-3 border border-green-700/40 justify-center"
                  aria-label="Book via WhatsApp">
                  <MessageCircle size={14} className="text-green-400"/>
                  <span className="font-sans text-xs tracking-[0.2em] text-green-300/90">WhatsApp</span>
                </a>
                <a href="tel:+917993393339" className="touch-target flex items-center gap-2 flex-1 px-4 py-3 border border-yellow-700/40 justify-center"
                  aria-label="Call Deepa Bridal Studio at +91 79933 93339">
                  <Phone size={14} className="text-yellow-500"/>
                  <span className="font-sans text-xs tracking-[0.2em] gold-text">Call Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

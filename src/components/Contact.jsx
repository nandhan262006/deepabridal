import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const textureBg = {
    backgroundColor:'#090f0b',
    backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.02) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.02) 75%)`,
    backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'
  };

  return (
    <section id="contact" className="deepa-bg-dark section-padding relative overflow-hidden"
      aria-label="Contact Deepa Bridal Studio - Best Bridal Makeup Artist in Nellore">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-yellow-600/75 mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-5">Book Your Bridal Look in Nellore</h2>
          <p className="font-body text-sm sm:text-base text-yellow-100/70 max-w-2xl mx-auto">Visit our bridal studio in Magunta Layout, Nellore or call us to book your appointment.</p>
          <div className="divider-gold max-w-xs mx-auto mt-4" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info */}
          <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8,delay:0.2}} className="space-y-5">
            <div className="border border-yellow-800/30 p-5 sm:p-6 md:p-8" style={textureBg}>
              <p className="font-sans text-2xl sm:text-3xl text-yellow-400/80 mb-5 sm:mb-6">Let's connect</p>
              <div className="space-y-5">
                {[
                  {icon:Phone, label:"Call / WhatsApp", value:"+91 79933 93339", href:"tel:+917993393339"},
                  {icon:MapPin, label:"Our Address",       value:"Ravindra Nagar Road, Opp. PVR Kalyana Mandapam, Beside DSR Guest Inn, Magunta Layout, Nellore, Andhra Pradesh 524003", href:"https://maps.google.com/?q=Ravindra+nagar+road+opp+PVR+kalyana+mandapam+beside+DSR+guest+inn+Magunta+Layout+Nellore+Andhra+Pradesh+524003"},
                  {icon:Clock, label:"Studio Hours",    value:"Mon–Sun: 9 AM – 8 PM"},
                ].map(({icon:Icon,label,value,href})=>(
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 border border-yellow-800/40 flex items-center justify-center flex-shrink-0 group-hover:border-yellow-600 transition-colors">
                      <Icon size={13} className="text-yellow-600" strokeWidth={1.5}/>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-yellow-700/70 mb-0.5">{label}</p>
                      {href
                        ? <a href={href} className="font-body text-base text-yellow-200/85 hover:text-yellow-300 transition-colors">{value}</a>
                        : <p className="font-body text-base text-yellow-200/85">{value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a href="https://wa.me/917993393339?text=Hi%20Deepa%20Bridal%20Studio!%20I'd%20like%20to%20book%20a%20bridal%20makeup%20consultation."
              target="_blank" rel="noopener noreferrer"
              className="touch-target block border border-green-700/40 p-5 sm:p-6 text-center hover:border-green-500 transition-all duration-300 group mb-4"
              style={{background:'linear-gradient(135deg,#064e3b,#022c22)'}}
              aria-label="Book bridal makeup appointment via WhatsApp">
              <MessageCircle size={20} className="text-green-400 mx-auto mb-2" />
              <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-green-400/75 mb-2">Book via WhatsApp</p>
              <p className="font-display text-xl text-green-300/90">Tap to Chat</p>
            </a>
            <a href="tel:+917993393339"
              className="touch-target block border border-yellow-700/40 p-5 sm:p-6 text-center hover:border-yellow-500 transition-all duration-300 group"
              style={{background:'linear-gradient(135deg,#0e2a1a,#060f09)'}}
              aria-label="Call Deepa Bridal Studio Nellore at +91 79933 93339">
              <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-yellow-700/75 mb-2">Call Now</p>
              <p className="font-display text-3xl sm:text-4xl gold-text">799 339 3339</p>
            </a>
          </motion.div>

          {/* Google Maps */}
          <motion.div initial={{opacity:0,x:40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8,delay:0.3}}
            className="border border-yellow-800/30 overflow-hidden" style={textureBg}>
            <div className="p-4 sm:p-5">
              <p className="font-sans text-[9px] tracking-[0.32em] uppercase text-yellow-700/70 mb-3">Find Us on Google Maps</p>
              <div className="w-full aspect-[4/3] overflow-hidden border border-yellow-800/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.445!2d79.9736441!3d14.4290478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf334f33eef47%3A0xbc33009919c4397e!2sDeepa+Bridal+Studio!5e0!3m2!1sen!2sin"
                  width="100%" height="100%" style={{border:0, minHeight:'280px'}}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Deepa Bridal Studio location in Magunta Layout, Nellore"
                  aria-label="Map showing Deepa Bridal Studio at Ravindra Nagar, Magunta Layout, Nellore">
                </iframe>
              </div>
              <a href="https://maps.app.goo.gl/DEtJuy7pCm8RWVfB7" target="_blank" rel="noopener noreferrer"
                className="touch-target inline-flex items-center gap-2 mt-3 px-4 py-2 border border-yellow-800/30 hover:border-yellow-600 transition-all duration-300 font-sans text-[9px] tracking-[0.25em] uppercase text-yellow-500/80 hover:text-yellow-400">
                <MapPin size={12} />
                Get Directions on Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

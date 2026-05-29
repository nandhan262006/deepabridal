import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MapPin, Clock, Link2, Share2, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name:"",phone:"",service:"",date:"",message:""});

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(()=>setSent(false), 4000);
  };

  const textureBg = {
    backgroundColor:'#090f0b',
    backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.02) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.02) 75%)`,
    backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'
  };

  return (
    <section id="contact" className="deepa-bg-dark relative py-28 px-6 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-yellow-600/55 mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-5">Book Your Look</h2>
          <div className="divider-gold max-w-xs mx-auto" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">
          {/* Info */}
          <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8,delay:0.2}} className="lg:col-span-2 space-y-5">
            <div className="border border-yellow-800/30 p-8" style={textureBg}>
              <p className="font-script text-3xl text-yellow-400/70 mb-6">Let's connect</p>
              <div className="space-y-5">
                {[
                  {icon:Phone, label:"Call / WhatsApp", value:"799 339 3339", href:"tel:+917993393339"},
                  {icon:MapPin, label:"Location",       value:"Hyderabad, Telangana"},
                  {icon:Clock, label:"Studio Hours",    value:"Mon–Sun: 9 AM – 8 PM"},
                ].map(({icon:Icon,label,value,href})=>(
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 border border-yellow-800/40 flex items-center justify-center flex-shrink-0 group-hover:border-yellow-600 transition-colors">
                      <Icon size={13} className="text-yellow-600" strokeWidth={1.5}/>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-yellow-700/55 mb-0.5">{label}</p>
                      {href
                        ? <a href={href} className="font-body text-base text-yellow-200/75 hover:text-yellow-300 transition-colors">{value}</a>
                        : <p className="font-body text-base text-yellow-200/75">{value}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-5 border-t border-yellow-900/30">
                <p className="font-sans text-[9px] tracking-[0.32em] uppercase text-yellow-700/50 mb-4">Follow Us</p>
                <div className="flex gap-2">
                  {[{Icon:Link2,label:"@deepabridalstudio"},{Icon:Share2,label:"Deepa Bridal Studio"}].map(({Icon,label})=>(
                    <button key={label} className="flex items-center gap-2 px-3 py-2 border border-yellow-800/30 hover:border-yellow-600/50 transition-all duration-300">
                      <Icon size={12} className="text-yellow-600" strokeWidth={1.5}/>
                      <span className="font-sans text-[9px] tracking-[0.12em] text-yellow-600/55">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <a href="tel:+917993393339"
              className="block border border-yellow-700/40 p-6 text-center hover:border-yellow-500 transition-all duration-300 group"
              style={{background:'linear-gradient(135deg,#0e2a1a,#060f09)'}}>
              <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-yellow-700/55 mb-2">Call Now</p>
              <p className="font-display text-3xl gold-text">799 339 3339</p>
            </a>
          </motion.div>
          {/* Form */}
          <motion.div initial={{opacity:0,x:40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8,delay:0.3}} className="lg:col-span-3">
            <div className="border border-yellow-800/30 p-8 md:p-10" style={textureBg}>
              <h3 className="font-display text-2xl gold-text mb-8">Enquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[{name:"name",ph:"Your Name",type:"text"},{name:"phone",ph:"Phone / WhatsApp",type:"tel"}].map(({name,ph,type})=>(
                    <input key={name} type={type} placeholder={ph} value={form[name]}
                      onChange={e=>setForm({...form,[name]:e.target.value})}
                      className="w-full border border-yellow-900/35 focus:border-yellow-600/55 outline-none px-4 py-3 font-body text-sm text-yellow-200/80 placeholder:text-yellow-800/45 transition-colors duration-300"
                      style={{backgroundColor:'rgba(4,10,6,0.7)'}}/>
                  ))}
                </div>
                <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}
                  className="w-full border border-yellow-900/35 focus:border-yellow-600/55 outline-none px-4 py-3 font-body text-sm text-yellow-200/80 transition-colors duration-300 appearance-none"
                  style={{backgroundColor:'rgba(4,10,6,0.7)'}}>
                  <option value="">Select Service</option>
                  {["Bridal Makeup","Hair Styling","Skincare Package","Nail Art","Full Bridal Package"].map(s=>(
                    <option key={s} value={s} style={{backgroundColor:'#040d07'}}>{s}</option>
                  ))}
                </select>
                <input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}
                  className="w-full border border-yellow-900/35 focus:border-yellow-600/55 outline-none px-4 py-3 font-body text-sm text-yellow-200/80 transition-colors duration-300"
                  style={{backgroundColor:'rgba(4,10,6,0.7)',colorScheme:'dark'}}/>
                <textarea rows={4} placeholder="Tell us about your special day..."
                  value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                  className="w-full border border-yellow-900/35 focus:border-yellow-600/55 outline-none px-4 py-3 font-body text-sm text-yellow-200/80 placeholder:text-yellow-800/45 transition-colors duration-300 resize-none"
                  style={{backgroundColor:'rgba(4,10,6,0.7)'}}/>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 font-sans text-xs tracking-[0.3em] uppercase font-semibold hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
                  style={{background:'linear-gradient(135deg,#9a6f0a,#d4a017,#f5d87a,#d4a017,#9a6f0a)',color:'#060f09'}}>
                  {sent ? "Message Sent! ✓" : <><Send size={13}/> Send Enquiry</>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

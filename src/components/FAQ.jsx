import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What bridal makeup services do you offer in Nellore?",
    a: "We offer a complete range of bridal makeup services including HD bridal makeup, airbrush makeup, engagement makeup, reception makeup, traditional bridal looks, and bridal party makeup at Deepa Bridal Studio in Nellore."
  },
  {
    q: "How much does bridal makeup cost in Nellore?",
    a: "Our bridal makeup packages start from affordable rates and vary based on the package you choose — from natural bridal makeup to premium HD and airbrush makeup. Contact us at +91 79933 93339 for a personalized quote."
  },
  {
    q: "Do you offer bridal hair styling services in Nellore?",
    a: "Yes, we offer professional bridal hair styling including haircuts, hair spa, straightening, smoothing, keratin treatments, botox, and nanoplastia at our Nellore studio."
  },
  {
    q: "Where is Deepa Bridal Studio located?",
    a: "We are located at Ravindra Nagar Road, Opp. PVR Kalyana Mandapam, Beside DSR Guest Inn, Magunta Layout, Nellore, Andhra Pradesh 524003. We are conveniently located in Magunta Layout, Nellore."
  },
  {
    q: "What brands do you use for bridal makeup?",
    a: "We use premium international brands including Kryolan, MAC, Make Up Studio, Seasoul, Huda Beauty, NARS, Too Faced, Smashbox, and Estée Lauder for all our bridal makeup services."
  },
  {
    q: "Do you offer trial sessions before the wedding?",
    a: "Yes, we offer bridal makeup trials to ensure you are completely satisfied with your look before the big day. Contact us to schedule your trial session at our Nellore studio."
  },
  {
    q: "What are your studio hours in Nellore?",
    a: "We are open Monday through Sunday from 9:00 AM to 8:00 PM. Appointments are recommended for all bridal services."
  },
  {
    q: "How do I book an appointment at Deepa Bridal Studio?",
    a: "You can book your appointment by calling us at +91 79933 93339 or via WhatsApp at the same number. You can also visit our studio at Magunta Layout, Nellore. Walk-ins are welcome, but appointments are recommended."
  },
];

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <div className="border border-yellow-800/30 hover:border-yellow-700/50 transition-colors duration-300 overflow-hidden"
      style={{backgroundColor:'rgba(10,25,16,0.5)'}}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 md:px-8 py-4 sm:py-5 text-left touch-target"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-display text-lg sm:text-xl text-yellow-200/90 pr-4">{faq.q}</span>
        <ChevronDown size={16} className={`text-yellow-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6">
              <div className="divider-gold mb-4 opacity-25" />
              <p className="font-body text-base sm:text-lg text-yellow-100/80 leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="deepa-bg-dark section-padding relative overflow-hidden"
      aria-label="Frequently asked questions about bridal makeup in Nellore - Deepa Bridal Studio">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div ref={ref} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.6em] uppercase text-yellow-600/75 mb-4">Got Questions?</p>
          <h2 className="font-display text-5xl md:text-6xl gold-text mb-5">Frequently Asked Questions</h2>
          <p className="font-body text-base sm:text-lg text-yellow-100/70 max-w-2xl mx-auto">Everything you need to know about bridal makeup at Deepa Bridal Studio in Nellore.</p>
          <div className="divider-gold max-w-xs mx-auto mt-4" />
        </motion.div>
        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7,delay:0.2}}
          className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} isOpen={openIndex === i} toggle={() => toggle(i)} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

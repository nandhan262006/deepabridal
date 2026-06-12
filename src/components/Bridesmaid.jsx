import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Bridesmaid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="deepa-bg section-padding">
      <div ref={ref} className="max-w-5xl mx-auto px-4">
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}}
          className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-3">Bridesmaid Packages</h2>
          <p className="font-body text-base sm:text-lg text-white/90 max-w-3xl mx-auto mb-4 leading-relaxed">
            Every celebration tells a story, and every story deserves a beautiful look. At Deepa Brides Studio, we create elegant, customized makeup looks that complement your personality, outfit, and special occasion.
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 max-w-3xl mx-auto">
            <p className="font-display text-xl text-white/90">Bride's Sister Makeup</p>
            <p className="font-display text-xl text-white/90">Bride's Mother Makeup</p>
            <p className="font-display text-xl text-white/90">Seemantham Makeup</p>
            <p className="font-display text-xl text-white/90">Naming Ceremony Makeup</p>
            <p className="font-display text-xl text-white/90">Party Makeup</p>
            <p className="font-display text-xl text-white/90">Housewarming Makeup</p>
            <p className="font-display text-xl text-white/90">Puberty Ceremony Makeup</p>
            <p className="font-display text-xl text-white/90">Groom Makeup</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:0.1}}
            className="relative border border-yellow-800/30 p-6 sm:p-8"
            style={{backgroundColor:'rgba(10,25,16,0.7)'}}>
            <h3 className="font-display text-xl gold-text mb-5 text-center tracking-wider">SIGNATURE PACKAGES</h3>
            <div className="space-y-5">
              <div>
                <p className="font-display text-lg text-yellow-300/90">Natural Glow – <span className="text-yellow-400">₹5,000</span></p>
                <p className="font-body text-sm text-white/80 mt-1">Makeup • Saree Draping • Hairstyling</p>
              </div>
              <div>
                <p className="font-display text-lg text-yellow-300/90">Elegant Glow – <span className="text-yellow-400">₹7,000</span></p>
                <p className="font-body text-sm text-white/80 mt-1">HD Makeup • Pre-Pleated Saree Draping • Hairstyling with Hair Extensions</p>
              </div>
              <div>
                <p className="font-display text-lg text-yellow-300/90">Signature Makeover – <span className="text-yellow-400">₹10,000</span></p>
                <p className="font-body text-sm text-white/80 mt-1">No-Makeup Makeup Look • Pre-Pleated Saree Draping • Hair Extensions • Hair Accessories • Professional Hairstyling • Fresh Flower Styling</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:0.2}}
            className="relative border border-yellow-800/30 p-6 sm:p-8"
            style={{backgroundColor:'rgba(10,25,16,0.7)'}}>
            <h3 className="font-display text-xl gold-text mb-5 text-center tracking-wider">INDIVIDUAL SERVICES</h3>
            <div className="space-y-4">
              <p className="font-display text-lg text-yellow-300/90">Basic to Premium Makeup – <span className="text-yellow-400">₹1,000 – ₹5,000</span></p>
              <p className="font-display text-lg text-yellow-300/90">Hairstyling – <span className="text-yellow-400">₹1,000 – ₹3,000</span></p>
              <p className="font-display text-lg text-yellow-300/90">Saree Draping – <span className="text-yellow-400">₹500 – ₹2,000</span></p>
              <p className="font-display text-lg text-yellow-300/90">Saree Box Folding – <span className="text-yellow-400">₹500 – ₹2,000</span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

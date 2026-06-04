import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name:"Priya Reddy",         occasion:"Wedding Bride - Nellore",    stars:5, text:"Deepa understood exactly what I wanted for my wedding day. The makeup was flawless, lasted all day and night, and I received so many compliments. She made me feel like a queen! Best bridal makeup artist in Nellore!" },
  { name:"Sravani Krishnamurthy", occasion:"Engagement - Nellore",     stars:5, text:"I was so nervous about my engagement look but Deepa put me at ease instantly. The hair styling was perfect — elegant yet modern. Absolutely loved the whole experience!" },
  { name:"Divya Sharma",         occasion:"Reception Bride - Nellore", stars:5, text:"The bridal package exceeded all expectations. The skin prep a week before made such a difference. My skin looked radiant and the nail art was absolutely stunning!" },
  { name:"Kavitha Nair",         occasion:"Mehendi Function - Nellore",stars:5, text:"Deepa has a magical touch! My mehendi look was exactly what I dreamed of — soft, beautiful, and so Indian. The team is professional, punctual, and incredibly talented." },
  { name:"Ananya Pillai",        occasion:"Wedding Bride - Nellore",   stars:5, text:"I travelled from Bangalore specifically to get my bridal makeup done by Deepa — and it was absolutely worth it. The HD makeup was perfect for photos. Highly recommend this bridal studio in Nellore!" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="testimonials" className="deepa-bg-flat section-padding relative overflow-hidden"
      aria-label="Client testimonials and reviews for Deepa Bridal Studio in Nellore">
      <div className="absolute top-12 sm:top-16 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
        <Quote size={100} className="text-yellow-400 sm:w-[180px]" />
      </div>
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} className="text-center mb-14">
          <p className="font-sans text-[14px] tracking-[0.6em] uppercase text-yellow-600/75 mb-4">Kind Words</p>
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-5">What Our Brides Say</h2>
          <p className="font-body text-sm sm:text-base text-yellow-100/70 max-w-2xl mx-auto">Read reviews from our happy brides who trust us as the best bridal makeup artist in Nellore.</p>
          <div className="divider-gold max-w-xs mx-auto mt-4" />
        </motion.div>
        <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.9,delay:0.3}}>
          <div className="border border-yellow-800/30 p-6 sm:p-8 md:p-10 lg:p-14 relative overflow-hidden"
            style={{
              backgroundColor:'rgba(8,19,12,0.85)',
              backgroundImage:`linear-gradient(45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(-45deg,rgba(255,255,255,0.02) 25%,transparent 25%),linear-gradient(45deg,transparent 75%,rgba(255,255,255,0.02) 75%),linear-gradient(-45deg,transparent 75%,rgba(255,255,255,0.02) 75%)`,
              backgroundSize:'5px 5px',backgroundPosition:'0 0,0 2.5px,2.5px -2.5px,-2.5px 0'
            }}>
            {[["top-0 left-0","border-t border-l"],["top-0 right-0","border-t border-r"],["bottom-0 left-0","border-b border-l"],["bottom-0 right-0","border-b border-r"]].map(([p,b])=>(
              <div key={p} className={`absolute ${p} w-7 h-7 border-yellow-600/35 ${b}`} />
            ))}
            <div className="flex justify-center mb-7">
              {[...Array(testimonials[current].stars)].map((_,i)=>(
                <Star key={i} size={15} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <motion.blockquote key={current} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.35}}
              className="text-center font-body text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-100/85 leading-relaxed italic mb-6 sm:mb-9">
              "{testimonials[current].text}"
            </motion.blockquote>
            <div className="text-center">
              <p className="font-display text-xl gold-text">{testimonials[current].name}</p>
              <p className="font-sans text-[14px] tracking-[0.32em] uppercase text-yellow-600/70 mt-1">{testimonials[current].occasion}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <button onClick={()=>setCurrent(c=>(c-1+testimonials.length)%testimonials.length)}
              className="touch-target-sm w-10 h-10 border border-yellow-800/40 flex items-center justify-center hover:border-yellow-600 transition-all duration-300"
              style={{backgroundColor:'transparent'}}
              aria-label="Previous testimonial">
              <ChevronLeft size={15} className="text-yellow-500" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_,i)=>(
                <button key={i} onClick={()=>setCurrent(i)}
                  className={`touch-target-sm transition-all duration-300 ${i===current?'w-6 h-1 bg-yellow-400':'w-1 h-1 rounded-full bg-yellow-800'}`}
                  aria-label={`View testimonial ${i + 1}`} />
              ))}
            </div>
            <button onClick={()=>setCurrent(c=>(c+1)%testimonials.length)}
              className="touch-target-sm w-10 h-10 border border-yellow-800/40 flex items-center justify-center hover:border-yellow-600 transition-all duration-300"
              aria-label="Next testimonial">
              <ChevronRight size={15} className="text-yellow-500" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, ArrowRight } from "lucide-react";

const previewPosts = [
  { id: 3, img: "/insta3.webp", alt: "Bridal hairstyle and makeup", tag: "Famous Playback Singer Mangli" },
  { id: 6, img: "/ananyanagalla.jpeg", alt: "Actress Ananya Nagalla", tag: "Actress Ananya Nagalla" },
  { id: 1, img: "/insta1.webp", alt: "Bridal makeup transformation" },
];

export default function InstagramGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="deepa-bg-flat section-padding relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.6em] uppercase text-yellow-600/75 mb-4">Follow Us</p>
          <h2 className="font-display text-5xl md:text-6xl gold-text mb-5">Instagram</h2>
          <div className="divider-gold max-w-xs mx-auto" />
          <a href="https://www.instagram.com/deepabridalstudio/"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 border border-yellow-700/50 text-yellow-400/80 hover:text-yellow-300 hover:border-yellow-500 transition-all duration-300 font-sans text-sm tracking-[0.25em] uppercase">
            <Camera size={14} />
            @deepabridalstudio
          </a>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {previewPosts.map((post, i) => (
            <motion.div key={post.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="relative overflow-hidden border border-yellow-900/25 aspect-square bg-forest-800">
              <img src={post.img} alt={post.alt}
                className="w-full h-full object-cover" loading="lazy" />
              {post.tag && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-4">
                  <p className="font-display text-lg sm:text-xl font-semibold gold-text leading-tight">{post.tag}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 border border-yellow-700/50 text-yellow-400/80 hover:text-yellow-300 hover:border-yellow-500 transition-all duration-300 font-sans text-sm tracking-[0.25em] uppercase group">
            View My Gallery
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

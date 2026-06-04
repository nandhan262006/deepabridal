import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Camera } from "lucide-react";

const instagramPosts = [
  { id: 1, img: "/insta1.jpeg", url: "https://www.instagram.com/reel/DU45YpTEaG3/", alt: "Bridal makeup transformation by Deepa Bridal Studio in Nellore" },
  { id: 2, img: "/insta2.jpeg", url: "https://www.instagram.com/reel/DOMaynXk6qa/", alt: "Wedding bridal look by best makeup artist in Nellore - Deepa Bridal Studio" },
  { id: 3, img: "/insta3.jpeg", url: "https://www.instagram.com/reel/DP9nLKykmwg/", alt: "Bridal hairstyle and makeup at Deepa Bridal Studio Nellore" },
  { id: 4, img: "/insta4.jpeg", url: "https://www.instagram.com/reel/DWhCnjMkle4/", alt: "Luxury bridal makeup package by Deepa Bridal Studio in Magunta Layout Nellore" },
  { id: 5, img: "/insta5.jpeg", url: "https://www.instagram.com/reel/C8hYs9syPNj/", alt: "Professional bridal makeup artist Deepa Bridal Studio Nellore" },
];

function InstagramPost({ post, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="relative block overflow-hidden border border-yellow-900/25 hover:border-yellow-600/45 transition-all duration-500 rounded-lg group aspect-square bg-forest-800"
    >
      <img
        src={post.img}
        alt={post.alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
        <Camera size={24} className="text-white/0 group-hover:text-white/80 transition-all duration-300" />
      </div>
      {post.id === 3 && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-2 px-3">
          <p className="font-sans text-[10px] sm:text-xs tracking-[0.15em] text-yellow-400/90 font-semibold">
            Famous Playback Singer Mangli
          </p>
        </div>
      )}
    </motion.a>
  );
}

export default function InstagramGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="deepa-bg-flat section-padding relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-yellow-600/75 mb-4">Follow Us</p>
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-5">Instagram</h2>
          <div className="divider-gold max-w-xs mx-auto" />
          <a href="https://www.instagram.com/deepabridalstudio/"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 border border-yellow-700/50 text-yellow-400/80 hover:text-yellow-300 hover:border-yellow-500 transition-all duration-300 font-sans text-xs tracking-[0.25em] uppercase">
            <Camera size={14} />
            @deepabridalstudio
          </a>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {instagramPosts.map((post, i) => (
            <InstagramPost key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

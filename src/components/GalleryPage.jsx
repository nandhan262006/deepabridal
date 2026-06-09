import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, X } from "lucide-react";
import { useSanity } from "../sanity/useSanity";
import { galleryQuery } from "../sanity/queries";
import { urlFor } from "../sanity/client";

const fallbackPhotos = [
  { id: 3, img: "/insta3.webp", alt: "Bridal hairstyle and makeup", tag: "Famous Playback Singer Mangli" },
  { id: 6, img: "/ananyanagalla.webp", alt: "Actress Ananya Nagalla", tag: "Actress Ananya Nagalla" },
  { id: 17, img: "/airbrush5.webp", alt: "Airbrush makeup look 5" },
  { id: 14, img: "/airbrush2.webp", alt: "Airbrush makeup look 2" },
  { id: 13, img: "/airbrush1.webp", alt: "Airbrush makeup look 1" },
  { id: 16, img: "/airbrush4.webp", alt: "Airbrush makeup look 4" },
  { id: 11, img: "/hd4.webp", alt: "HD Bridal makeup look 4" },
  { id: 1, img: "/insta1.webp", alt: "Bridal makeup transformation" },
  { id: 2, img: "/insta2.webp", alt: "Wedding bridal look" },
  { id: 4, img: "/insta4.webp", alt: "Luxury bridal makeup package" },
  { id: 7, img: "/insta6.webp", alt: "Bridal look" },
  { id: 8, img: "/hd1.webp", alt: "HD Bridal makeup look 1" },
  { id: 9, img: "/hd2.webp", alt: "HD Bridal makeup look 2" },
  { id: 10, img: "/hd3.webp", alt: "HD Bridal makeup look 3" },
  { id: 12, img: "/hd5.webp", alt: "HD Bridal makeup look 5" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null);
  const { data: galleryImages } = useSanity(galleryQuery);

  const sanityPhotos = galleryImages && galleryImages.length > 0
    ? galleryImages.map((p, i) => ({
        id: `sanity-${i}`,
        img: p.image ? urlFor(p.image).width(800).height(800).url() : fallbackPhotos[0].img,
        alt: p.title || "Gallery image",
        tag: null,
        order: p.order ?? 999,
      }))
    : [];

  const fallbackWithOrder = fallbackPhotos.map((p, i) => ({...p, order: 100 + i}));

  const photos = [...sanityPhotos, ...fallbackWithOrder]
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <Helmet>
        <title>Bridal Makeup Gallery | Deepa Bridal Studio - Nellore</title>
        <meta name="description" content="Explore our bridal makeup gallery in Nellore. See HD makeup, airbrush makeup, celebrity looks and bridal transformations by Deepa Bridal Studio." />
        <link rel="canonical" href="https://deepabridal.in/gallery" />
        <meta property="og:title" content="Bridal Makeup Gallery | Deepa Bridal Studio - Nellore" />
        <meta property="og:url" content="https://deepabridal.in/gallery" />
        <meta property="og:image" content={photos[0]?.img || "https://deepabridal.in/insta3.webp"} />
        <meta name="twitter:title" content="Bridal Makeup Gallery | Deepa Bridal Studio - Nellore" />
        <meta name="twitter:image" content={photos[0]?.img || "https://deepabridal.in/insta3.webp"} />
      </Helmet>
      <div className="min-h-screen deepa-bg-flat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.6em] uppercase text-yellow-600/75 mb-4">Our Work</p>
          <h1 className="font-display text-5xl md:text-6xl gold-text mb-5">Full Gallery</h1>
          <div className="divider-gold max-w-xs mx-auto" />
          <a href="/"
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 border border-yellow-700/50 text-yellow-400/80 hover:text-yellow-300 hover:border-yellow-500 transition-all font-sans text-sm tracking-[0.25em] uppercase">
            <Camera size={14} />
            Back to Home
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <motion.button key={photo.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              onClick={() => setLightbox(photo)}
              className="relative group overflow-hidden border border-yellow-900/25 hover:border-yellow-600/45 transition-all duration-500 aspect-square bg-forest-800">
              <img src={photo.img} alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </motion.button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 transition-colors z-10">
            <X size={32} />
          </button>
          <img src={lightbox.img} alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
    </>
  );
}

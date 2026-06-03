import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const waLink = "https://wa.me/917993393339?text=Hi%20Deepa%20Bridal%20Studio!%20I'd%20like%20to%20book%20a%20bridal%20makeup%20consultation.";
const igLink = "https://instagram.com/deepabridalstudio";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3">
      <motion.a
        href={igLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{delay:2,duration:0.5,type:"spring"}}
        whileHover={{scale:1.1}}
        className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
        style={{background:'linear-gradient(135deg,#833ab4,#fd1d1d,#f56040)'}}
        aria-label="Follow Deepa Bridal Studio on Instagram"
      >
        <img src="/instalogo.jpeg" alt="Instagram - Deepa Bridal Studio Nellore" className="w-5 sm:w-7 h-5 sm:h-7 rounded-full" />
      </motion.a>
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{delay:2.15,duration:0.5,type:"spring"}}
        whileHover={{scale:1.1}}
        className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-green-500 hover:bg-green-400 shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors"
        aria-label="Book bridal makeup appointment via WhatsApp"
      >
        <MessageCircle size={22} className="text-white sm:w-[26px]" fill="white" />
      </motion.a>
      <motion.a
        href="tel:+917993393339"
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1}}
        transition={{delay:2.3,duration:0.5,type:"spring"}}
        whileHover={{scale:1.1}}
        className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-yellow-600 hover:bg-yellow-500 shadow-lg shadow-yellow-600/30 flex items-center justify-center transition-colors"
        aria-label="Call Deepa Bridal Studio at +91 79933 93339"
      >
        <Phone size={22} className="text-white sm:w-[26px]" />
      </motion.a>
    </div>
  );
}

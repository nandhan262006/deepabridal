export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{backgroundColor:'#000000',borderTop:'1px solid rgba(212,160,23,0.2)'}}
      aria-label="Deepa Bridal Studio footer - Bridal Makeup Artist in Nellore">
      <div className="h-px" style={{background:'linear-gradient(90deg,transparent,#d4a017,#f5d87a,#d4a017,transparent)'}} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/LOGO.png" alt="Deepa Bridal Studio - Best Bridal Makeup Artist in Nellore" className="h-10 w-auto" loading="lazy" />
            </div>
            <p className="font-body text-sm text-yellow-300/60 leading-relaxed mb-4">
              Signature bridal artistry for the modern Indian bride. Every look crafted with precision, love, and expertise.
            </p>
            <p className="font-body text-xs text-yellow-600/60">
              <strong className="text-yellow-500/80">Deepa Bridal Studio</strong><br />
              Ravindra Nagar Road, Opp. PVR Kalyana Mandapam,<br />
              Beside DSR Guest Inn, Magunta Layout,<br />
              Nellore, Andhra Pradesh 524003
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <p className="font-sans text-[13px] tracking-[0.4em] uppercase text-yellow-700/70 mb-5">Quick Links</p>
            <ul className="space-y-2">
              {["Home","About","Services","Bridal Packages","Gallery","FAQ","Testimonials","Contact"].map(link=>(
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g,'-')}`} className="font-body text-sm text-yellow-400/65 hover:text-yellow-400 transition-colors duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <p className="font-sans text-[13px] tracking-[0.4em] uppercase text-yellow-700/70 mb-5">Our Services in Nellore</p>
            <ul className="space-y-2 mb-6">
              {["Bridal Makeup","HD Makeup","Airbrush Makeup","Hair Styling","Skin Care","Nail Art","Engagement Makeup","Reception Makeup"].map(s=>(
                <li key={s} className="font-body text-sm text-yellow-400/65">{s}</li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <p className="font-sans text-[13px] tracking-[0.4em] uppercase text-yellow-700/70 mb-5">Contact Us</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+917993393339" className="font-body text-sm text-yellow-400/65 hover:text-yellow-400 transition-colors">
                  +91 79933 93339
                </a>
              </li>
              <li>
                <a href="https://wa.me/917993393339" target="_blank" rel="noopener noreferrer"
                  className="font-body text-sm text-green-400/65 hover:text-green-400 transition-colors">
                  WhatsApp: +91 79933 93339
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/deepabridalstudio/" target="_blank" rel="noopener noreferrer"
                  className="font-body text-sm text-yellow-400/65 hover:text-yellow-400 transition-colors">
                  @deepabridalstudio
                </a>
              </li>
              <li className="font-body text-sm text-yellow-600/70 mt-2">
                Mon–Sun: 9 AM – 8 PM
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px mb-6" style={{background:'linear-gradient(90deg,transparent,rgba(212,160,23,0.2),transparent)'}} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[14px] tracking-[0.2em] text-yellow-800/60">
            &copy; {currentYear} Deepa Bridal Studio. Best Bridal Makeup Artist in Nellore. All rights reserved.
          </p>
          <p className="font-script text-lg text-yellow-700/55">Crafting beautiful brides since day one</p>
        </div>
      </div>
    </footer>
  );
}

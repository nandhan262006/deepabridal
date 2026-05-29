export default function Footer() {
  return (
    <footer style={{backgroundColor:'#000000',borderTop:'1px solid rgba(212,160,23,0.2)'}}>
      <div className="h-px" style={{background:'linear-gradient(90deg,transparent,#d4a017,#f5d87a,#d4a017,transparent)'}} />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border border-yellow-700/50 flex items-center justify-center">
                <span className="font-script text-2xl gold-text">d</span>
              </div>
              <div>
                <p className="font-display text-sm font-semibold tracking-[0.2em] gold-text uppercase">Deepa Bridal Studio</p>
                <p className="font-sans text-[9px] tracking-[0.3em] text-yellow-700/50 uppercase">Hyderabad</p>
              </div>
            </div>
            <p className="font-body text-sm text-yellow-300/45 leading-relaxed">
              Signature bridal artistry for the modern Indian bride. Every look crafted with precision, love, and expertise.
            </p>
          </div>
          <div>
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-yellow-700/50 mb-5">Quick Links</p>
            <ul className="space-y-2">
              {["Home","Services","Gallery","About","Testimonials","Contact"].map(link=>(
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="font-body text-sm text-yellow-400/45 hover:text-yellow-400 transition-colors duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-yellow-700/50 mb-5">Services</p>
            <ul className="space-y-2 mb-6">
              {["Bridal Makeup","Hair Styling","Skincare","Nail Art"].map(s=>(
                <li key={s} className="font-body text-sm text-yellow-400/45">{s}</li>
              ))}
            </ul>
            <a href="tel:+917993393339" className="font-display text-2xl gold-text hover:opacity-75 transition-opacity">799 339 3339</a>
          </div>
        </div>
        <div className="h-px mb-6" style={{background:'linear-gradient(90deg,transparent,rgba(212,160,23,0.2),transparent)'}} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] tracking-[0.2em] text-yellow-800/40">© 2024 Deepa Bridal Studio. All rights reserved.</p>
          <p className="font-script text-lg text-yellow-700/35">Crafting beautiful brides since day one</p>
        </div>
      </div>
    </footer>
  );
}

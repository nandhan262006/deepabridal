import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Training from "./components/Training";
import Services from "./components/Services";
import BridalServices from "./components/BridalServices";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Training />
        <Services />
        <BridalServices />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

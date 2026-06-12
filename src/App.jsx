import { Helmet } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SiteSettingsProvider } from "./sanity/SiteSettingsProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Training from "./components/Training";
import Services from "./components/Services";
import BridalServices from "./components/BridalServices";
import Gallery from "./components/Gallery";
import Bridesmaid from "./components/Bridesmaid";
import Testimonials from "./components/Testimonials";
import Brands from "./components/Brands";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import GalleryPage from "./components/GalleryPage";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Deepa Bridal Studio | Best Bridal Makeup Artist in Nellore, Andhra Pradesh</title>
        <meta name="description" content="Deepa Bridal Studio is the best bridal makeup artist in Nellore, offering luxury HD makeup, airbrush makeup, hairstyling, skin care & nail services near Magunta Layout. Book your bridal transformation today!" />
        <link rel="canonical" href="https://deepabridal.in/" />
        <meta property="og:title" content="Deepa Bridal Studio | Best Bridal Makeup Artist in Nellore, Andhra Pradesh" />
        <meta property="og:url" content="https://deepabridal.in/" />
        <meta name="twitter:title" content="Deepa Bridal Studio | Best Bridal Makeup Artist in Nellore" />
      </Helmet>
      <Hero />
      <About />
      <Services />
      <BridalServices />
      <Bridesmaid />
      <Gallery />
      <Training />
      <Testimonials />
      <Brands />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteSettingsProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </SiteSettingsProvider>
    </BrowserRouter>
  );
}

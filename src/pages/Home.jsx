import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Navbar";
import Pengertian from "../components/pengertian";
import Layanankami from "../components/layanankami";
import Tentangkami from "../components/tentangkami";
import Artikel from "../components/artikel";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pengertian />
      <Layanankami />
      <Tentangkami />
      <Artikel />
      <Footer />
    </>
  );
}

export default HomePage;

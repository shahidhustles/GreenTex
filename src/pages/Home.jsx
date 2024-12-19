import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  AboutUs,
  Community,
  Features,
  Hero,
  Stats,
  Testimonials,
} from "../sections";

const Home = () => {
  // add snap scroll
  //pagination
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <AboutUs />
      <Community />
      <Footer />
    </>
  );
};

export default Home;

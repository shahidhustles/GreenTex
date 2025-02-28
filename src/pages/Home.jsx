import {
  AboutUs,
  Community,
  Features,
  Hero,
  Stats,
  Testimonials,
} from "../sections";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <AboutUs />
      <Community />
    </div>
  );
};

export default Home;

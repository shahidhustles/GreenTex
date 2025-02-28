import { useNavigate } from "react-router";
import { bulbLeaf, leaf } from "../assets/vectors";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

// Import carousel images
import image1 from "../assets/carousel/image1.jpg";
import image2 from "../assets/carousel/image2.jpg";
import image3 from "../assets/carousel/image3.jpg";
import image4 from "../assets/carousel/image4.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const handleCTA = () => {
    navigate("/find");
  };

  // Carousel images array
  const carouselImages = [image1, image2, image3, image4];

  return (
    <section id="home" className="relative">
      <img
        src={leaf}
        alt=""
        className="absolute left-1/4 top-[235px] opacity-75"
      />
      {/* Adjusted the bulb leaf position to avoid covering the CTA button */}
      <img src={bulbLeaf} alt="" className="absolute bottom-0 right-0 z-0" />
      <main className="min-h-screen pt-20 flex flex-row relative z-10">
        <div className="pt-16 px-16">
          <h1 className="font-montserrat font-bold text-5xl  ">
            Welcome to GreenTex
          </h1>
          <p className="text-4xl font-montserrat pt-4 font-light  ">
            Your Sustainable{" "}
          </p>
          <p className="text-5xl font-black font-montserrat text-primary pt-4">
            Textile Finder
          </p>
          <p className="text-5xl font-black font-montserrat  pt-4">
            Market Place.
          </p>
          <p className="sm:max-w-sm text-sm font-lato pt-4">
            &quot; Discover a Greener Thread for Tomorrow. Your Guide to
            Eco-Friendly Textiles. &quot;
          </p>
          <div className="mt-16 ">
            <Button onClick={handleCTA}>Find Now</Button>
          </div>
        </div>
        <div className="border-2 border-grey rounded-2xl w-1/3 m-16 flex flex-col justify-center items-center overflow-hidden">
          <div className="w-full h-full">
            <Carousel images={carouselImages} interval={5000} />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;

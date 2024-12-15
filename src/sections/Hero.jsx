import { bulbLeaf, leaf } from "../assets/vectors";
import Button from "../components/Button";


const Hero = () => {
  return (
    <section id="home" className="mt-16 relative">
      <img src={leaf} alt=""  className="absolute left-1/4 top-[235px] opacity-75"/>
      <img src={bulbLeaf} alt="" className="absolute bottom-0" />
      <main className="min-h-screen pt-10 flex flex-row">
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
            
            <Button>Find Now</Button>
          </div>
        </div>
        <div className="border-2 border-grey rounded-2xl w-1/3 m-16 flex flex-col justify-center items-center ">
           <p>PHOTOS ARE TO BE ADDED here. (IF YOU GUYS HAVE ANY ANOTHER IDEA DM ME.)</p>
        </div>
      </main>
    </section>
  );
};

export default Hero;

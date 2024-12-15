import { bigLeaf1, smallGlobe } from "../assets/vectors";
import FeatureCard from "../components/FeatureCard";
import { features } from "../data/constants";

const Features = () => {
  return (
    <section id="features" className="min-h-screen w-full relative">
      <img src={bigLeaf1} alt="" className="absolute right-0 bottom-0" />
      <img src={smallGlobe} alt="" className="absolute left-1/3 bottom-16 w-[150px] h-[150px]" />
      <h2 className="font-montserrat font-bold text-4xl text-center pb-16">How does GreenTex works?</h2>
      <div className="flex flex-row justify-between items-center w-full px-16">
        
        {features.map((feature) => (
          <FeatureCard 
            key={feature.title}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;

import FeatureCard from "../components/FeatureCard";
import { features } from "../data/constants";

const Features = () => {
  return (
    <section id="features" className="min-h-screen w-full">
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

import { bigLeaf1 } from "../assets/vectors";
import FeatureCard from "../components/FeatureCard";
import { features } from "../data/constants";

const Features = () => {
  return (
    <section id="features" className="min-h-screen w-full relative px-4">
      <img src={bigLeaf1} alt="" className="absolute right-0 bottom-0 z-0" />

      <h2 className="font-montserrat font-bold text-4xl text-center pb-16 relative z-10">
        How does GreenTex work?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10 place-items-center">
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

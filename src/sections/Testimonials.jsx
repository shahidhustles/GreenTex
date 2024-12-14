import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/constants";


const Testimonials = () => {
  return (
    <section className="min-h-screen">
      <h2 className="font-montserrat font-bold text-4xl text-center my-16">
        What People Say about GreenTex?
      </h2>

      <div className="flex flex-row mx-16">
        {testimonials.map((test) => (
          <TestimonialCard
            key={test}
            profile={test.profile}
            name={test.name}
            ratings={test.ratings}
            opinion={test.opinion}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

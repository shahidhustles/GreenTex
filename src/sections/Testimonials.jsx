import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="min-h-screen px-4">
      <h2 className="font-montserrat font-bold text-4xl text-center my-16">
        What People Say about GreenTex?
      </h2>

      <div className="max-w-[1200px] mx-auto">
        <Slider {...settings}>
          {testimonials.map((test) => (
            <TestimonialCard
              key={test.name}
              profile={test.profile}
              name={test.name}
              ratings={test.ratings}
              opinion={test.opinion}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

import { AiFillStar } from "react-icons/ai";
import { smiley } from "../assets/vectors";
import { pin } from "../assets/vectors";
import { Carousel } from "flowbite-react";

const TestimonialCard = ({ profile, opinion, name, ratings }) => {
  return (
    <Carousel slideInterval={3000} pauseOnHover >
      <div className="w-[360px] h-[450px] border-2 border-accent rounded-2xl mx-4 flex flex-col justify-start items-center relative">
        <img
          src={pin}
          width={24}
          height={24}
          alt="pin-top"
          className="absolute top-3 right-2 z-10"
        />
        <img
          src={profile}
          width={100}
          height={100}
          alt="profile"
          className="mt-8"
        />
        <p className="font-lato font-semibold text-2xl my-4">{name}</p>
        <p className="font-lato text-base m-4 text-center">{opinion}</p>
        <div className="flex w-full justify-between items-center px-8 mt-auto mb-8">
          <div className="flex gap-1">
            {[...Array(ratings)].map((_, index) => (
              <AiFillStar key={index} className="text-yellow-500 text-2xl" />
            ))}
          </div>
          <img src={smiley} width={24} height={24} alt="smiley-face" />
        </div>
      </div>
    </Carousel>
  );
};

export default TestimonialCard;

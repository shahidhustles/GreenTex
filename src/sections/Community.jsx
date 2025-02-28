import { btn1, btn2, community } from "../assets/images";
import { leaves } from "../assets/vectors";
import Button from "../components/Button";

const Community = () => {
  return (
    <section id="community" className="min-h-[550px] bg-grey relative py-16">
      <img
        src={leaves}
        alt=""
        className="absolute left-0 -top-10 max-w-[150px] md:max-w-[200px]"
      />
      <div className="w-11/12 md:w-4/5 lg:w-2/3 bg-white mx-auto rounded-3xl p-6 md:p-8 shadow-md flex flex-col md:flex-row justify-evenly items-center gap-6">
        <div className="flex justify-center">
          <img
            src={community}
            className="w-[200px] md:w-[250px] lg:w-[300px]"
            alt="community"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="font-montserrat font-bold text-xl md:text-2xl mb-2">
            Join the GreenTex Community
          </h2>
          <p className="font-lato font-medium text-sm md:text-base">
            Have knowledge about innovative eco-friendly textiles or brands
            using them? Share your insights to enrich our platform!
          </p>

          <span className="flex flex-row justify-center md:justify-start items-center mt-4">
            <img
              src={btn1}
              width={60}
              height={60}
              className="w-[60px] md:w-[80px]"
              alt="btn1"
            />
            <Button>
              <a>Submit Textile</a>
            </Button>
          </span>
          <p className="font-lato font-medium text-sm md:text-base mt-2">
            Developers can also contribute by enhancing our repository—
            together, we can drive a greener future.
          </p>
          <span className="flex flex-row justify-center md:justify-start items-center mt-4">
            <img
              src={btn2}
              width={60}
              height={60}
              className="w-[60px] md:w-[80px]"
              alt="btn2"
            />
            <Button>
              <a
                href="https://github.com/shahidhustles/GreenTex/tree/master"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Community;

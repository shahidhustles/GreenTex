import { btn1, btn2, community } from "../assets/images";
import Button from "../components/Button";

const Community = () => {
  return (
    <section id="community" className="min-h-[550px] bg-grey flex-1  relative">
      <div className="w-2/3 bg-white h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl flex flex-row justify-evenly items-center ">
        <div>
          <img
            src={community}
            className="w-[350px]"
            height={250}
            alt="community"
          />
        </div>
        <div>
          <h2 className="font-montserrat font-bold text-2xl mb-2">
            Join the GreenTex Community{" "}
          </h2>
          <p className="lg:max-w-sm font-lato font-medium ">
            Have knowledge about innovative eco-friendly textiles or brands
            using them? Share your insights to enrich our platform!
          </p>

          <span className="flex flex-row justify-center items-center mt-4">
            <img src={btn1} width={96} height={96} alt="btn1" />
            <Button>
              {" "}
              <a>Submit Textile</a>
            </Button>
          </span>
          <p className="lg:max-w-sm font-lato font-medium mt-2">
            Developers can also contribute by enhancing our repository—
            together, we can drive a greener future.
          </p>
          <span className="flex flex-row justify-center items-center mt-4">
            <img src={btn2} width={96} height={96} alt="btn2" className="" />
            <Button>
              {" "}
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

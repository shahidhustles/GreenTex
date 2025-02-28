import { logo } from "../assets/images";
import { bigGlobe } from "../assets/vectors";

const Footer = () => {
  return (
    <section
      id="footer"
      className="min-h-[100px] flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-0 py-6 bg-grey mt-8 relative overflow-hidden"
    >
      <img
        src={bigGlobe}
        alt=""
        className="absolute z-10 bottom-0 right-[80px] md:right-85px] w-[150px] md:w-[180px] lg:w-[220px] opacity-70 md:opacity-100"
      />
      <div>
        <img
          src={logo}
          alt="logo"
          className="rounded-2xl h-[50px] w-auto md:h-[60px] lg:h-[70px]"
        />
      </div>
      <span className="text-white font-montserrat font-semibold text-center md:text-left z-20">
        <p>Made with ❤️ by CS-I G4 </p>
        <p>&copy; CE Department, CS-I Group: 4</p>
      </span>
    </section>
  );
};

export default Footer;

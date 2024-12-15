import { logo } from "../assets/images";
import { bigGlobe } from "../assets/vectors";

const Footer = () => {
  return (
    <section
      id="footer"
      className="min-h-[100px] flex flex-row items-center justify-evenly bg-grey mt-8 relative"
    >
      <img src={bigGlobe} alt="" className="absolute z-10 bottom-5 right-0" />
      <div>
        <img src={logo} alt="logo" height={75} width={150} className="rounded-2xl" />
      </div>
      <span className="text-white font-montserrat font-semibold">
        <p>Made with ❤️ by CS-I G4 </p>
        <p>&copy; CE Department, CS-I Group: 4</p>
      </span>
    </section>
  );
};

export default Footer;

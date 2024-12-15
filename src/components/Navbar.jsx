import logo from "../assets/images/logo.png";
import Button from "./Button";
import butterfly from "../assets/images/butterfly.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 flex flex-row w-full h-20 justify-between items-center bg-white font-lato z-10">
      <img src={logo} width={200} height={50} alt="logo" className="pt-4" />
      <div className="flex flex-row pt-4 justify-center items-center ">
        <a href="#home" className="mr-8">
          Home
        </a>
        <a href="/find" className="mr-8">
          Find
        </a>
        <img src={butterfly} width={100} height={100} alt="butterfly" className="mr-2"/>
        <a href="#features" className="mr-8">
          Features
        </a>
        <a href="#about" className="mr-8">
          About Us
        </a>
      </div>
      <div className="pt-4 mr-4">
        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;

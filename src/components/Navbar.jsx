import logo from "../assets/images/logo.png";
import Button from "./Button";
import butterfly from "../assets/images/butterfly.png";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";

const Navbar = () => {
  //for handling active class
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");

  // as addEventListener is a sideeffect.
  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="fixed top-0 flex flex-row w-full h-30 justify-between items-center bg-white font-lato z-10">
      <img src={logo} width={200} height={50} alt="logo" className="pt-4" />
      <div className="flex flex-row pt-4 justify-center items-center ">
        <a
          href="#home"
          className={`mr-8 ${activeHash === "#home" ? "text-accent" : ""}`}
        >
          Home
        </a>
        <NavLink
          to="/find"
          className={({ isActive }) => `mr-8 ${isActive ? "text-primary" : ""}`}
        >
          Find
        </NavLink>
        <img
          src={butterfly}
          width={100}
          height={100}
          alt="butterfly"
          className="mr-2"
        />
        <a
          href="#features"
          className={`mr-8 ${activeHash === "#features" ? "text-accent" : ""}`}
        >
          Features
        </a>
        <a
          href="#about"
          className={`mr-8 ${activeHash === "#about" ? "text-accent" : ""}`}
        >
          About Us
        </a>
      </div>
      <div className="pt-4 mr-4">
        <Button>
          <a href="/login">Login</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

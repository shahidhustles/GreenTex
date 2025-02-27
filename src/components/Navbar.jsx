import logo from "../assets/images/logo.png";
import Button from "./Button";
import butterfly from "../assets/images/butterfly.png";
import { NavLink, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useData, useTextiles } from "../store/store";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { BsBookmarkStar } from "react-icons/bs";

const Navbar = () => {
  //for handling active class
  const [activeHash, setActiveHash] = useState(window.location.hash);
  const navigate = useNavigate();
  // as addEventListener is a side effect.
  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isLoggedIn = useData((state) => state.isLoggedIn);
  //Event handlers (like onClick) can be async functions without any issues
  //The only reason to use useEffect would be if you wanted the logout to happen automatically based on some condition,
  // not in response to a user action
  async function handleLogout() {
    try {
      await signOut(auth);
      useData.setState((state) => ({
        ...state,
        isLoggedIn: false,
      }));
      console.log("logged out");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const bookmarkedTextiles = useTextiles((state) => state.bookmarkedTextiles);
  return (
    <nav className="fixed top-0 flex flex-row w-full h-30 justify-between items-center bg-white font-lato z-50">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} width={200} height={50} alt="logo" className="pt-4" />
      </button>
      <div className="flex flex-row pt-4 justify-center items-center ">
        <a
          href="/#home"
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
          href="/#features"
          className={`mr-8 ${activeHash === "#features" ? "text-accent" : ""}`}
        >
          Features
        </a>
        <a
          href="/#about"
          className={`mr-8 ${activeHash === "#about" ? "text-accent" : ""}`}
        >
          About Us
        </a>
      </div>
      {!isLoggedIn ? (
        <div className="pt-4 mr-4">
          <Button>
            <a href="/login">Login</a>
          </Button>
        </div>
      ) : (
        <div className="pt-4 mr-4 flex flex-row items-center justify-center relative">
          <NavLink to="/bookmarks" className="mr-16">
            <BsBookmarkStar size={24} />
          </NavLink>
          <span className="absolute left-4 bottom-6 rounded-full text-white bg-red-500 w-4 h-4 text-xs flex items-center justify-center">
            <p>{bookmarkedTextiles.length}</p>
          </span>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

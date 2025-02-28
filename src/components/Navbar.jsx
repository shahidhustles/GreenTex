import logo from "../assets/images/logo.png";
import Button from "./Button";
import butterfly from "../assets/images/butterfly.png";
import { NavLink, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useData } from "../store/store";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { BsBookmarkStar } from "react-icons/bs";
import { getBookmarks } from "../utils/firebaseServices";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeHash, setActiveHash] = useState(window.location.hash);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [bookmarksCount, setBookmarksCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isLoggedIn = useData((state) => state.isLoggedIn);

  async function handleLogout() {
    try {
      await signOut(auth);
      useData.setState((state) => ({
        ...state,
        isLoggedIn: false,
      }));
      console.log("logged out");
      setIsMenuOpen(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchBookmarksCount = async () => {
      if (!isLoggedIn || !useData.getState().user?.uid) {
        setBookmarksCount(0);
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {
        const bookmarks = await getBookmarks(useData.getState().user.uid);
        setBookmarksCount(bookmarks.length);
      } catch (error) {
        console.error("Error fetching bookmarks count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookmarksCount();
  }, [isLoggedIn]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full h-auto bg-white font-lato z-50 px-4 py-2 shadow-sm">
      <div className="flex flex-row justify-between items-center">
        <button onClick={() => navigate("/")} className="z-50">
          <img
            src={logo}
            className="w-[150px] md:w-[200px] pt-2 md:pt-4"
            alt="logo"
          />
        </button>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden z-50 text-gray-700"
          onClick={handleMenuClick}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 flex-col justify-center items-center pt-20 ${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden`}
        >
          <div className="flex flex-col items-center gap-8">
            <a
              href="/#home"
              className={`${
                activeHash === "#home" ? "text-accent" : ""
              } text-xl`}
              onClick={handleNavLinkClick}
            >
              Home
            </a>
            <NavLink
              to="/find"
              className={({ isActive }) =>
                `${isActive ? "text-primary" : ""} text-xl`
              }
              onClick={handleNavLinkClick}
            >
              Find
            </NavLink>
            <img src={butterfly} className="w-[80px]" alt="butterfly" />
            <a
              href="/#features"
              className={`${
                activeHash === "#features" ? "text-accent" : ""
              } text-xl`}
              onClick={handleNavLinkClick}
            >
              Features
            </a>
            <a
              href="/#about"
              className={`${
                activeHash === "#about" ? "text-accent" : ""
              } text-xl`}
              onClick={handleNavLinkClick}
            >
              About Us
            </a>

            <div className="mt-8">
              {!isLoggedIn ? (
                <Button>
                  <a href="/login" onClick={handleNavLinkClick}>
                    Login
                  </a>
                </Button>
              ) : (
                <div className="flex flex-col items-center gap-6">
                  <NavLink
                    to="/bookmarks"
                    className="relative"
                    onClick={handleNavLinkClick}
                  >
                    <BsBookmarkStar size={32} />
                    <span className="absolute -top-2 -right-2 rounded-full text-white bg-red-500 w-5 h-5 text-xs flex items-center justify-center">
                      {isLoading ? "..." : bookmarksCount}
                    </span>
                  </NavLink>
                  <Button onClick={handleLogout}>Logout</Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row justify-center items-center gap-4 my-2">
          <a
            href="/#home"
            className={`${activeHash === "#home" ? "text-accent" : ""}`}
          >
            Home
          </a>
          <NavLink
            to="/find"
            className={({ isActive }) => `${isActive ? "text-primary" : ""}`}
          >
            Find
          </NavLink>
          <img src={butterfly} className="w-[100px]" alt="butterfly" />
          <a
            href="/#features"
            className={`${activeHash === "#features" ? "text-accent" : ""}`}
          >
            Features
          </a>
          <a
            href="/#about"
            className={`${activeHash === "#about" ? "text-accent" : ""}`}
          >
            About Us
          </a>
        </div>

        <div className="hidden md:block">
          {!isLoggedIn ? (
            <div>
              <Button>
                <a href="/login">Login</a>
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <NavLink to="/bookmarks" className="relative">
                <BsBookmarkStar size={24} />
                <span className="absolute -top-2 -right-2 rounded-full text-white bg-red-500 w-4 h-4 text-xs flex items-center justify-center">
                  {isLoading ? "..." : bookmarksCount}
                </span>
              </NavLink>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

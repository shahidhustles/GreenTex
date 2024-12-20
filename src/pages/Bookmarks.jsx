import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useData, useTextiles } from "../store/store";
import FabricCard from "../components/FabricCard";
import { sorry } from "../assets/vectors";
import Navbar from "../components/Navbar";

const Bookmarks = () => {
  const navigate = useNavigate();
  const isLoggedIn = useData((state) => state.isLoggedIn);
  const bookmarkedTextiles = useTextiles((state) => state.bookmarkedTextiles);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="pt-32 relative">
      <Navbar />

      <div className="flex flex-row mt-16 items-center min-h-screen w-full ">
        <div className="sm:self-start mx-8 w-1/3 border-r-2 h-[250px]">
          <img
            src=""
            className="w-[75px] h-[75px] bg-black rounded-full"
            alt=""
          />
          <p className="text-2xl font-semibold font-montserrat mt-2 text-primary">
            Welcome Name !
          </p>
          <p className="sm:self-start mt-4 text-lg font-montserrat text-grey">
            Here are your bookmarks ...
          </p>
        </div>
        <main className="flex flex-col ml-8 justify-center items-center w-full">
          <div className=" mt-8 p-4 w-full  gap-6 flex-wrap flex justify-center items-center">
            {bookmarkedTextiles && bookmarkedTextiles.length > 0 ? (
              bookmarkedTextiles.map((textile) => (
                <FabricCard key={textile} textile={textile} />
              ))
            ) : (
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-montserrat text-grey mb-16">
                  Nothing to show here
                </p>
                <img src={sorry} width={200} alt="" />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Bookmarks;

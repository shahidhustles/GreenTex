import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useData, useTextiles } from "../store/store";
import FabricCard from "../components/FabricCard";
import { sorry } from "../assets/vectors";
import { getBookmarks } from "../utils/firebaseServices";

const Bookmarks = () => {
  const navigate = useNavigate();
  const user = useData((state) => state.user);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getModifiedPhotoUrl = (url) => {
    if (!url) return null;
    // Remove size parameter and add a larger size
    return url.replace("=s96-c", "=s400-c");
  };

  const isLoggedIn = useData((state) => state.isLoggedIn);
  const bookmarkedTextiles = useTextiles((state) => state.bookmarkedTextiles);
  const setBookmarkedTextiles = useTextiles(
    (state) => state.setBookmarkedTextiles
  );

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (user?.uid) {
        setIsLoading(true);
        try {
          const bookmarks = await getBookmarks(user.uid);
          setBookmarkedTextiles(bookmarks);
        } catch (error) {
          console.error("Error fetching bookmarks:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchBookmarks();
  }, [user, setBookmarkedTextiles]);

  return (
    <div className="pt-20 md:pt-32 relative px-4">
      <div className="flex flex-col md:flex-row mt-8 md:mt-16 items-center w-full">
        <div className="w-full md:w-1/3 md:border-r-2 h-auto md:h-[250px] p-4 md:mx-8">
          {user?.photoURL && !imageError ? (
            <img
              src={getModifiedPhotoUrl(user.photoURL)}
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              width={75}
              height={75}
              className="rounded-full object-cover w-[75px] h-[75px] border-2 border-gray-200"
              alt="Profile"
              onError={(e) => {
                console.log("Trying fallback...");
                // Try original URL as fallback
                if (!e.target.dataset.tried) {
                  e.target.dataset.tried = "true";
                  e.target.src = user.photoURL;
                } else {
                  setImageError(true);
                }
              }}
            />
          ) : (
            <div className="w-[75px] h-[75px] rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-2xl text-gray-600">
                {user?.displayName?.[0]?.toUpperCase() || "?"}
              </span>
            </div>
          )}
          <p className="text-2xl font-semibold font-montserrat mt-2 text-primary max-w-[200px]">
            Welcome {user?.displayName || "Name"} !
          </p>
          <p className="sm:self-start mt-4 mr-4 text-lg font-montserrat text-grey">
            Here are your bookmarks
          </p>
        </div>
        <main className="flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {isLoading ? (
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-montserrat text-grey mb-16">
                  Loading bookmarks...
                </p>
              </div>
            ) : bookmarkedTextiles && bookmarkedTextiles.length > 0 ? (
              bookmarkedTextiles.map((textile) => (
                <FabricCard key={textile.id} textile={textile} />
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

import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useData, useTextiles } from "../store/store";
import { useNavigate } from "react-router";
import { addBookmark } from "../utils/firebaseServices";

const FabricCard = ({ textile }) => {
  const bookmarkedTextiles = useTextiles((state) => state.bookmarkedTextiles);
  const toggleBookmark = useTextiles((state) => state.toggleBookmark);
  const isMarked = bookmarkedTextiles.some((item) => item.id === textile.id);
  const isLoggedIn = useData((state) => state.isLoggedIn);
  const user = useData((state) => state.user);
  const navigate = useNavigate();

  async function handleBookmark(e) {
    e.stopPropagation();
    if (!isLoggedIn || !user) {
      navigate("/login");
      return;
    }

    try {
      const success = await addBookmark(user.uid, textile.id);
      if (success) {
        toggleBookmark(textile);
      } else {
        console.error("Failed to add bookmark");
      }
    } catch (error) {
      console.error("Error handling bookmark:", error);
    }
  }

  return (
    <div
      onClick={() => {
        navigate(`/find/${textile.id}`);
      }}
      className="relative w-full max-w-[320px] mx-auto h-[340px] p-2 cursor-pointer font-sans bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
    >
      <div className="h-40 w-full">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={textile.images.textile || "https://placehold.co/320x160"}
          alt={textile.name || "Fabric image"}
        />
      </div>
      <div className="p-2">
        {!isMarked ? (
          <CiStar
            className="absolute w-[24px] h-[24px] right-4 top-4 text-grey bg-white bg-opacity-80 rounded-full p-0.5 shadow-sm"
            onClick={(e) => {
              handleBookmark(e);
            }}
          />
        ) : (
          <FaStar
            className="absolute w-[24px] h-[24px] right-4 top-4 text-primary bg-white bg-opacity-80 rounded-full p-0.5 shadow-sm"
            onClick={(e) => {
              handleBookmark(e);
            }}
          />
        )}
        <h2 className="font-bold text-lg mb-2 line-clamp-1">{textile.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">
          {textile.description}
        </p>
      </div>

      <div className="absolute bottom-2 left-2 right-2">
        <p className="font-lato text-slate-400">
          Alternative to:{" "}
          <span className="font-semibold text-grey line-clamp-1">
            {textile.alternativeTo}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FabricCard;

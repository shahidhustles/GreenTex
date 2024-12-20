import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useData, useTextiles } from "../store/store";
import { useNavigate } from "react-router";

const FabricCard = ({ textile }) => {
  const bookmarkedTextiles = useTextiles((state) => state.bookmarkedTextiles);
  const toggleBookmark = useTextiles((state) => state.toggleBookmark);
  const isMarked = bookmarkedTextiles.includes(textile);
  const isLoggedIn = useData((state) => state.isLoggedIn);
  const navigate = useNavigate();

  function handleBookmark() {
    if (isLoggedIn) {
      toggleBookmark(textile);
    } else {
      navigate("/login");
    }
  }
  return (
    <div className=" relative min-w-50 max-w-80  p-2 cursor-pointer font-sans bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img
        className="h-40 w-full object-cover rounded-xl"
        src={textile.imageUrl || "https://placehold.co/320x160"}
        alt={textile.name || "Fabric image"}
      />
      <div className="p-2 ">
        {!isMarked ? (
          <CiStar
            className="absolute w-[24px] h-[24px] right-4 top-4 text-grey"
            onClick={handleBookmark}
          />
        ) : (
          <FaStar
            className="absolute w-[24px] h-[24px] right-4 top-4 text-primary "
            onClick={handleBookmark}
          />
        )}
        <h2 className="font-bold text-lg mb-2 ">{textile.name}</h2>

        <p className="text-sm text-gray-600">{textile.description}</p>
      </div>

      <div className="m-2">
        <p className="font-lato text-slate-400">
          Alternative to :{" "}
          <span className="font-semibold text-grey">
            {textile.alternativeTo}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default FabricCard;

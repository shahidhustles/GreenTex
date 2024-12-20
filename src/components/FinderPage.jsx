import { useState } from "react";
import { sorry } from "../assets/vectors";
import FabricCard from "./FabricCard";
import { searchFilter } from "../utils/filterUtils";

const FinderPage = ({ textiles }) => {
  const [search, setSearch] = useState("");
  const [mapTextiles, setMapTextiles] = useState(textiles);

  function handleChange(e) {
    const searchValue = e.target.value;
    setSearch(searchValue);

    if (searchValue === "") {
      setMapTextiles(textiles);
    } else {
      const searchedTextiles = searchFilter(search);
      setMapTextiles(searchedTextiles);
    }
  }

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <form className="mt-16 w-[500px] h-[40px] focus-within:shadow-lg focus-within:border-green-600 rounded-full border-2 border-grey flex flex-row justify-between px-8 items-center transition-all duration-200">
        <input
          className="focus:outline-none w-full font-montserrat text-lg"
          type="text"
          name="search"
          id="search"
          placeholder="Search fabrics"
          onChange={() => {
            handleChange(event);
          }}
        />
      </form>
      {mapTextiles.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <p className="font-montserrat text-2xl font-semibold mt-16">
            No such Textile available currently.
          </p>
          <img src={sorry} alt="" width={200} />
        </div>
      )}
      <div className=" mt-8 p-4 w-full  gap-6 flex-wrap flex justify-center items-center">
        {mapTextiles.map((textile) => (
          <FabricCard key={textile.id} textile={textile} />
        ))}
      </div>
    </div>
  );
};

export default FinderPage;

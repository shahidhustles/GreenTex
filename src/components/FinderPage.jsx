import { useState, useEffect } from "react";
import { sorry } from "../assets/vectors";
import FabricCard from "./FabricCard";
import { searchFilter } from "../utils/filterUtils";
import { ImCross } from "react-icons/im";
import { Form } from "react-router";
import { FaSearch } from "react-icons/fa";

const FinderPage = ({ textiles }) => {
  const [mapTextiles, setMapTextiles] = useState(textiles);
  const [search, setSearch] = useState("");

  // Update mapTextiles when textiles prop changes
  useEffect(() => {
    setMapTextiles(textiles);
  }, [textiles]);

  function handleChange(e) {
    const searchValue = e.target.value;
    setSearch(searchValue);
    if (searchValue === "") {
      setMapTextiles(textiles);
      setSearch("");
    } else {
      const searchedTextiles = searchFilter(searchValue);
      setMapTextiles(searchedTextiles);
    }
  }

  function handleClear() {
    setSearch("");
    setMapTextiles(textiles);
  }

  return (
    <div className="flex flex-col w-full py-2 md:py-6 px-2 md:px-4">
      <div className="mb-4">
        <Form
          onSubmit={(e) => e.preventDefault()}
          className="mt-4 md:mt-8 lg:mt-16 mb-4 w-full max-w-[500px] h-[40px] focus-within:shadow-lg focus-within:border-green-600 rounded-full border-2 border-grey flex flex-row justify-between px-4 md:px-8 items-center transition-all duration-200 mx-auto"
        >
          <input
            className="focus:outline-none w-full font-montserrat text-base md:text-lg"
            type="text"
            name="search"
            id="search"
            value={search}
            placeholder="Search fabrics"
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <FaSearch className="text-gray-400" />
        </Form>
        {search && (
          <button
            onClick={handleClear}
            className="font-lato max-w-[250px] flex flex-row justify-evenly border rounded-md mt-2 uppercase items-center p-2 mx-auto"
          >
            <ImCross />
            Clear Search
          </button>
        )}
      </div>

      {mapTextiles.length === 0 ? (
        <div className="flex flex-col items-center mt-4">
          <p className="font-montserrat text-xl md:text-2xl font-semibold mt-8 text-center">
            No such Textile available currently.
          </p>
          <img src={sorry} alt="" className="w-48 md:w-64" />
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {mapTextiles.map((textile) => (
            <FabricCard key={textile.id} textile={textile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FinderPage;

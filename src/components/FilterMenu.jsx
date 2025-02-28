import { useState } from "react";
import { useTextiles } from "../store/store";
import { allProperties } from "../utils/filterUtils";
import FilterTiles from "./FilterTiles";
import { ImCross } from "react-icons/im";
import { FaFilter } from "react-icons/fa";

const FilterMenu = () => {
  const properties = allProperties();
  const selectedProperties = useTextiles((state) => state.selectedProperties);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleClear() {
    useTextiles.setState((state) => ({
      ...state,
      selectedProperties: [],
    }));
  }

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="w-full md:w-1/3 min-w-[200px] max-w-full md:max-w-[300px] p-4 md:self-start mt-4 md:mt-16 mx-2 md:mx-8">
      {/* Mobile filter toggle button */}
      <div className="md:hidden flex justify-between items-center mb-2">
        <h2 className="text-2xl font-lato font-semibold text-grey">Filters</h2>
        <button
          onClick={toggleFilter}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md"
        >
          <FaFilter /> {isFilterOpen ? "Hide" : "Show"}
        </button>
      </div>

      {/* Desktop header - always visible */}
      <div className="hidden md:block">
        <h2 className="text-2xl font-lato font-semibold text-grey">Filters</h2>
        <p className="text-md text-slate-400 font-lato">
          Filter according to properties available.
        </p>
      </div>

      {/* Filter content - conditional display on mobile */}
      <div className={`${isFilterOpen ? "block" : "hidden"} md:block`}>
        {selectedProperties.length > 0 && (
          <button
            onClick={handleClear}
            className="font-lato flex flex-row justify-evenly border rounded-md my-2 uppercase w-full items-center p-2"
          >
            <ImCross />
            Clear Filters
          </button>
        )}
        <div className="flex flex-wrap mt-4 gap-2">
          {properties.map((prop) => (
            <FilterTiles key={prop}>{prop}</FilterTiles>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;

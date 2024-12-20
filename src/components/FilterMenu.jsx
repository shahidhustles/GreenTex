import { useTextiles } from "../store/store";
import { allProperties } from "../utils/filterUtils";
import FilterTiles from "./FilterTiles";
import { ImCross } from "react-icons/im";

const FilterMenu = () => {
  const properties = allProperties();
  const selectedProperties = useTextiles((state) => state.selectedProperties);
  function handleClear() {
    useTextiles.setState((state) => ({
      ...state,
      selectedProperties: [],
    }));
  }
  return (
    <div className="w-1/3 min-w-[200px] max-w-[300px] self-start mt-16 mx-8">
      <h2 className="text-2xl font-lato font-semibold text-grey">Filters</h2>
      <p className="text-md text-slate-400 font-lato">
        Filter according to properties available.
      </p>
      {selectedProperties.length > 0 && (
        <button
          onClick={handleClear}
          className=" font-lato  flex flex-row justify-evenly border rounded-md my-2 uppercase w-full items-center p-2 "
        >
          <ImCross />
          Clear Filters
        </button>
      )}
      <div className=" flex flex-wrap mt-4 gap-2">
        {properties.map((prop) => (
          <FilterTiles key={prop}>{prop}</FilterTiles>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;

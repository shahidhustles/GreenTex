import { allProperties } from "../utils/filterUtils";
import FilterTiles from "./filterTiles";

const FilterMenu = () => {
  const properties = allProperties();
  return (
    <div className="w-1/3 min-w-[200px] max-w-[300px] self-start mt-16 mx-8">
      <h2 className="text-2xl font-lato font-semibold text-grey">Filters</h2>
      <p className="text-md text-slate-400 font-lato">
        Filter according to properties available.
      </p>
      <div className=" flex flex-wrap mt-4 gap-2">
        {properties.map((prop) => (
          <FilterTiles key={prop}>{prop}</FilterTiles>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;

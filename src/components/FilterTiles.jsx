import { useTextiles } from "../store/store";

const FilterTiles = ({ children }) => {
  const selectedProperties = useTextiles((state) => state.selectedProperties);
  const toggleSelectedProperty = useTextiles(
    (state) => state.toggleSelectedProperty
  );
  const isSelected = selectedProperties.includes(children);

  return (
    <span className="mb-1">
      <button
        onClick={() => toggleSelectedProperty(children)}
        className={
          !isSelected
            ? "border-2 px-3 py-1 text-sm md:px-4 md:text-base rounded-lg text-tile-grey border-tile-grey uppercase whitespace-nowrap"
            : "border-2 px-3 py-1 text-sm md:px-4 md:text-base rounded-lg text-white uppercase border-accent bg-primary whitespace-nowrap"
        }
      >
        {children}
      </button>
    </span>
  );
};

export default FilterTiles;

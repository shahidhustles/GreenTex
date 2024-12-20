import { useTextiles } from "../store/store";

const FilterTiles = ({ children }) => {
  const selectedProperties = useTextiles((state) => state.selectedProperties);
  const toggleSelectedProperty = useTextiles(
    (state) => state.toggleSelectedProperty
  );
  const isSelected = selectedProperties.includes(children);

  return (
    <span>
      <button
        onClick={() => toggleSelectedProperty(children)}
        className={
          !isSelected
            ? "border-2 px-4 rounded-lg text-tile-grey border-tile-grey uppercase"
            : "border-2 px-4 rounded-lg text-white uppercase border-accent bg-primary"
        }
      >
        {children}
      </button>
    </span>
  );
};

export default FilterTiles;

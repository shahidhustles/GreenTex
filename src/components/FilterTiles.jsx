import { useState } from "react";

const FilterTiles = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <span>
      <button
        onClick={() => {
          setIsActive((prevState) => !prevState);
        }}
        className={
          !isActive
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

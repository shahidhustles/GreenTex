import { useState, useEffect } from "react";
import { sorry } from "../assets/vectors";
import FabricCard from "./FabricCard";
import { searchFilter } from "../utils/filterUtils";
import { ImCross } from "react-icons/im";
import { Form } from "react-router";

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
    <div className="flex flex-col items-center justify-start w-full">
      <Form onSubmit={(e) => e.preventDefault()} className="mt-16 w-[500px] h-[40px] focus-within:shadow-lg focus-within:border-green-600 rounded-full border-2 border-grey flex flex-row justify-between px-8 items-center transition-all duration-200">
        <input
          className="focus:outline-none w-full font-montserrat text-lg"
          type="text"
          name="search"
          id="search"
          value={search}
          placeholder="Search fabrics"
          onChange={() => {
            handleChange(event);
          }}
        />
      </Form>
      {search && (
        <button
          onClick={handleClear}
          className=" font-lato max-w-[250px]  flex flex-row justify-evenly border rounded-md my-2 uppercase w-full items-center p-2 "
        >
          <ImCross />
          Clear Search
        </button>
      )}
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

import { Form } from "react-router";

const SearchBar = () => {
  return (
    <Form className="mt-16 w-[500px] h-[40px] rounded-full border-2 border-grey flex flex-row justify-between px-8 items-center">
      <input
        className="focus:outline-none font-montserrat text-lg"
        type="text"
        name="search"
        id="search"
        placeholder="bamboo fabrics"
      />
      <button>Search</button>
    </Form>
  );
};

export default SearchBar;

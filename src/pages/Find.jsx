import { useLoaderData } from "react-router";
// import { feature1 } from "../assets/images";
// import { needs } from "../assets/vectors";
import FilterMenu from "../components/FilterMenu";
import FinderPage from "../components/FinderPage";
import { useTextiles } from "../store/store";
import { fetchTextiles } from "../utils/firebaseServices";
import { filterCards } from "../utils/filterUtils";

const Find = () => {
  const data = useLoaderData();
  const selectedProperties = useTextiles((state) => state.selectedProperties);
  const filteredData = filterCards();

  return (
    <div className="flex flex-col min-h-screen mt-24 md:mt-32 px-4 md:px-6 lg:px-8">
      <header className="flex flex-col items-center mb-4 md:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold leading-normal text-center">
          Find
          <span className="text-accent"> Sustainable </span>
          Fabrics Tailored to your
          <span className="text-primary"> Needs</span>
        </h1>
      </header>

      <main className="flex flex-col md:flex-row w-full gap-4">
        <FilterMenu />
        <FinderPage
          textiles={selectedProperties.length === 0 ? data : filteredData}
        />
      </main>
    </div>
  );
};

export default Find;

export async function loader() {
  try {
    const textiles = await fetchTextiles();
    useTextiles.getState().updateTextiles(textiles);
    return useTextiles.getState().getTextiles();
  } catch (error) {
    console.log("failed to fetch textiles :", error);
    return [];
  }
}

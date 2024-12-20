import { useLoaderData } from "react-router";
// import { feature1 } from "../assets/images";
// import { needs } from "../assets/vectors";
import FilterMenu from "../components/FilterMenu";
import FinderPage from "../components/FinderPage";
import { useTextiles } from "../store/store";
import { fetchTextiles } from "../utils/firebaseServices";
import { filterCards } from "../utils/filterUtils";
import Navbar from "../components/Navbar";

const Find = () => {
  const data = useLoaderData();
  //filter func for filterMenu props
  const selectedProperties = useTextiles((state) => state.selectedProperties);
  const filteredData = filterCards();
  // make the header smaller in responsive
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen mt-24">
        <header className=" flex flex-row justify-center items-center relative">
          {/* <div className="w-[200px] h-[150px] bg-accent rounded-xl mr-24 max-sm:mr-16 flex flex-row justify-center items-center">
          <img src={feature1} alt="search" width={115} height={115} />
        </div> */}
          <h1 className="text-4xl font-montserrat font-bold  leading-normal">
            Find
            <span className="text-accent"> Sustainable </span>
            Fabrics Tailored to your
            <span className="text-primary"> Needs</span>
          </h1>
          {/* <img
          src={needs}
          alt="vector"
          className="absolute -bottom-3 -z-1 right-[450px] opacity-70 "
          width={143.5}
          height={24}
        /> */}
        </header>
        <main className="flex flex-row  items-center w-full self-start">
          <FilterMenu />
          <FinderPage
            textiles={selectedProperties.length === 0 ? data : filteredData}
          />
        </main>
      </div>
    </>
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

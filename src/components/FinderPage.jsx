import FabricCard from "./FabricCard";
import SearchBar from "./SearchBar";

const FinderPage = ({ textiles }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <SearchBar />
      <div className=" mt-8 p-4 w-full min-h-screen gap-2 flex-wrap flex justify-center items-center">
        {textiles.map((textile) => (
          <FabricCard key={textile.id} textile={textile} />
        ))}
      </div>
    </div>
  );
};

export default FinderPage;

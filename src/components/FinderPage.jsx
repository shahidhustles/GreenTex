import { sorry } from "../assets/vectors";
import FabricCard from "./FabricCard";
import SearchBar from "./SearchBar";

const FinderPage = ({ textiles }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <SearchBar />
      {textiles.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <p className="font-montserrat text-2xl font-semibold mt-16">No such Textile available currently.</p>
          <img src={sorry} alt="" width={200} />
          
        </div>
      )}
      <div className=" mt-8 p-4 w-full min-h-screen gap-6 flex-wrap flex justify-center items-center">
        {textiles.map((textile) => (
          <FabricCard key={textile.id} textile={textile} />
        ))}
      </div>
    </div>
  );
};

export default FinderPage;

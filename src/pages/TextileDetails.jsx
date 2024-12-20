import { useLoaderData, useNavigate } from "react-router";
import { fetchTextileById } from "../utils/firebaseServices";

const TextileDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="relative h-64 w-full">
          <img
            src={data.image || "https://placeholder.com/800x400?text=Textile+Image"}
            alt={data.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 p-6">
            <h1 className="text-3xl font-bold text-white">{data.name}</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg">{data.description}</p>
          </div>

          {/* Brands Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Brands Using This Material</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.brandsPlaces.map((brand) => (
                <div key={brand} className="flex flex-col items-center p-4 border rounded-lg">
                  <img
                    src={`https://placeholder.com/100x50?text=${brand}`}
                    alt={brand}
                    className="h-12 object-contain mb-2"
                  />
                  <span className="text-sm text-gray-600">{brand}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Certifications</h2>
            <div className="flex flex-wrap gap-3">
              {data.ecolabels.map((label) => (
                <span key={label} className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Properties */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Properties</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {data.properties.map((prop) => (
                <div key={prop} className="p-3 bg-gray-50 rounded-lg text-center">
                  {prop}
                </div>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Products Made From This Material</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {data.usedToMake.map((product) => (
                <div key={product} className="flex flex-col items-center">
                  <img
                    src={`https://placeholder.com/200x200?text=${product}`}
                    alt={product}
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                  <span className="text-sm text-gray-600">{product}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            className="w-full md:w-auto  px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextileDetails;

export async function loader({ params }) {
  const textileId = params.textileId;

  try {
    return await fetchTextileById(textileId);
  } catch (error) {
    console.log(error);
  }
}

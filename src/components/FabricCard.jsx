const FabricCard = ({ textile }) => {
  return (
    <div className="min-w-50 max-w-80  p-2 cursor-pointer font-sans bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img 
        className="h-40 w-full object-cover rounded-xl" 
        src={textile.imageUrl || "https://placehold.co/320x160"} 
        alt={textile.name || "Fabric image"} 
      />
      <div className="p-2">
        <h2 className="font-bold text-lg mb-2 ">{textile.name}</h2>

        <p className="text-sm text-gray-600">{textile.description}</p>
      </div>

      <div className="m-2">
        <p className="font-lato text-slate-400">Alternative to : <span className="font-semibold text-grey">{textile.alternativeTo}</span> </p> 
        
      </div>
    </div>
  );
};

export default FabricCard;

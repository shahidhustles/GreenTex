const StatsCard = ({ number, title }) => {
  return (
    <div className="w-[150px] h-[120px] mr-12 shadow-accent shadow-md rounded-xl flex flex-col p-2 justify-center items-center">
      <p className="font-montserrat text-4xl font-bold">{number}</p>
      <p className="font-montserrat text-base ">{title}</p>
    </div>
  );
};

export default StatsCard;

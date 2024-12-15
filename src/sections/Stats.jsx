import StatsCard from "../components/StatsCard";
import { stats } from "../data/constants";

const Stats = () => {
  return (
    <div>
      <h2 className="font-montserrat font-bold text-4xl text-center pb-12">
        Driving Change, One Textile at a Time
      </h2>
      <div className="flex flex-row justify-center items-center  mx-8 mb-36">
        {stats.map((stat) => (
          <StatsCard
            key={stat.number}
            number={stat.number}
            title={stat.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;

import { bigLeaf2 } from "../assets/vectors";
import StatsCard from "../components/StatsCard";
import { stats } from "../data/constants";

const Stats = () => {
  return (
    <div className="relative px-4">
      <img src={bigLeaf2} alt="" className="absolute top-16 z-0" />
      <h2 className="font-montserrat font-bold text-4xl text-center pb-12 relative z-10">
        Driving Change, One Textile at a Time
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-36 place-items-center relative z-10">
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

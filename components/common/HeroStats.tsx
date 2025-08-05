import React from "react";
import { HERO_STATS } from "@/constants";

const HeroStats = () => {
  return (
    <div className="flex gap-2 md:hidden">
      {HERO_STATS.map((stat) => (
        <div
          className="border-r-2 last:border-r-0"
          style={{ marginLeft: "8px" }}
          key={stat.description}
        >
          <h3 className="font-extrabold text-xl">{stat.amountOfUsers}</h3>
          <p>{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;

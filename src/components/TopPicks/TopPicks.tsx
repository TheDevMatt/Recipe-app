import React from "react";
import { topPicks } from "../Data/Data";
import { handleMouseAction } from "../ActionMethods/ActionMethods";
import "../../styles/TopPicks.scss";

const TopPicks: React.FC = () => {
  return (
    <div className="top-picks">
      <h2>Top Picks</h2>
      <p>
        These meals are a carefully crafted assortment of dishes that represent
        our signature flavors and creativity.
      </p>
      <div className="top-picks-items">
        {topPicks.map((item) => (
          <div
            key={item.id}
            id={`meal-item-${item.id}`}
            className="meal-item"
            onMouseEnter={() => handleMouseAction(item.id, "enter")}
            onMouseLeave={() => handleMouseAction(item.id, "leave")}
          >
            <img className="top-picks-image" src={item.img} alt={item.title} />
            <p className="meal-name-tooltip">
              {item.title}
              <span>{item.price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;

import React from "react";
import { categories } from "../Data/Data";
import "../../styles/Categories.scss";

const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <p>Take a look at the categories of meals our restaurant is serving.</p>
      <div className="categories">
        {categories.map((item) => (
          <div>
            <img src={item.img} className="categories-image" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

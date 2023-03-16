import React from "react";
import "./category-item.styles.scss";

const CategoryItem = (props) => {
  const { id, title, icon, img } = props.data;

  return (
    <div>
      <div
        key={id}
        style={{ backgroundImage: `url(${img})` }}
        className="single-category"
      ></div>
      <h4 className="category-title">{title}</h4>
    </div>
  );
};

export default CategoryItem;

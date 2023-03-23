import React from "react";
import "./category-item.styles.scss";

const CategoryItem = (props) => {
  const { id, title, img } = props.data;

  return (
    <div className="d">
      <div
        key={id}
        style={{ backgroundImage: `url(${img})` }}
        className="single_category"
      ></div>
      <h4 className="category_title">{title}</h4>
    </div>
  );
};

export default CategoryItem;

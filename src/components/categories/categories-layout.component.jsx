import React from "react";
import "./categories-layout.styles.scss";
import CategoryItem from "./category-item/category-item.compoment";
import Title from "../title/title.component";
import { categories } from "../../assets/data";

const CategoriesLayout = (props) => {
  return (
    <div className="categories_container">
      <Title showDecoration={true} align="center" text="קטגוריות"></Title>
      <div className="categories_items_container">
        {categories.map((category) => {
          return (
            <CategoryItem key={category.id} data={category}></CategoryItem>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesLayout;

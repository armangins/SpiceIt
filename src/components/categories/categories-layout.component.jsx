import React from "react";
import "./categories-layout.styles.scss";
import CategoryItem from "./category-item/category-item.compoment";
import Title from "../title/title.component";
import { categories } from "../../assets/data";

const CategoriesLayout = () => {
  return (
    <div className="categories_container">
      <Title showDecoration={true} align="center" text="קטגוריות" />
      <div className="categories_items_container">
        {/* iterate  through  the categories */}
        {categories.map((category) => {
          return <CategoryItem key={category.id} data={category} />;
        })}
      </div>
    </div>
  );
};

export default CategoriesLayout;

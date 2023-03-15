import React from "react";
import "./categories-layout.styles.scss";
import CategoryItem from "./category-item/category-item.compoment";
import Title from "../title/title.component";
import { categories } from "../../assets/data";

const CategoriesLayout = (props) => {
  return (
    <div className="categories-container">
      <div className="">
        <Title showDecoration={true} align="center" text="קטגוריות"></Title>
        <h3 className="small-title">
          מבחר תבלינים לכל הצרכים במצעים מיוחדים מחליתות תה ועד לתיבלון בשרים
          ועוד{" "}
        </h3>
      </div>
      <div className="categories-items-container">
        {categories.map((category) => {
          return (
            <CategoryItem
              key={category.id}
              size="30%"
              data={category}
            ></CategoryItem>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesLayout;

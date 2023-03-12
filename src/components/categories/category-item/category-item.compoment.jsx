import React from "react";
import "./category-item.styles.scss"

const CategoryItem = (props) => {
    const { id, title, icon, img, } = props.data;
    
    return (
       
            <div key={id} style={{ backgroundImage: `url(${img})`,}} className="single-category">
                <div className="category-title-box">
                    <h4 className="category-title">
                        {title}
                    </h4>
                    <img style={{ width: '30px' }} src={icon} alt="" />
                </div>
            </div>
        
    )
}

export default CategoryItem;
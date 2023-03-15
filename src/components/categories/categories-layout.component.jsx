import React from "react";
import "./categories-layout.styles.scss"
import Tea from '../../assets/tea.png';
import Mix from '../../assets/mixture.png';
import Healing from '../../assets/healing.png';
import Herbs from '../../assets/herbs.png';
import Meat from '../../assets/meat.png';
import HerbIcon from '../../icons/healing-herb.png'
import FoodIcon from '../../icons/food.png';
import TeaIcon from '../../icons/tea.png';
import SpiceIcon from '../../icons/spices.png';
import MixtureIcon from '../../icons/saltpeper.png';
import CategoryItem from "./category-item/category-item.compoment";



const CategoriesLayout = (props) => {


    const categories =
        [
            {
                id: 1,
                title: 'צמחי מרפא',
                img: Healing,
                icon: HerbIcon,

            },
            {
                id: 2,
                title: 'חליטות תה',
                img: Tea,
                icon: TeaIcon,

            },
            {
                id: 3,
                title: 'תערובות גורמה',
                img: Mix,
                icon: MixtureIcon
            },
            {
                id: 4,
                title: 'עשבי תיבול',
                img: Herbs,
                icon: SpiceIcon,


            },
            {
                id: 5,
                title: 'תערובות לבשר ודגים',
                img: Meat,
                icon: FoodIcon,

            },
        ];

    return (
        <div>
            <div className="">
                <h2 className="section-title">
                    <span>
                        חנות התבלינים שלנו
                    </span>
                </h2>
                <h3 className="small-title">   מבחר תבלינים לכל הצרכים במצעים מיוחדים מחליתות תה ועד לתיבלון בשרים ועוד    </h3>
            </div>
            <div className="categories-container">
                {categories.map((category) => {
                    return (
                      <CategoryItem key={category.id} size="30%" data={category}></CategoryItem>
                    )
                })}
            </div>
        </div>

    )
}

export default CategoriesLayout
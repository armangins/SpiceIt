import React from "react";
import Slider from "react-slick";
import PepperImage from "../../assets/products/pepper.png";
import "./slider.styles.scss";

import Button from "../button/button.component";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductsSlider = () => {

    var settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoPlay: true,
        centerMode: true,

    };

    const products = [

        {
            title: 'מלח גס',
            description: 'פלפל שחור מובחר לכל הסוגי צרכי התיבול',
            productImage: PepperImage,
        },

        {
            title: 'פריקה אדומה',
            description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
            productImage: PepperImage,
        },

        {
            title: ' כמון',
            description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
            productImage: PepperImage,
        },

        {
            title: 'פלפל שחור',
            description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
            productImage: PepperImage,
        },

        {
            title: 'פלפל שחור',
            description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
            productImage: PepperImage,
        },

        {
            title: 'פלפל שחור',
            description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
            productImage: PepperImage,
        },

        {
            title: 'פלפל שחור',
            description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
            productImage: PepperImage,
        },

    ]
    return (
        <Slider className="slider-container" {...settings}>
            {products.map(({ title, description, productImage }) => {

                return (
                    // <div className="card-container">
                    //     <div className="card">
                    //         <div className="card-img-container">
                    //             <img src={productImage} className="card-img" alt="" />
                    //         </div>
                    //         <div className="card-content">
                    //             <h2>{title}</h2>
                    //             <p>
                    //                 {description}
                    //             </p>
                    //             <Button class="primary-button" text="הוסף לעגלת הקניות"></Button>
                    //         </div>
                    //     </div>
                    // </div>

                    <div class="product-card">
                    <div class="badge">Hot</div>
                    <div class="product-tumb">
                        <img src={productImage} alt="" />
                    </div>
                    <div class="product-details">
                        <span class="product-catagory">Women,bag</span>
                        <h4><a href="">Women leather bag</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                        <div class="product-bottom-details">
                            <div class="product-price"><small>$96.00</small>$230.99</div>
                            <div class="product-links">
                                <a href=""><i class="fa fa-heart"></i></a>
                                <a href=""><i class="fa fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                )
            },)}


        </Slider>
    );
};
export default ProductsSlider;

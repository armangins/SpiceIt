import PepperImage from "./products/pepper.png";
import Tea from "./tea.png";
import Mix from "./mixture.png";
import Healing from "./healing.png";
import Herbs from "./herbs.png";
import Meat from "./meat.png";

import HerbIcon from "../icons/healing-herb.png";
import FoodIcon from "../icons/food.png";
import TeaIcon from "../icons/tea.png";
import SpiceIcon from "../icons/spices.png";
import MixtureIcon from "../icons/saltpeper.png"

export const products = [

    {
        title: 'מלח גס',
        description: 'פלפל שחור מובחר לכל הסוגי צרכי התיבול',
        productImage: PepperImage,
        price:"5.90"
    },

    {
        title: 'פריקה אדומה',
        description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
        productImage: PepperImage,
        price:"7.90"
    },

    {
        title: 'כמון',
        description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
        productImage: PepperImage,
        price:"12.90"
    },
    {
        title: "פפריקה אדומה",
        description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
        productImage: PepperImage,
        price:"9.90"
    },

    {
        title: "גריל עוף",
        description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
        productImage: PepperImage,
        price:"9.90"
    },

    {
        title: "כורכום",
        description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
        productImage: PepperImage,
        price:"9.90"
    },

    {
        title: "קינמון",
        description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
        productImage: PepperImage,
        price:"9.90"
    },

    {
        title: "אורגנו",
        description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
        productImage: PepperImage,
        price:"4.90"
    },


    {
        title: "סומק",
        description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
        productImage: PepperImage,
        price:"9.90"
    },


    {
        title: "מלח לימון",
        description: 'פלפל שחור מובחר לכל הסוגי צרכי הבישול',
        productImage: PepperImage,
        price:"9.90"
    },


];


export const categories = [
    {
      id: 1,
      title: "צמחי מרפא",
      img: Healing,
      icon: HerbIcon,
    },
    {
      id: 2,
      title: "חליטות תה",
      img: Tea,
      icon: TeaIcon,
    },
    {
      id: 3,
      title: "תערובות גורמה",
      img: Mix,
      icon: MixtureIcon,
    },
    {
      id: 4,
      title: "עשבי תיבול",
      img: Herbs,
      icon: SpiceIcon,
    },
    {
      id: 5,
      title: "תערובות לבשר ודגים",
      img: Meat,
      icon: FoodIcon,
    },
  ];

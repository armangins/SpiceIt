import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./carousel.styles.scss";
import { Pagination } from "swiper";
import { products } from "../../assets/data";
import Card from "../card/card.component";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import Title from "../title/title.component";
import { Autoplay, } from "swiper";



const Carousel = () => {
  return (
<div   className="carousel">
  <Title text="מבצעי החודש"/>
<Swiper
      slidesPerView={5}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true} modules={[Navigation,Autoplay,Pagination]}
     
    
    >
      {products.map((product) => {
        return (
          <SwiperSlide>
            <Card product={product} />
          </SwiperSlide>
        );
      })}
    </Swiper>
</div>
  );
};

export default Carousel;

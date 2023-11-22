import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Slider = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src="./t1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./t2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./t3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./t4.jpg" alt="" />
        </SwiperSlide>
      
       
      </Swiper>
    );
}
 
export default Slider;
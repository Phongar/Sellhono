import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./style.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import SwiperImg from"./img/Swiper-img.png";
import SwiperImg2 from "./img/Swiper-img2.jpg";
import SwiperImg3 from "./img/Swiper-img3.jpg";

import SwiperImg4 from "./img/Swiper-img4.jpg";
import SwiperImg5 from "./img/Swiper-img5.jpg";
import SwiperImg6 from "./img/Swiper-img6.png";
import SwiperImg7 from "./img/Swiper-img7.jpg";


export default function App() {
  return (
    <>
      <Swiper
        //cssMode={true}
         navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div className='slide-container'>
            <img src={SwiperImg} alt='swiper__img' />
            <h1 className="slide-title"> About Us </h1>
           </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className='slide-container'>
            <img src={SwiperImg2} alt='swiper__img' />
            <h1 className="slide-title"> About Us </h1>
           </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className='slide-container'>
            <img src={SwiperImg3} alt='swiper__img' />
            <h1 className="slide-title"> About Us </h1>
           </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className='slide-container'>
            <img src={SwiperImg4} alt='swiper__img' />
            <h1 className="slide-title"> About Us </h1>
           </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className='slide-container'>
            <img src={SwiperImg5} alt='swiper__img' />
            <h1 className="slide-title"> About Us </h1>
           </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className='slide-container'>
            <img src={SwiperImg6} alt='swiper__img' />
            <h1 className="slide-title"> About Us </h1>
           </div>
        </SwiperSlide>

        <SwiperSlide>
           <div className='slide-container'>
            <img className='swiper__img' src={SwiperImg7} alt='swiper__img' />
            <h1 className="slide-title"> About Us </h1>
           </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

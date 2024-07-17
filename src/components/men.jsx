import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



const MySwiperComponent = () => {
  const swiperRef = useRef(null);

  const goToSlide = (index) => {
      if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideTo(index);
      }
  };

  return (
      <div>
          <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              navigation
              spaceBetween={50}
              slidesPerView={1}
          >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>

          <button onClick={() => goToSlide(0)}>Go to Slide 1</button>
          <button onClick={() => goToSlide(1)}>Go to Slide 2</button>
          <button onClick={() => goToSlide(2)}>Go to Slide 3</button>
          <button onClick={() => goToSlide(3)}>Go to Slide 4</button>
      </div>
  );
};

export default MySwiperComponent;

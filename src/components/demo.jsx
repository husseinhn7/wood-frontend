import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import { FreeMode, Navigation, Thumbs } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
const Fun = () => {
    const swiper = useSwiper()

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
            modules={[FreeMode, Navigation, Thumbs]}
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={10}
                navigation={true}
                onSwiper={(e)=>console.log(e)}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="Nature 10" />
                </SwiperSlide>
            </Swiper>

            <Swiper
                modules={[Thumbs, Navigation]}
                watchSlidesProgress
                // onSwiper={(s)=>setThumbsSwiper(s)}
                // onSwiper={(e)=>console.log(e)}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                // watchSlidesProgress={true}
                // modules={[ Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="Nature 10" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Fun;

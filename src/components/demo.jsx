import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Dragg from './dragg';
// import { FreeMode, Navigation, Thumbs } from 'swiper/react';
import MySwiperComponent from "./men"
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Lay from './Lay';
const Fun = () => {
    const swiper = useSwiper()

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (<>
         <Lay />
         </>
    )
}

export default Fun;

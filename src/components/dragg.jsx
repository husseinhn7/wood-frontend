import React, {useState, useRef} from 'react'
import bg2 from "../assets/Map_Oak_1_-min.webp"
import useBreakPoints from '../hooks/useBreackPoints';





const Dragg = ({children}) => {
  const [width, setWidth] = useState(300);  
  const dragRef = useRef(null);
  const breakPoint = useBreakPoints()

  const handleMouseDown = (e) => {
  
    const startX = e.clientX;

    const handleMouseMove = (e) => {
      // if ( breakPoint )
      const newWidth = width + (e.clientX - startX);
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    const startX = e.touches[0].clientX;

    const handleTouchMove = (e) => {
      const newWidth = width + (e.touches[0].clientX - startX);
      if ((breakPoint == "sm") && (newWidth < 560)) {
        setWidth(newWidth);
      }
      else if ((breakPoint == "md") && (newWidth < 530)) {
        setWidth(newWidth);
      }
     console.log(breakPoint, newWidth)
    };

    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  return (
    <div className="absolute   flex items-center overflow-visible  " style={{ width: `${width}px` }}>
      <div
        ref={dragRef}
        className="draggable  bg-teal-300 w-4 h-full  overflow-hidden absolute right-0 z-10"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart} 
      >
        </div>

         <div className=' bg-cover   w-[350px] h-[250px]  sm:h-[370px] sm:w-[550px]'  style={{backgroundImage : `url(${bg2})`}}></div>
     </div>
  );
};

export default Dragg

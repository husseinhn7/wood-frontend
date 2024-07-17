import React, {useState, useRef} from 'react'

const Dragg = () => {
  const [width, setWidth] = useState(300); // Initial width of the parent div
  const dragRef = useRef(null);

  const handleMouseDown = (e) => {
    const startX = e.clientX;

    const handleMouseMove = (e) => {
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

  return (
    <div className="resizable-container absolute bg-slate-400 m-20 flex" style={{ width: `${width}px` }}>
      <div
        ref={dragRef}
        className="draggable  bg-teal-300 w-2 h-5 relative   right-0 "
        onMouseDown={handleMouseDown}
        
      >
       </div>
    </div>
  );
};

export default Dragg

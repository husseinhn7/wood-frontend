import React from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const ResizableComponent = () => {
  const handleResize = (event, { element, size, handle }) => {
    console.log('Resized to', size);
  };

  return (
    <div className='w-[40vw]'>
      <h3>Resizable Box</h3>
      <ResizableBox
        width={300}
        height={200}
        minConstraints={[100, 100]}
        maxConstraints={[500, 500]}
        resizeHandles={['e']}
        handleSize={[10, 10]}
        onResize={handleResize}
        style={{width:"100%"}}
      >
        <div style={{ width: '100%', height: '100%', backgroundColor: 'lightgreen', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        
        >
          Resize me
        </div>
      </ResizableBox>
    </div>
  );
};

export default ResizableComponent;

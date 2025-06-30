import React, {  useState } from 'react';
import { FaPlay } from 'react-icons/fa';
const FolwPlayButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  

  const handleMouseMove = (e) => {
     const rect = e.currentTarget.getBoundingClientRect();
     setPosition({
       x: e.clientX - rect.left,
       y: e.clientY - rect.top,
     });
   }
  return (
   <>
    <div className='w-20 h-20  flex items-center justify-center rounded-full '
     onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
    <div
      className="w-12 h-12 bg-white rounded-full shadow relative flex items-center justify-center group cursor-none hover:bg-blue-800"
    >   
      <FaPlay  
      className="text-blue-600 group-hover:text-white text-lg " />
      {isHovering && (
        <div
          className="absolute w-20 h-20 bg-black/70 rounded-full pointer-events-none z-0 transition-all duration-500 flex items-center justify-center" 
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.05s linear',
          }}
        >Play</div>
      )}
    </div>
 
    </div>
   </>
  );
};

export default FolwPlayButton;

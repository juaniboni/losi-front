import React, { useState } from 'react';
import './Parallax.css'; 
import parallaxImage from '/public/picture3.webp';

const Parallax = () => {
  const [isColored, setIsColored] = useState(false);

  const toggleColor = () => {
    setIsColored(!isColored);
  };

  return (
    <div className="container">
      <div
        className={`parallax ${isColored ? '' : 'grayscale'}`} // Invertimos las clases
        onMouseEnter={toggleColor}
        onMouseLeave={toggleColor}
        style={{ backgroundImage: `url(${parallaxImage})` }}
      >
        <div className="left"></div>
      </div>
    </div>
  );
};

export default Parallax;

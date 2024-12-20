import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faDog } from '@fortawesome/free-solid-svg-icons';
import './ImageSlider.css';
import { useNavigate } from 'react-router-dom';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      <div className="slider-buttons">
        <button
          onClick={() => navigate('/ProductsCat', { state: { category: 'cat' } })}
          className="slider-button"
        >
          <FontAwesomeIcon icon={faCat} /> produits chat 
        </button>
        <button
          onClick={() => navigate('/ProductsDog', { state: { category: 'dog' } })}
          className="slider-button"
        >
          <FontAwesomeIcon icon={faDog} /> produits chien
        </button>
      </div>
      <div
        className="slider-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 1s ease',
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={`/imgPRO/${image.img}`}
            alt={`Slide ${index}`}
            className="slider-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

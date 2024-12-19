import React from 'react';
import './AwarenessSection.css';
import dogImage from './pexels-jenna-hamra-248942-29693515.jpg'; // Make sure the image file is in the correct location

function AwarenessSection() {
  const paragraphText = `
    Animal welfare is a vital aspect of ensuring that all animals live healthy, safe, and happy lives.
                           It involves providing proper care, nutrition,                   and shelter, as well as protecting animals from cruelty
    and exploitation. Supporting animal welfare means advocating for ethical treatment,    promoting adoption
    over buying from breeders,                              and ensuring animals are treated with respect and dignity. By raising awareness,
              we can create a better world for our pets and wildlife alike.                 Join us in supporting animal welfare and making
    a positive impact on the lives of animals everywhere.
  `;

  return (
    <section className="awareness-section d-flex justify-content-center align-items-center py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image on the left */}
          <div className="col-lg-6 text-center">
            <img
              src={dogImage}
              alt="Cute dog"
              className="img-fluid rounded shadow"
              style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
          {/* Text on the right */}
          <div className="col-lg-6">
            <h2 className="animated-heading">Animal Welfare Awareness</h2>
            <p className="styled-paragraph">
  {paragraphText.split('').map((char, index) => (
    <span
      key={index}
      style={{
        animationDelay: `${index * 0.05}s`,
      }}
      className="falling-letter"
    >
      {char === ' ' ? '\u00A0' : char} {/* Add non-breaking space */}
    </span>
  ))}
</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwarenessSection;

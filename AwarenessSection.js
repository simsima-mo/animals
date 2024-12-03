import React from 'react';
import './App.css';

function AwarenessSection() {
  return (
    <section id="awareness" className="awareness-section ">
      <div className="awareness-content">
        {/* GIF on the left */}
        <video 
          src={"./imgPRO/petcare.mp4"} 
          className="awareness-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        ></video>

        {/* Paragraph about animal welfare on the right */}
        <div className="awareness-text">
          <h2>Animal Welfare Awareness</h2>
          <p>
          Animal welfare is a vital aspect of ensuring that all animals live healthy, safe, and happy lives. It involves providing proper care, nutrition, and shelter, as well as protecting animals from cruelty and exploitation. Supporting animal welfare means advocating for ethical treatment, promoting adoption over buying from breeders, and ensuring animals are treated with respect and dignity. By raising awareness, we can create a better world for our pets and wildlife alike. Join us in supporting animal welfare and making a positive impact on the lives of animals everywhere
          </p>
        </div>
      </div>
    </section>
  );
}

export default AwarenessSection;
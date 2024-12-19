import React from 'react';
import './bootstrap/css/bootstrap.min.css';

function Carousel() {
  return (
    <div id="animalCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="src/components/projet/images/logopet.jpg" className="d-block w-100" alt="Cats and Dogs" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Find the Best Products for Your Pets</h5>
            <a href="#cats" className="btn btn-primary">Cat Products</a>
            <a href="#dogs" className="btn btn-secondary">Dog Products</a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
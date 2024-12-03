import React from 'react';
import ImageSlider from './ImageSlider/ImageSlider';
import Categories from './Categories';
import AwarenessSection from './AwarenessSection';

function Home() {
  const images = [
    { img: 'cat1.jpg' },
    { img: 'cat2.jpg' },
    { img: 'dogcatswite.jpg'},
  ];

  return (
    <div>
      <ImageSlider images={images} />
      <Categories />
      <AwarenessSection />
    </div>
  );
}

export default Home;

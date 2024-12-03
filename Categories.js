import React from 'react';
import './bootstrap/css/bootstrap.min.css';


function Categories() {
  const categories = [
    { img: 'food.jpg', label: 'Healthy food for cats and dogs is essential for their overall well-being and longevity. It should include high-quality protein sources, such as chicken, beef, or fish, to support muscle development and energy. Healthy fats, like omega-3 and omega-6 fatty acids, promote a shiny coat and support joint health. Essential vitamins and minerals, including vitamin A, vitamin E, and calcium, help maintain a strong immune system and healthy bones. A balanced diet also includes fiber for digestion and hydration to keep pets healthy and active' },
    { img: 'cleaning.jpg', label: 'Keeping your pets clean and comfortable is easy with our range of cleaning products, specially designed for cats and dogs. Our shampoos, wipes, and grooming sprays are formulated to be gentle on your pet’s skin while effectively removing dirt, odors, and allergens. With ingredients like aloe vera and chamomile, they leave your pet’s coat soft, shiny, and fresh. Regular use of these products not only enhances your pet’s appearance but also promotes healthy skin and a pleasant, clean scent. Shop now to provide your pets with the care they deserve!' },
    { img: 'toys.jpg', label: 'Our wide selection of accessories and toys ensures your pets enjoy both comfort and fun. From stylish collars and harnesses to cozy beds and blankets, our products cater to your pet’s needs and personality. Enhance playtime with interactive toys that stimulate your pet s mind, improve their agility, and keep them active. Whether it s a durable chew toy for your dog or a feather wand for your cat, our collection is designed to engage and entertain. Explore our offerings and give your pet the best in both comfort and play!' },
  ];

  const getImage = (imageName) => {
    return process.env.PUBLIC_URL + '/imgPRO/' + imageName;
  };

  return (
    <section id="categories" className="text-center ">
      <h2 className="mb-4">Our Products</h2>
      <div className="container">
        <div className="row justify-content-center">
          {categories.map((category, index) => (
            <div className="col-lg-4 col-md-12 col-sm-6 mb-4" key={index}>
              <div className="category-item p-6">
                <img
                  src={getImage(category.img)}
                  alt={category.label}
                  className="rounded-circle img-fluid mb-3 category-image"
                />
                <p className="category-label">{category.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
import React from 'react';
import './bootstrap/css/bootstrap.min.css';

function Categories() {
  const categories = [
    {
      img: 'Alimentation.jpg',
      title: 'High-Quality Food',
      description:
        'We offer a range of balanced and nutritious food tailored to the specific needs of cats and dogs. Rich in essential nutrients, our selection helps maintain their energy, immune system, and overall health. Quality nutrition is the foundation of a long and healthy life.',
    },
    {
      img: 'les joux.jpg',
      title: 'Care Products',
      description:
        'Take care of your pets with our specially designed products for their hygiene and well-being. From gentle shampoos to effective brushes, our care items help preserve the beauty of their coat and their health. Regular care routines enhance their comfort and quality of life.',
    },
    {
      img: 'acces.jpg',
      title: 'Accessories for Cats and Dogs',
      description:
        'Our accessories provide comfort and entertainment for your pets. From cozy beds and stimulating toys to stylish collars, each product is designed to meet their needs. They promote an active and joyful life while strengthening your bond with your furry companions.',
    },
  ];

  const getImage = (imageName) => {
    return process.env.PUBLIC_URL + '/imgPRO/' + imageName;
  };

  return (
    <section
      id="categories"
      className="text-center py-5"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="container">
        {/* Updated "Our Products" Heading */}
        <h2
          className="mb-5"
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#ffc0cb', // Updated to pink
            letterSpacing: '1px',
          }}
        >
          Our Products
        </h2>
        <div className="row justify-content-center">
          {categories.map((category, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div
                className="category-item p-4 shadow rounded"
                style={{
                  backgroundColor: '#f8f9fa',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.05)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <img
                  src={getImage(category.img)}
                  alt={category.title}
                  className="rounded-circle img-fluid mb-3"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h4
                  className="mb-3"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#ffc0cb', // Updated to pink
                  }}
                >
                  {category.title}
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#555',
                    lineHeight: '1.8',
                    textAlign: 'justify',
                  }}
                >
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;

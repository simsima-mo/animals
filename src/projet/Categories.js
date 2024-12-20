import React from 'react';
import './bootstrap/css/bootstrap.min.css';

function Categories() {
  const categories = [
    {
      img: 'Alimentation.jpg',
      title: 'High-Quality Food',
      description:
        'Nous proposons une gamme d/aliments équilibrés et nutritifs adaptés aux besoins spécifiques des chats et des chiens. Riche en nutriments essentiels, notre sélection contribue à maintenir leur énergie, leur système immunitaire et leur santé générale. Une nutrition de qualité est la base d/une vie longue et saine.',
    },
    {
      img: 'les joux.jpg',
      title: 'Care Products',
      description:
        'Prenez soin de vos animaux de compagnie avec nos produits spécialement conçus pour leur hygiène et leur bien-être. Du shampoing doux à la brosse efficace, nos articles de soins contribuent à préserver la beauté de leur pelage et leur santé. Des routines de soins régulières améliorent leur confort et leur qualité de vie.',
    },
    {
      img: 'acces.jpg',
      title: 'Accessories',
      description:
        'Nos accessoires offrent confort et divertissement à vos animaux de compagnie. Des lits douillets aux jouets stimulants en passant par les colliers élégants, chaque produit est conçu pour répondre à leurs besoins. Ils favorisent une vie active et joyeuse tout en renforçant votre lien avec vos compagnons à quatre pattes.',
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
            color: 'purple', // Updated to pink
            letterSpacing: '1px',
          }}
        >
          Nos Produits
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

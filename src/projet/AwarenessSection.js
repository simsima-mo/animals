import React from 'react';
import './AwarenessSection.css';
import dogImage from './pexels-jenna-hamra-248942-29693515.jpg'; // Make sure the image file is in the correct location

function AwarenessSection() {
  const paragraphText = `
    Le bien-être animal est un aspect essentiel pour garantir que tous les animaux vivent une vie saine, sûre et heureuse.
                           Il s’agit de fournir des soins et une nutrition appropriés,                   et un abri, ainsi que la protection des animaux contre la cruauté et l'exploitation. Soutenir le bien-être animal signifie défendre un traitement éthique,    promouvoir l'adoption
plutôt que l'achat auprès des éleveurs,                              and s'assurer que les animaux sont treLe bien-être animal est un aspect essentiel pour garantir que tous les animaux vivent une vie saine, sûre et heureuse dans le respect et la dignité. En sensibilisant,
              nous pouvons créer un monde meilleur pour nos animaux de compagnie et la faune.                 Rejoignez-nous pour soutenir le bien-être animal et faire
    un impact positif sur la vie des animaux partout dans le monde.
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
            <h2 className="animated-heading">Sensibilisation au bien-être animal</h2>
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

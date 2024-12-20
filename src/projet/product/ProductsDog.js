import React, { useState } from "react";
import './Style.css';
import { useNavigate } from "react-router-dom";
// Product images
const collierImage = "/assets/collier_reflechissant_chien.jpg";
const fontaineImage = "/assets/fontaine_eau_chien.jpg";
const panierDeluxe = "/assets/panier_deluxe_chien.jpg";
const sacTransportImage = "/assets/sac_transport_chien.jpg";
const distributeurCroquettes = "/assets/distributeur_croquettes_chien.jpg";
const harnaisImage = "/assets/harnais_chien.jpg";

const balleResistante = "/assets/balle_resistante_chien.jpg";
const cordeNoeuds = "/assets/corde_noeuds_chien.jpg";
const balleDistributeurImage = "/assets/jouet_distributeur_chien.jpg";
const tunnelImage = "/assets/tunnel_agilite_chien.jpg";
const anneauCaoutchouc = "/assets/anneau_caoutchouc_chien.jpg";
const frisbeeSouple = "/assets/frisbee_souple_chien.jpg";

const shampooingImage = "/assets/shampooing_antiparasitaire_chien.jpg";
const sprayImage = "/assets/spray_calmant_chien.jpg";
const lingettesImage = "/assets/lingettes_chien.jpg";
const brosseDemelante = "/assets/brosse_demelante_chien.jpg";
const coupeGriffesImage = "/assets/coupe_griffes_chien.jpg";
const vitaminesImage = "/assets/complements_chien.jpg";

const croquettesImage = "/assets/croquettes_senior_chien.jpg";
const pateImage = "/assets/patee_boeuf_chien.jpg";
const friandisesImage = "/assets/friandises_dentaires_chien.jpg";
const barresPoulet = "/assets/barres_poulet_chien.jpg";
const croquettesJuniorImage = "/assets/croquettes_junior_chien.jpg";
const packPatees = "/assets/pack_patees_variees_chien.jpg";
const ProductsDog = ({ cart, setCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product for details view
  const navigate = useNavigate()

  // Product list
  const products = [
    { id: 1, name: "collier réfléchissant chien", category: "Accessoires", price: "15.99dh", description: "Un collier ajustable conçu pour la sécurité de votre chien, doté d'une bande réfléchissante pour une visibilité accrue.", image: collierImage },
    { id: 2, name: "fontaine eau chien", category: "Accessoires", price: "39.99dh", description: "Fontaine automatique qui fournit une eau fraîche et propre en continu pour votre chien.", image: fontaineImage },
    { id: 3, name: "panier deluxe chien", category: "Accessoires", price: "119.99dh", description: "Panier spacieux et confortable offrant un espace de repos luxueux pour votre chien.", image: panierDeluxe },
    { id: 4, name: "sac de transport chien", category: "Accessoires", price: "34.99dh", description: "Un sac ergonomique et pratique pour transporter votre chien en toute sécurité lors de vos déplacements.", image: sacTransportImage },
    { id: 5, name: "distributeur croquettes chien", category: "Accessoires", price: "199.99dh", description: "Appareil innovant pour distribuer automatiquement des croquettes à votre chien, parfait pour les journées chargées.", image: distributeurCroquettes },
    { id: 6, name: "Harnais pour chien", category: "Accessoires", price: "17.99dh", description: "Harnais réglable et confortable avec une laisse assortie, idéal pour les promenades sécurisées.", image: harnaisImage },
    { id: 7, name: "balle résistante de chien", category: "Jeux", price: "25.99dh", description: "Jouet en forme de balle conçu pour résister aux mâchoires puissantes de votre chien.", image: balleResistante },
    { id: 8, name: "corde nœuds pour chien", category: "Jeux", price: "7.99dh", description: "Jouet en corde avec des nœuds robustes pour permettre à votre chien de mâchouiller et s’amuser.", image: cordeNoeuds },
    { id: 9, name: "Balle Distributeur de Nourriture pour chien", category: "Jeux", price: "14.99dh", description: "Une balle interactive qui distribue des friandises pour stimuler mentalement votre chien.", image: balleDistributeurImage },
    { id: 10, name: "tunnel agilité chien", category: "Jeux", price: "29.99dh", description: "Un tunnel conçu pour les exercices d’agilité et les jeux interactifs avec votre chien.", image: tunnelImage },
    { id: 11, name: "anneau caoutchouc chien", category: "Jeux", price: "12.99dh", description: "Jouet en caoutchouc durable idéal pour les jeux de lancer et d’attraper.", image: anneauCaoutchouc },
    { id: 12, name: "frisbee souple chien", category: "Jeux", price: "18.99dh", description: "Frisbee flexible et léger, parfait pour les séances de jeu en plein air.", image: frisbeeSouple },
    { id: 13, name: "shampooing antiparasitaire chien", category: "Soins", price: "13.99dh", description: "Shampooing conçu pour éliminer les parasites et protéger le pelage de votre chien.", image: shampooingImage },
    { id: 14, name: "spray calmant chien", category: "Soins", price: "19.99dh", description: "Spray apaisant à base de phéromones pour réduire le stress et favoriser la relaxation chez votre chien.", image: sprayImage },
    { id: 15, name: "lingettes chien", category: "Soins", price: "8.99dh", description: "Lingettes douces et pratiques pour nettoyer rapidement et efficacement le pelage de votre chien.", image: lingettesImage },
    { id: 16, name: "brosse démêlante chien", category: "Soins", price: "10.99dh", description: "Brosse ergonomique pour démêler les poils et maintenir un pelage soyeux.", image: brosseDemelante },
    { id: 17, name: "Coupe Griffes", category: "Soins", price: "6.99dh", description: "Outil de coupe précis avec système de sécurité pour raccourcir les griffes de votre chien en toute sécurité.", image: coupeGriffesImage },
    { id: 18, name: "compléments chien", category: "Soins", price: "14.99dh", description: "Suppléments alimentaires spécialement formulés pour améliorer la santé et la vitalité de votre chien.", image: vitaminesImage },
    { id: 19, name: "croquettes senior chien", category: "Nourriture", price: "29.99dh", description: "Nourriture sèche adaptée aux besoins nutritionnels des chiens âgés.", image: croquettesImage },
    { id: 20, name: "pâtée bœuf chien", category: "Nourriture", price: "2.99dh", description: "Délicieuse pâtée au bœuf, parfaite pour offrir un repas équilibré et savoureux à votre chien.", image: pateImage },
    { id: 21, name: "friandises dentaires chien", category: "Nourriture", price: "6.49dh", description: "Friandises conçues pour nettoyer les dents et rafraîchir l’haleine de votre chien tout en le régalant.", image: friandisesImage },
    { id: 22, name: "barres poulet chien", category: "Nourriture", price: "3.49dh", description: "Snacks à base de poulet, parfaits comme récompenses ou encas sains pour votre chien.", image: barresPoulet },
    { id: 23, name: "croquettes junior chien", category: "Nourriture", price: "22.99dh", description: "Croquettes spécialement formulées pour soutenir la croissance et le développement des chiots.", image: croquettesJuniorImage },
    { id: 24, name: "pack pâtées variées chien", category: "Nourriture", price: "15.99dh", description: "Assortiment de pâtées aux différentes saveurs pour varier les repas de votre chien.", image: packPatees }
];


 // Filter products by search query and selected category
 const filteredProducts = products.filter(
  (product) =>
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategory ? product.category === selectedCategory : true)
);

// Handle category change
const handleCategoryChange = (category) => {
  setSelectedCategory(category);
};

const handleNavigate = () => {
  navigate("/productsCat")
}

// Handle adding product to cart
const handleAddToCart = (product) => {
  const productInCart = cart.find((item) => item.id === product.id);
  let newCart;

  if (productInCart) {
    newCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    newCart = [...cart, { ...product, quantity: 1 }];
  }

  setCart(newCart);
  setNotification(`${product.name} ajouté au panier.`);
  setTimeout(() => setNotification(""), 3000);
};

// Handle product selection for details view
const handleProductClick = (product) => {
  setSelectedProduct(product); // Show the selected product in a detailed view
};

// Handle closing the product detail view
const handleCloseProductDetails = () => {
  setSelectedProduct(null);
};

return (
  <div className="product-page">
    <h2>Nos Produits</h2>
    <input
    className="oms"
      type="text"
      placeholder="Rechercher un produit"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <div>
      <button className="btn" onClick={() => handleCategoryChange("Accessoires")}>Accessoires</button>
      <button  className="btn" onClick={() => handleCategoryChange("Jeux")}>Jeux</button>
      <button className="btn" onClick={() => handleCategoryChange("Soins")}>Soins</button>
      <button className="btn" onClick={() => handleCategoryChange("Nourriture")}>Nourriture</button>
      <button className="btn" onClick={() => setSelectedCategory("")}>Tous</button>
    </div>

    {notification && <div className="notification">{notification}</div>}

    <div className="products-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            onClick={() => handleProductClick(product)} // View product details on click
          />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button className="btn" onClick={() => handleProductClick(product)}>Apprendre Plus</button>
        </div>
      ))}
    </div>

    {selectedProduct && (
      <div className="product-details-card">
        <button className="close-btn" onClick={handleCloseProductDetails}>
          
        </button>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
        <h3>{selectedProduct.name}</h3>
        <p>{selectedProduct.description}</p>
        <p class="price">{selectedProduct.price}</p>
        <button className="btn" onClick={() => handleAddToCart(selectedProduct)}>
          Ajouter au panier
        </button>
      </div>
    )}
    {/* Button for "Produits Chien" */}
    <div className="products-dog-button-container">
        <button 
          className="btn" 
          onClick={handleNavigate} // Exemple d'action
        >
           Produits Chat
        </button>
      </div>
  </div>
);
};

export default ProductsDog;
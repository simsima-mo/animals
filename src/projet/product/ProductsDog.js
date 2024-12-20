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
    { id: 1, name: "Collier Réfléchissant Chat", category: "Accessoires", price: "15.99dh", description: "Collier ajustable et réfléchissant pour la sécurité du chat", image: collierImage },
    { id: 2, name: "Fontaine à Eau", category: "Accessoires", price: "39.99dh", description: "Fontaine à eau automatique pour chats", image: fontaineImage },
    { id: 3, name: "Arbre à Chat Deluxe", category: "Accessoires", price: "119.99dh", description: "Grand arbre à chat avec griffoir et niches", image: panierDeluxe },
    { id: 4, name: "Sac de Transport Chat", category: "Accessoires", price: "34.99dh", description: "Sac de transport confortable pour voyages", image: sacTransportImage },
    { id: 5, name: "Litière Autonettoyante", category: "Accessoires", price: "199.99dh", description: "Litière pour chat autonettoyante", image: distributeurCroquettes },
    { id: 6, name: "Harnais pour Chat", category: "Accessoires", price: "17.99dh", description: "Harnais réglable avec laisse", image: harnaisImage },
    { id: 7, name: "Laser pour Chat", category: "Jeux", price: "25.99dh", description: "Jouet interactif avec laser automatique", image: balleResistante },
    { id: 8, name: "Souris en Peluche", category: "Jeux", price: "7.99dh", description: "Jouet en forme de souris avec catnip", image: cordeNoeuds },
    { id: 9, name: "Balle Distributeur de Nourriture", category: "Jeux", price: "14.99dh", description: "Balle interactive pour distribuer des friandises", image: balleDistributeurImage },
    { id: 10, name: "Tunnel de Jeu XXL", category: "Jeux", price: "29.99dh", description: "Tunnel pour chat avec plusieurs entrées", image: tunnelImage },
    { id: 11, name: "Jouet Suspendu", category: "Jeux", price: "12.99dh", description: "Jouet à suspendre pour stimuler le jeu", image: anneauCaoutchouc },
    { id: 12, name: "Cerceau de Jeu", category: "Jeux", price: "18.99dh", description: "Cerceau d'agilité pour chats", image: frisbeeSouple },
    { id: 13, name: "Shampooing Hydratant Chat", category: "Soins", price: "13.99dh", description: "Shampooing pour poils secs et sensibles", image: shampooingImage },
    { id: 14, name: "Spray Anti-Stress", category: "Soins", price: "19.99dh", description: "Spray aux phéromones pour calmer les chats", image: sprayImage },
    { id: 15, name: "Lingettes Nettoyantes", category: "Soins", price: "8.99dh", description: "Lingettes pour nettoyer le pelage des chats", image: lingettesImage },
    { id: 16, name: "Peigne Anti-Noeuds", category: "Soins", price: "10.99dh", description: "Peigne pour démêler les poils", image: brosseDemelante },
    { id: 17, name: "Coupe-Griffes", category: "Soins", price: "6.99dh", description: "Coupe-griffes avec sécurité", image: coupeGriffesImage },
    { id: 18, name: "Vitamines pour Chat", category: "Soins", price: "14.99dh", description: "Supplément alimentaire pour la santé du chat", image: vitaminesImage },
    { id: 19, name: "Croquettes Hypoallergéniques", category: "Nourriture", price: "29.99dh", description: "Croquettes pour chats sensibles", image: croquettesImage },
    { id: 20, name: "Pâtée au Poulet", category: "Nourriture", price: "2.99dh", description: "Pâtée pour chat goût poulet", image: pateImage },
    { id: 21, name: "Friandises au Thon", category: "Nourriture", price: "6.49dh", description: "Friandises pour chat riches en protéines", image: friandisesImage },
    { id: 22, name: "Mousse de Saumon", category: "Nourriture", price: "3.49dh", description: "Nourriture humide pour chat au saumon", image: barresPoulet },
    { id: 23, name: "Croquettes Junior", category: "Nourriture", price: "22.99dh", description: "Croquettes pour chatons en croissance", image: croquettesJuniorImage },
    { id: 24, name: "Mix de Saveurs", category: "Nourriture", price: "15.99dh", description: "Assortiment de pâtées pour chat", image: packPatees },
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
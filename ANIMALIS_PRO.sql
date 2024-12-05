create database ANIMALIS;
DROP database  ANIMALIS ;
use ANIMALIS;
CREATE TABLE utilisateurs (
    utilisateur_id INT PRIMARY KEY AUTO_INCREMENT,  
    nom_utilisateur VARCHAR(255) NOT NULL UNIQUE,  
    email VARCHAR(255) NOT NULL UNIQUE,           
    mot_de_passe VARCHAR(255) NOT NULL,             
    role ENUM('client', 'admin') DEFAULT 'client',  
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,    
    date_mise_jour TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  
);

CREATE TABLE produits (
   produit_id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    prix DECIMAL(10, 2) NOT NULL,
    quantite INT NOT NULL,
    categorie_id INT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_mise_jour TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (categorie_id) REFERENCES categorie(categorie_id)
);
CREATE TABLE categorie (
    categorie_id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    description TEXT
);
SHOW CREATE TABLE produits;
CREATE TABLE promotions (
    promotion_id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    type_reduction ENUM('percentage', 'fixed') NOT NULL,
    date_promtion DATE NOT NULL,
    date_fin_promotiona  DATE NOT NULL,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
CREATE TABLE avis (
    avis_id INT PRIMARY KEY AUTO_INCREMENT,
	avis_utilisateur_id INT,
    produit_id INT,
    note_avis INT CHECK(rating >= 1 AND rating <= 5),
    comment TEXT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (produit_id) REFERENCES produits(produit_id)
);
CREATE TABLE imageschat (
    image_id INT PRIMARY KEY AUTO_INCREMENT,
    produit_id INT,
    url VARCHAR(255) NOT NULL,
    alt_text VARCHAR(255),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (produit_id) REFERENCES produits(produit_id)
);
CREATE TABLE imageschien (
    image_id INT PRIMARY KEY AUTO_INCREMENT,
    produit_id INT,
    url VARCHAR(255) NOT NULL,
    alt_text VARCHAR(255),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (produit_id) REFERENCES produits(produit_id)
);
CREATE TABLE commandes (
    commande_id INT PRIMARY KEY AUTO_INCREMENT,
    utilisateur_id INT,
    prix_total DECIMAL(10, 2) NOT NULL,
    statut ENUM('en attente', 'payé', 'expédié', 'livré', 'annulé') DEFAULT 'en attente',
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_mise_jour TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(utilisateur_id)
);
CREATE TABLE articles_commande (
    article_commande_id INT PRIMARY KEY AUTO_INCREMENT,
    commande_id INT,
    produit_id INT,
    quantite INT NOT NULL,
    prix DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (commande_id) REFERENCES commandes(commande_id),
    FOREIGN KEY (produit_id) REFERENCES produits(produit_id)
);
CREATE TABLE panier (
    panier_id INT PRIMARY KEY AUTO_INCREMENT,
    utilisateur_id INT,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(utilisateur_id)
);
CREATE TABLE articles_panier (
    article_panier_id INT PRIMARY KEY AUTO_INCREMENT,
    panier_id INT,
    produit_id INT,
    quantite INT NOT NULL,
    FOREIGN KEY (panier_id) REFERENCES panier(panier_id),
    FOREIGN KEY (produit_id) REFERENCES produits(produit_id)
);
CREATE TABLE suivi_livraison (
    suivi_id INT PRIMARY KEY AUTO_INCREMENT,
    commande_id INT,
    statut ENUM('preparation', 'expedié', 'en_transit', 'livré') DEFAULT 'preparation',
    date_mise_jour TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (commande_id) REFERENCES commandes(commande_id)
);
INSERT INTO Produit (Nom, Description, Prix, Quantite_en_stock, Categorie, Images, Poids, Dimensions, Marque)
VALUES
-- Accessoires
('Collier Réfléchissant Chat', 'Collier ajustable et réfléchissant pour la sécurité du chat', 15.99, 50, 'Accessoire', '"C:\Users\ikbal\OneDrive\Bureau\PROJET_ANIMALIS\IMAGE_CHAT\img1.jpg"', 0.1, '20x2x2 cm', 'SafePet'),
('Fontaine à Eau', 'Fontaine à eau automatique pour chats', 39.99, 30, 'Accessoire', '', 1.5, '30x20x20 cm', 'AquaPet'),
('Arbre à Chat Deluxe', 'Grand arbre à chat avec griffoir et niches', 119.99, 15, 'Accessoire', 'arbre_chat_deluxe.jpg', 15.0, '120x60x60 cm', 'PetKing'),
('Sac de Transport Chat', 'Sac de transport confortable pour voyages', 34.99, 40, 'Accessoire', 'sac_transport_chat.jpg', 1.0, '45x30x25 cm', 'TravelPet'),
('Litière Autonettoyante', 'Litière pour chat autonettoyante', 199.99, 10, 'Accessoire', 'litiere_autonettoyante.jpg', 5.0, '60x40x40 cm', 'CleanTech'),
('Harnais pour Chat', 'Harnais réglable avec laisse', 17.99, 35, 'Accessoire', 'harnais_chat.jpg', 0.2, '25x20x10 cm', 'WalkEase'),

-- Jeux
('Laser pour Chat', 'Jouet interactif avec laser automatique', 25.99, 50, 'Jeu', 'laser_chat.jpg', 0.5, '10x10x10 cm', 'FunPlay'),
('Souris en Peluche', 'Jouet en forme de souris avec catnip', 7.99, 100, 'Jeu', 'souris_peluche.jpg', 0.1, '10x5x5 cm', 'PlayCat'),
('Balle Distributeur de Nourriture', 'Balle interactive pour distribuer des friandises', 14.99, 40, 'Jeu', 'balle_distributeur_chat.jpg', 0.3, '15x15x15 cm', 'FeedFun'),
('Tunnel de Jeu XXL', 'Tunnel pour chat avec plusieurs entrées', 29.99, 25, 'Jeu', 'tunnel_jeu_chat.jpg', 2.0, '150x30x30 cm', 'CatZone'),
('Jouet Suspendu', 'Jouet à suspendre pour stimuler le jeu', 12.99, 70, 'Jeu', 'jouet_suspendu.jpg', 0.5, '50x10x10 cm', 'PetPlay'),
('Cerceau de Jeu', 'Cerceau d\'agilité pour chats', 18.99, 30, 'Jeu', 'cerceau_chat.jpg', 1.0, '40x40x40 cm', 'JumpCat'),

-- Soins
('Shampooing Hydratant Chat', 'Shampooing pour poils secs et sensibles', 13.99, 25, 'Soin', 'shampooing_hydratant_chat.jpg', 0.3, '250 ml', 'BioPet'),
('Spray Anti-Stress', 'Spray aux phéromones pour calmer les chats', 19.99, 50, 'Soin', 'spray_anti_stress.jpg', 0.2, '150 ml', 'CalmCat'),
('Lingettes Nettoyantes', 'Lingettes pour nettoyer le pelage des chats', 8.99, 80, 'Soin', 'lingettes_chat.jpg', 0.5, '50 unités', 'CarePlus'),
('Peigne Anti-Noeuds', 'Peigne pour démêler les poils', 10.99, 45, 'Soin', 'peigne_chat.jpg', 0.2, '20x5x3 cm', 'PetStyle'),
('Coupe-Griffes', 'Coupe-griffes avec sécurité', 6.99, 90, 'Soin', 'coupe_griffes_chat.jpg', 0.1, '10x5x3 cm', 'SafeClaw'),
('Vitamines pour Chat', 'Supplément alimentaire pour la santé du chat', 14.99, 40, 'Soin', 'vitamines_chat.jpg', 0.2, '100 g', 'HealthCat'),

-- Nourriture
('Croquettes Hypoallergéniques', 'Croquettes pour chats sensibles', 29.99, 100, 'Nourriture', 'croquettes_hypo_chat.jpg', 2.5, '40x30x10 cm', 'SensitivePet'),
('Pâtée au Poulet', 'Pâtée pour chat goût poulet', 2.99, 200, 'Nourriture', 'patee_poulet.jpg', 0.15, '80 g', 'FineBites'),
('Friandises au Thon', 'Friandises pour chat riches en protéines', 6.49, 150, 'Nourriture', 'friandises_thon.jpg', 0.2, '100 g', 'OceanCat'),
('Mousse de Saumon', 'Nourriture humide pour chat au saumon', 3.49, 180, 'Nourriture', 'mousse_saumon.jpg', 0.2, '90 g', 'DelightCat'),
('Croquettes Junior', 'Croquettes pour chatons en croissance', 22.99, 80, 'Nourriture', 'croquettes_junior.jpg', 1.5, '30x20x10 cm', 'HappyKitten'),
('Mix de Saveurs', 'Assortiment de pâtées pour chat', 15.99, 60, 'Nourriture', 'mix_saveurs_chat.jpg', 3.0, '10 unités', 'FlavorMix');

ALTER TABLE produits ADD image_url VARCHAR(255);
SHOW CREATE TABLE produits;
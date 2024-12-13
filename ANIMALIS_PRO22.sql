CREATE DATABASE IF NOT EXISTS ANIMALIS;
USE ANIMALIS;

CREATE TABLE utilisateurs (
    utilisateur_id INT PRIMARY KEY AUTO_INCREMENT,
    nom_utilisateur VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    role ENUM('client', 'admin') DEFAULT 'client',
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_mise_jour TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE categorie (
    categorie_id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    description TEXT
);
CREATE TABLE produits (
    produit_id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    prix DECIMAL(10, 2) NOT NULL,
    quantite INT NOT NULL,
    categorie_id INT,
    type ENUM('chat', 'chien') NOT NULL,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_mise_jour TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (categorie_id) REFERENCES categorie(categorie_id)
);

CREATE TABLE images (
    image_id INT PRIMARY KEY AUTO_INCREMENT,
    produit_id INT,
    url VARCHAR(255) NOT NULL,
    alt_text VARCHAR(255),
    type ENUM('chat', 'chien') NOT NULL,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (produit_id) REFERENCES produits(produit_id)
);

CREATE TABLE promotions (
    promotion_id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    type_reduction ENUM('percentage', 'fixed') NOT NULL,
    date_promotion DATE NOT NULL,
    date_fin_promotion DATE NOT NULL,
    produit_id INT,
    FOREIGN KEY (produit_id) REFERENCES produits(produit_id)
);
CREATE TABLE avis (
    avis_id INT PRIMARY KEY AUTO_INCREMENT,
	avis_utilisateur_id INT,
    produit_id INT,
    note_avis INT CHECK(note_avis >= 1 AND note_avis <= 5),
    comment TEXT,
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


INSERT INTO categorie (nom, description)
VALUES
('Accessoire', 'Produits et accessoires pour animaux'),
('Jeu', 'Jouets pour divertir les animaux'),
('Soin', 'Produits de soin pour animaux'),
('Nourriture', 'Alimentation pour animaux');




INSERT INTO produits (produit_id,nom, description, prix, quantite, categorie_id, type)
VALUES
-- Produits pour chats
(1,'Collier Réfléchissant Chat', 'Collier ajustable et réfléchissant pour la sécurité du chat', 15.99, 50, 1, 'chat'),
(2,'Fontaine à Eau', 'Fontaine à eau automatique pour chats', 39.99, 30, 1, 'chat'),
(3,'Arbre à Chat Deluxe', 'Grand arbre à chat avec griffoir et niches', 119.99, 15, 1, 'chat'),
(4,'Sac de Transport Chat', 'Sac de transport confortable pour voyages', 34.99, 40, 1, 'chat'),
(5,'Litière Autonettoyante', 'Litière pour chat autonettoyante', 199.99, 10, 1, 'chat'),
(6,'Harnais pour Chat', 'Harnais réglable avec laisse', 17.99, 35, 1, 'chat'),
(7,'Laser pour Chat', 'Jouet interactif avec laser automatique', 25.99, 50, 2, 'chat'),
(8,'Souris en Peluche', 'Jouet en forme de souris avec catnip', 7.99, 100, 2, 'chat'),
(9,'Balle Distributeur de Nourriture', 'Balle interactive pour distribuer des friandises', 14.99, 40, 2, 'chat'),
(10,'Tunnel de Jeu XXL', 'Tunnel pour chat avec plusieurs entrées', 29.99, 25, 2, 'chat'),
(11,'Jouet Suspendu', 'Jouet à suspendre pour stimuler le jeu', 12.99, 70, 2, 'chat'),
(12,'Cerceau de Jeu', 'Cerceau d\'agilité pour chats', 18.99, 30, 2, 'chat'),
(13,'Shampooing Hydratant Chat', 'Shampooing pour poils secs et sensibles', 13.99, 25, 3, 'chat'),
(14,'Spray Anti-Stress', 'Spray aux phéromones pour calmer les chats', 19.99, 50, 3, 'chat'),
(15,'Lingettes Nettoyantes', 'Lingettes pour nettoyer le pelage des chats', 8.99, 80, 3, 'chat'),
(16,'Peigne Anti-Noeuds', 'Peigne pour démêler les poils', 10.99, 45, 3, 'chat'),
(17,'Coupe-Griffes', 'Coupe-griffes avec sécurité', 6.99, 90, 3, 'chat'),
(18,'Vitamines pour Chat', 'Supplément alimentaire pour la santé du chat', 14.99, 40, 3, 'chat'),
(19,'Croquettes Hypoallergéniques', 'Croquettes pour chats sensibles', 29.99, 100, 4, 'chat'),
(20,'Pâtée au Poulet', 'Pâtée pour chat goût poulet', 2.99, 200, 4, 'chat'),
(21,'Friandises au Thon', 'Friandises pour chat riches en protéines', 6.49, 150, 4, 'chat'),
(22,'Mousse de Saumon', 'Nourriture humide pour chat au saumon', 3.49, 180, 4, 'chat'),
(23,'Croquettes Junior', 'Croquettes pour chatons en croissance', 22.99, 80, 4, 'chat'),
(24,'Mix de Saveurs', 'Assortiment de pâtées pour chat', 15.99, 60, 4, 'chat'),

-- Produits pour chiens
(25,'Collier Réfléchissant Chien', 'Collier ajustable et réfléchissant pour la sécurité du chien', 18.99, 50, 1, 'chien'),
(26,'Fontaine à Eau', 'Fontaine à eau automatique pour chiens', 42.99, 30, 1, 'chien'),
(27,'Panier Deluxe', 'Panier confortable et élégant pour chiens', 89.99, 20, 1, 'chien'),
(28,'Sac de Transport Chien', 'Sac de transport ergonomique pour chiens', 45.99, 25, 1, 'chien'),
(29,'Distributeur Automatique de Croquettes', 'Distributeur de croquettes automatique avec minuterie', 159.99, 15, 1, 'chien'),
(30,'Harnais pour Chien', 'Harnais réglable et robuste pour chiens', 22.99, 35, 1, 'chien'),
(31,'Balle Résistante', 'Balle en caoutchouc durable pour chiens', 14.99, 40, 2, 'chien'),
(32,'Corde à Nœuds', 'Jouet corde avec plusieurs nœuds pour tirer', 9.99, 60, 2, 'chien'),
(33,'Jouet Distributeur de Friandises', 'Jouet interactif distribuant des friandises', 19.99, 25, 2, 'chien'),
(34,'Tunnel d’Agilité', 'Tunnel pour exercices et agilité des chiens', 49.99, 15, 2, 'chien'),
(35,'Anneau en Caoutchouc', 'Anneau solide en caoutchouc pour jouer', 12.99, 45, 2, 'chien'),
(36,'Frisbee Souple', 'Frisbee en matériau souple et résistant', 16.99, 50, 2, 'chien'),
(37,'Shampooing Antiparasitaire Chien', 'Shampooing pour protéger contre les parasites', 19.99, 30, 3, 'chien'),
(38,'Spray Calmant', 'Spray aux phéromones pour calmer les chiens', 24.99, 40, 3, 'chien'),
(39,'Lingettes Nettoyantes', 'Lingettes pour nettoyer les pattes et le pelage des chiens', 11.99, 80, 3, 'chien'),
(40,'Brosse Démêlante', 'Brosse pour démêler le pelage des chiens', 15.99, 25, 3, 'chien'),
(41,'Coupe-Griffes', 'Coupe-griffes sécurisé et facile à utiliser', 8.99, 60, 3, 'chien'),
(42,'Compléments Alimentaires Chien', 'Suppléments pour renforcer la santé des chiens', 29.99, 35, 3, 'chien'),
(43,'Croquettes Senior', 'Croquettes adaptées aux chiens âgés', 35.99, 100, 4, 'chien'),
(44,'Pâtée au Bœuf', 'Pâtée pour chien au goût de bœuf', 3.49, 200, 4, 'chien'),
(45,'Friandises Dentaires', 'Friandises pour maintenir une bonne hygiène dentaire', 6.99, 150, 4, 'chien'),
(46,'Barres de Poulet', 'Barres de poulet naturelles pour chiens', 12.49, 100, 4, 'chien'),
(47,'Croquettes Junior', 'Croquettes pour jeunes chiens en croissance', 29.99, 80, 4, 'chien'),
(48,'Pack de Pâtées Variées', 'Pack contenant plusieurs saveurs de pâtées', 19.99, 60, 4, 'chien');


INSERT INTO images (produit_id, url, alt_text, type) VALUES
-- Chat
(1, 'images/IMAGE_CHAT/collier_reflechissant_chat.jpg', 'Collier réfléchissant pour la sécurité des chats', 'chat'),
(2, 'images/IMAGE_CHAT/fontaine_eau_chat.jpg', 'Fontaine à eau automatique pour chats', 'chat'),
(3, 'images/IMAGE_CHAT/arbre_chat_deluxe.jpg', 'Grand arbre à chat avec griffoir et niches', 'chat'),
(4, 'images/IMAGE_CHAT/sac_transport_chat.jpg', 'Sac de transport confortable pour chats', 'chat'),
(5, 'images/IMAGE_CHAT/litiere_autonettoyante.jpg', 'Litière autonettoyante pour chats', 'chat'),
(6, 'images/IMAGE_CHAT/harnais_chat.jpg', 'Harnais réglable avec laisse pour chats', 'chat'),
(7, 'images/IMAGE_CHAT/laser_chat.jpg', 'Jouet laser interactif pour chats', 'chat'),
(8, 'images/IMAGE_CHAT/souris_peluche_chat.jpg', 'Souris en peluche avec catnip pour chats', 'chat'),
(9, 'images/IMAGE_CHAT/balle_distributeur_chat.jpg', 'Balle interactive distributeur de nourriture pour chats', 'chat'),
(10, 'images/IMAGE_CHAT/tunnel_jeu_chat.jpg', 'Tunnel de jeu XXL pour chats', 'chat'),
(11, 'images/IMAGE_CHAT/jouet_suspendu_chat.jpg', 'Jouet suspendu pour stimuler le jeu des chats', 'chat'),
(12, 'images/IMAGE_CHAT/cerceau_chat.jpg', 'Cerceau de jeu pour l\'agilité des chats', 'chat'),
(13, 'images/IMAGE_CHAT/shampooing_hydratant_chat.jpg', 'Shampooing hydratant pour poils secs des chats', 'chat'),
(14, 'images/IMAGE_CHAT/spray_anti_stress_chat.jpg', 'Spray anti-stress aux phéromones pour chats', 'chat'),
(15, 'images/IMAGE_CHAT/lingettes_chat.jpg', 'Lingettes nettoyantes pour pelage de chats', 'chat'),
(16, 'images/IMAGE_CHAT/peigne_chat.jpg', 'Peigne anti-noeuds pour poils de chats', 'chat'),
(17, 'images/IMAGE_CHAT/coupe_griffes_chat.jpg', 'Coupe-griffes sécurisé pour chats', 'chat'),
(18, 'images/IMAGE_CHAT/vitamines_chat.jpg', 'Vitamines pour améliorer la santé des chats', 'chat'),
(19, 'images/IMAGE_CHAT/croquettes_hypo_chat.jpg', 'Croquettes hypoallergéniques pour chats sensibles', 'chat'),
(20, 'images/IMAGE_CHAT/patee_poulet_chat.jpg', 'Pâtée pour chats goût poulet', 'chat'),
(21, 'images/IMAGE_CHAT/friandises_thon_chat.jpg', 'Friandises au thon riches en protéines pour chats', 'chat'),
(22, 'images/IMAGE_CHAT/mousse_saumon_chat.jpg', 'Mousse de saumon pour chats', 'chat'),
(23, 'images/IMAGE_CHAT/croquettes_junior_chat.jpg', 'Croquettes pour chatons en croissance', 'chat'),
(24, 'images/IMAGE_CHAT/mix_saveurs_chat.jpg', 'Assortiment de pâtées variées pour chats', 'chat'),

-- Chien
(25, 'images/image_chien/collier_reflechissant_chien.jpg', 'Collier réfléchissant pour la sécurité des chiens', 'chien'),
(26, 'images/image_chien/fontaine_eau_chien.jpg', 'Fontaine à eau automatique pour chiens', 'chien'),
(27, 'images/image_chien/panier_deluxe_chien.jpg', 'Panier deluxe confortable pour chiens', 'chien'),
(28, 'images/image_chien/sac_transport_chien.jpg', 'Sac de transport confortable pour chiens', 'chien'),
(29, 'images/image_chien/distributeur_croquettes_chien.jpg', 'Distributeur automatique de croquettes pour chiens', 'chien'),
(30, 'images/image_chien/harnais_chien.jpg', 'Harnais réglable pour chiens', 'chien'),
(31, 'images/image_chien/balle_resistante_chien.jpg', 'Balle résistante pour chiens', 'chien'),
(32, 'images/image_chien/corde_noeuds_chien.jpg', 'Corde à nœuds robuste pour chiens', 'chien'),
(33, 'images/image_chien/jouet_distributeur_chien.jpg', 'Jouet distributeur de friandises pour chiens', 'chien'),
(34, 'images/image_chien/tunnel_agilite_chien.jpg', 'Tunnel d’agilité pour chiens', 'chien'),
(35, 'images/image_chien/anneau_caoutchouc_chien.jpg', 'Anneau en caoutchouc pour chiens', 'chien'),
(36, 'images/image_chien/frisbee_souple_chien.jpg', 'Frisbee souple pour chiens', 'chien'),
(37, 'images/image_chien/shampooing_antiparasitaire_chien.jpg', 'Shampooing antiparasitaire pour chiens', 'chien'),
(38, 'images/image_chien/spray_calmant_chien.jpg', 'Spray calmant pour chiens', 'chien'),
(39, 'images/image_chien/lingettes_chien.jpg', 'Lingettes nettoyantes pour chiens', 'chien'),
(40, 'images/image_chien/brosse_demelante_chien.jpg', 'Brosse démêlante pour chiens', 'chien'),
(41, 'images/image_chien/coupe_griffes_chien.jpg', 'Coupe-griffes sécurisé pour chiens', 'chien'),
(42, 'images/image_chien/complements_chien.jpg', 'Compléments alimentaires pour chiens', 'chien'),
(43, 'images/image_chien/croquettes_senior_chien.jpg', 'Croquettes pour chiens senior', 'chien'),
(44, 'images/image_chien/patee_boeuf_chien.jpg', 'Pâtée pour chiens goût bœuf', 'chien'),
(45, 'images/image_chien/friandises_dentaires_chien.jpg', 'Friandises dentaires pour chiens', 'chien'),
(46, 'images/image_chien/barres_poulet_chien.jpg', 'Barres de poulet pour chiens', 'chien'),
(47, 'images/image_chien/croquettes_junior_chien.jpg', 'Croquettes pour chiots en croissance', 'chien'),
(48, 'images/image_chien/pack_patees_variees_chien.jpg', 'Pack de pâtées variées pour chiens', 'chien');




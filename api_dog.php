<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Paramètres de connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "Sihammoumen@2004";
$dbname = "ANIMALIS";

try {
    // Connexion à la base de données
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Requête SQL pour obtenir les produits de type "chien"
    $sql = "SELECT produits.produit_id, produits.nom, produits.description, produits.prix, produits.quantite, images.url 
            FROM produits
            JOIN images ON produits.produit_id = images.produit_id
            WHERE produits.type = 'chien'";  // Filtrer les produits de type 'chien'

    // Exécution de la requête
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    // Récupération des résultats
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Retourner les produits au format JSON
    echo json_encode($products);
}
catch(PDOException $e) {
    // Gestion des erreurs
    echo "Échec de la connexion : " . $e->getMessage();
}
?>

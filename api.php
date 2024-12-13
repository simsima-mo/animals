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
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT produits.produit_id, produits.nom, produits.description, produits.prix, produits.quantite, images.url 
            FROM produits
            JOIN images ON produits.produit_id = images.produit_id
            WHERE produits.type = 'chat'";

    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($products);
}
catch(PDOException $e) {
    echo "Échec de la connexion : " . $e->getMessage();
}


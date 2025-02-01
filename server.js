const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware pour analyser les données JSON
app.use(bodyParser.json());

// Tableau pour stocker les produits (en mémoire)
let products = [];

// Route POST pour ajouter un produit
app.post('/api/produits', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct); // Répondre avec le produit ajouté
});

// Route GET pour récupérer tous les produits
app.get('/api/produits', (req, res) => {
    res.json(products);
});

// Lancer le serveur sur le port 3000
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

// Création du serveur
const app = express()
app.use(cors())
app.use(express.json());

// Connexion à la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'financeflow',
    port: 3308,
})

// Port d'écoute du serveur
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

// Récupère le solde actuel
app.get('/solde', (req, res) => {
    const sql = "SELECT * from solde WHERE `id` = 1"
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json(data)
        }
    })
})

// Met à jour le solde
app.post('/add', (request, response) => {
    const { solde } = request.body;

    const sql = "UPDATE solde SET solde = ? WHERE id = 1";

    db.query(sql, [solde], (err, data) => {
        if (err) {
            return response.json(err);
        } else {
            return response.json({ message: 'Solde mis à jour avec succés' });
        }
    })
});

// Ajoute une transaction
app.post('/add-transaction', (request, response) => {
    const { title, description, montant, categorie, date, direction } = request.body;

    const sql = "INSERT INTO transaction (date, title, description, value, direction, categorie) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql, [date, title, description, montant, direction, categorie], (err, data) => {
        if (err) {
            return response.json(err);
        } else {
            return response.json({ message: 'Transaction ajoutée avec succés' });
        }
    })
});
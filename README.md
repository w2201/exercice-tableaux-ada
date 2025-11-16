## Données de départ

Le projet utilise une base de données simple représentée par un tableau d’objets JavaScript :


const books = [
    { id: 1, title: "JavaScript for Beginners", author: "Alice Martin", year: 2020, pages: 300, genre: "programming", rating: 4.2 },
    { id: 2, title: "Advanced React", author: "Bob Dupont", year: 2021, pages: 450, genre: "programming", rating: 4.5 },
    { id: 3, title: "Art History", author: "Claire Leroy", year: 2019, pages: 280, genre: "art", rating: 3.8 },
    { id: 4, title: "Python Data Science", author: "David Moreau", year: 2022, pages: 520, genre: "programming", rating: 4.7 },
    { id: 5, title: "Design Patterns", author: "Alice Martin", year: 2018, pages: 320, genre: "programming", rating: 4.1 },
    { id: 6, title: "Modern Painting", author: "Emma Laurent", year: 2020, pages: 190, genre: "art", rating: 3.9 }
];

# Exercise : Algorithmie sur les tableaux
## objectif du projet.
Créer un mini-système de gestion de livres à partir d'un tableau d'objets, en utilisant les methodes modernes de JavaScript (filter, reduce, map, set..).
Ce projet fait partie de la branche "Tableaux & Objets" à Ada Tecch School.
---
Chaque livre contient les propriétés suivantes :

id : identifiant unique

title : titre du livre

author : auteur·ice

year : année de publication

pages : nombre de pages

genre : catégorie (ex: programming, art)

rating : note sur 5



## Fonctionnalistés implémentées
### 1. Trouver tous les livres d'une auteurice
fonction : `getBooksByAuthor(authorName)`
=> Retourne tous les livres écrits par "Alice Martin"

### 2️. Calculer la moyenne des pages par genre  
Fonction : `averagePagesByGenre(genre)`  
=> Ex : moyenne des pages pour le genre “programming”

### 3️. Trouver le livre le plus récent  
Fonction : `getMostRecentBook()`  
=> Utilisation de `reduce()`.

### 4️. Créer une liste unique d’auteur·ices  
Fonction : `getUniqueAuthors()`  
=> Basée sur `new Set()` pour éviter les doublons.

### 6. Grouper les livres par genre  
Fonction : `groupBooksByGenre()`  
=> Retourne un objet avec les genres comme clés.


## . Résultats visibles dans la console
Lancement du fichier :


node exercice-tableaux.js



Ce que j’ai appris

Manipuler des tableaux de données complexes

Utiliser les méthodes modernes : map, filter, reduce

Combiner plusieurs fonctions pour résoudre un problème

Structurer un petit projet JavaScript

const books = [
    { id: 1, title: "JavaScript for Beginners", author: "Alice Martin", year: 2020, pages: 300, genre: "programming", rating: 4.2 },
    { id: 2, title: "Advanced React", author: "Bob Dupont", year: 2021, pages: 450, genre: "programming", rating: 4.5 },
    { id: 3, title: "Art History", author: "Claire Leroy", year: 2019, pages: 280, genre: "art", rating: 3.8 },
    { id: 4, title: "Python Data Science", author: "David Moreau", year: 2022, pages: 520, genre: "programming", rating: 4.7 },
    { id: 5, title: "Design Patterns", author: "Alice Martin", year: 2018, pages: 320, genre: "programming", rating: 4.1 },
    { id: 6, title: "Modern Painting", author: "Emma Laurent", year: 2020, pages: 190, genre: "art", rating: 3.9 }
];

// 1. Trouver tous les livres d'une auteur donné.
function getBooksByAuthor(authorName) {
    return books.filter(book => book.author === authorName);
}

// 2. Calculer la moyenne des pages par genre.
function averagePagesByGenre(genre) {
    const selected = books.filter(book => book.genre === genre);
    const total = selected.reduce((acc, book) => acc + book.pages, 0);
    return total / selected.length;
}

// 3. Trouver le livre le plus récent.
function getMostRecentBook() {
    return books.reduce((latest, book) => book.year > latest.year ? book : latest);
}

// 4. Créer une liste unique de tous les auteurices.
function getUniqueAuthors() {
    return [...new Set(books.map(book => book.author))];    
}

// 5. Grouper les livres par genre.
function groupBooksByGenre() {
    return books.reduce((grouped, book) => {
        if (!grouped[book.genre]) grouped[book.genre] = [];
        grouped[book.genre].push(book);
        return grouped;
    }, {});
}

// Tests
console.log("1) Livres de Alice Martin:", getBooksByAuthor("Alice Martin"));
console.log("2) Moyenne des pages en programmation:", averagePagesByGenre("programming"));
console.log("3) Livre le plus récent:", getMostRecentBook());
console.log("4) Liste unique des auteurices:", getUniqueAuthors());
console.log("5) Livres groupés par genre:", groupBooksByGenre());
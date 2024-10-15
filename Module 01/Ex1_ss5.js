const books = [
    { 
        author: "J.K. Rowling", 
        name: "Harry Potter and the Philosopher's Stone" 
    },

    { 
        author: "George Orwell", 
        name: "1984" 
    },

    { 
        author: "J.R.R. Tolkien", 
        name: "The Lord of the Rings" 
    },

    { 
        author: "F. Scott Fitzgerald", 
        name: "The Great Gatsby" 
    }
];

const inputAuthor = prompt("Nhập tên tác giả:");
const foundBooks = books.filter(book => book.author.toLowerCase() === inputAuthor.toLowerCase());

if (foundBooks.length > 0) {
    console.log("Sách tìm thấy:", foundBooks);
    foundBooks.forEach(book => {
      console.log(`Tác giả: ${book.author}, Tên sách: ${book.name}`);
    });
} else {
    console.log("Không tìm thấy sách");
}
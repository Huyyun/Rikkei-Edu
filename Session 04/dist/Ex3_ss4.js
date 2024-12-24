"use strict";
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class LibraryManager {
    constructor() {
        this.books = [];
    }
    addBook(title, author, year) {
        const id = this.books.length + 1;
        const newBook = new Book(id, title, author, year);
        this.books.push(newBook);
        console.log(`Sách "${title}" đã được thêm vào thư viện.`);
    }
    listBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`Mã sách: ${book.id}, Tên sách: ${book.title}, Tác giả: ${book.author}, Năm xuất bản: ${book.year}`);
        });
    }
    removeBook(id) {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1);
            console.log(`Sách "${removedBook[0].title}" đã được xóa khỏi thư viện.`);
        }
        else {
            console.log("Không tìm thấy sách với mã này.");
        }
    }
    searchBook(title) {
        const foundBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log("Kết quả tìm kiếm:");
            foundBooks.forEach(book => {
                console.log(`Mã sách: ${book.id}, Tên sách: ${book.title}, Tác giả: ${book.author}, Năm xuất bản: ${book.year}`);
            });
        }
        else {
            console.log("Không tìm thấy sách với tên này.");
        }
    }
}
class Main {
    constructor() {
        this._libraryManager = new LibraryManager();
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            console.log("Menu chức năng:");
            console.log("1. Thêm sách vào thư viện.");
            console.log("2. Hiển thị danh sách sách.");
            console.log("3. Xóa sách theo mã sách.");
            console.log("4. Tìm kiếm sách theo tên.");
            console.log("5. Dừng chương trình.");
            let choice = prompt("Mời bạn nhập vào lựa chọn (1-5):");
            switch (choice) {
                case "1":
                    const title = prompt("Mời bạn nhập tên sách:");
                    const author = prompt("Mời bạn nhập tên tác giả:");
                    const year = parseInt(prompt("Mời bạn nhập năm xuất bản:"));
                    if (isNaN(year) || year <= 0 || title === "" || author === "") {
                        console.log("Thông tin sách không hợp lệ!");
                    }
                    else {
                        this._libraryManager.addBook(title, author, year);
                    }
                    break;
                case "2":
                    this._libraryManager.listBooks();
                    break;
                case "3":
                    const idToRemove = parseInt(prompt("Mời bạn nhập mã sách cần xóa:"));
                    if (isNaN(idToRemove) || idToRemove <= 0) {
                        console.log("Mã sách không hợp lệ!");
                    }
                    else {
                        this._libraryManager.removeBook(idToRemove);
                    }
                    break;
                case "4":
                    const titleSearch = prompt("Mời bạn nhập tên sách để tìm kiếm:");
                    this._libraryManager.searchBook(titleSearch);
                    break;
                case "5":
                    loop = false;
                    break;
                default:
                    console.log("Lựa chọn của bạn không hợp lệ. Vui lòng nhập lại.");
                    break;
            }
        }
    }
}
const app = new Main();
app.bootstrap();

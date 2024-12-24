// Xây dựng một chương trình quản lý thư viện sách với các chức năng cơ bản bao gồm:

// Thêm sách mới vào thư viện.
// Hiển thị danh sách sách trong thư viện.
// Xóa sách khỏi thư viện theo mã sách.
// Tìm kiếm sách theo tên.
// 1. Lớp Book:
// Thuộc tính:
// id: number - Mã sách duy nhất.
// title: string - Tên sách.
// author: string - Tên tác giả.
// year: number - Năm xuất bản.
 

 

// 2. Lớp LibraryManager:
// Thuộc tính:
// books: Book[] - Danh sách các sách trong thư viện.
// Phương thức:
// addBook(title: string, author: string, year: number): void - Thêm sách mới vào thư viện.
// listBooks(): void - Hiển thị danh sách tất cả các sách.
// removeBook(id: number): void - Xóa sách theo mã sách.
// searchBook(title: string): void - Tìm kiếm sách theo tên.
// 3. Lớp Main:
// Khởi tạo một đối tượng LibraryManager.
// Chạy chương trình theo menu lựa chọn trong vòng lặp while.
// Menu chức năng:
// Thêm sách vào thư viện.
// Hiển thị danh sách sách.
// Xóa sách theo mã sách.
// Tìm kiếm sách theo tên.
// Dừng chương trình.
// Yêu cầu bổ sung:

// Nhập thông tin sách từ người dùng thông qua prompt.
// Hiển thị kết quả tương ứng với từng thao tác.
// In thông báo lỗi nếu người dùng nhập thông tin không hợp lệ hoặc không tìm thấy sách.


class Book {
    id: number;
    title: string;
    author: string;
    year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class LibraryManager {
    books: Book[] = [];

    // Thêm sách vào thư viện
    addBook(title: string, author: string, year: number): void {
        const id = this.books.length + 1; // Tạo mã sách tự động
        const newBook = new Book(id, title, author, year);
        this.books.push(newBook);
        console.log(`Sách "${title}" đã được thêm vào thư viện.`);
    }

    // Hiển thị danh sách sách
    listBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }

        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`Mã sách: ${book.id}, Tên sách: ${book.title}, Tác giả: ${book.author}, Năm xuất bản: ${book.year}`);
        });
    }

    // Xóa sách khỏi thư viện theo mã sách
    removeBook(id: number): void {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1);
            console.log(`Sách "${removedBook[0].title}" đã được xóa khỏi thư viện.`);
        } else {
            console.log("Không tìm thấy sách với mã này.");
        }
    }

    // Tìm kiếm sách theo tên
    searchBook(title: string): void {
        const foundBooks = this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log("Kết quả tìm kiếm:");
            foundBooks.forEach(book => {
                console.log(`Mã sách: ${book.id}, Tên sách: ${book.title}, Tác giả: ${book.author}, Năm xuất bản: ${book.year}`);
            });
        } else {
            console.log("Không tìm thấy sách với tên này.");
        }
    }
}

class Main {
    private _libraryManager: LibraryManager;

    constructor() {
        this._libraryManager = new LibraryManager();
    }

    bootstrap(): void {
        let loop: boolean = true;

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
                    } else {
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
                    } else {
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
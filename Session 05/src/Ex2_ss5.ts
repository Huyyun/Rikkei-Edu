class Person {
    private _id: number;
    private _name: string;
    static idCounter: number = 0;

    constructor(name: string) {
        this._id = ++Person.idCounter;
        this._name = name;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    getName(): string {
        return this._name;
    }
}

class Member extends Person {
    private _membershipType: string;

    constructor(name: string, membershipType: string) {
        super(name);
        this._membershipType = membershipType;
    }

    get membershipType() {
        return this._membershipType;
    }

    getMembershipType(): string {
        return this._membershipType;
    }
}

class Librarian extends Person {
    private _position: string;

    constructor(name: string, position: string) {
        super(name);
        this._position = position;
    }

    get position() {
        return this._position;
    }

    getPosition(): string {
        return this._position;
    }
}

class Book {
    private _id: number;
    private _title: string;
    private _author: string;
    private _isBorrowed: boolean;
    static idCounter: number = 0;

    constructor(title: string, author: string) {
        this._id = ++Book.idCounter;
        this._title = title;
        this._author = author;
        this._isBorrowed = false;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get isBorrowed() {
        return this._isBorrowed;
    }

    borrow(): void {
        if (this._isBorrowed) {
            console.log(`Book "${this._title}" is already borrowed.`);
            return;
        }
        this._isBorrowed = true;
    }

    returnBook(): void {
        if (!this._isBorrowed) {
            console.log(`Book "${this._title}" is not borrowed yet.`);
            return;
        }
        this._isBorrowed = false;
    }

    getDetails(): string {
        return `Book [ID: ${this._id}, Title: ${this._title}, Author: ${this._author}, Borrowed: ${this._isBorrowed ? 'Yes' : 'No'}]`;
    }
}

class BorrowRecord {
    private _member: Member;
    private _book: Book;

    constructor(member: Member, book: Book) {
        this._member = member;
        this._book = book;
    }

    getRecordDetails(): string {
        return `Record [Member: ${this._member.getName()} (${this._member.getMembershipType()}), Book: ${this._book.getDetails()}]`;
    }
}

class LibraryManager {
    private members: Member[] = [];
    private librarians: Librarian[] = [];
    private books: Book[] = [];
    private borrowRecords: BorrowRecord[] = [];

    addMember(name: string, membershipType: string): void {
        const member = new Member(name, membershipType);
        this.members.push(member);
        console.log(`Thành viên ${name} đã được thêm với loại thẻ thành viên ${membershipType}`);
        console.log("*************************");
        if (this.members.length === 0) {
            console.log("Không có bất kỳ thành viên nào");
        } else {
            this.members.forEach(function(element: Member, index: number){
                console.log(`${index + 1}.${element.name} - ${element.membershipType}`);
            });
        }
    }

    addLibrarian(name: string, position: string): void {
        let librarian = new Librarian(name, position);
        this.librarians.push(librarian);
        console.log(`Thủ thư ${name} đã được thêm với vị trí ${position}`);
        console.log("*************************");
        if (this.librarians.length === 0) {
            console.log("Không có bất kỳ thủ thư nào");
        } else {
            this.librarians.forEach(function(element: Librarian, index: number){
                console.log(`${index + 1}.${element.name} - ${element.position}`);
            });
        }
    }

    addBook(title: string, author: string): void {
        let book = new Book(title, author);
        this.books.push(book);
        console.log(`Sách "${title}" được viết bởi tác giả ${author} đã được thêm vào thư viện.`);
        console.log("*************************");
        if (this.books.length === 0) {
            console.log("Không có bất kỳ cuốn sách nào");
        } else {
            this.books.forEach(function(element: Book, index: number){
                console.log(`${index + 1}.${element.title} - ${element.author}`);
            });
        }
    }

    borrowBook(memberId: number, bookId: number): void {
        let member = this.members.find(m => m.id === memberId);
        let book = this.books.find(b => b.id === bookId);

        if (!member || !book) {
            console.log("Error: Thành viên hoặc sách không được tìm tìm thấy.");
            return;
        }

        if (book.isBorrowed) {
            console.log(`Error: Sách "${book.title}" đã được cho mượn.`);
            return;
        }

        book.borrow();
        let record = new BorrowRecord(member, book);
        this.borrowRecords.push(record);
        console.log(`Thành viên ${member.getName()} đã mượn sách "${book.title}".`);
    }

    returnBook(bookId: number): void {
        let book = this.books.find(b => b.id === bookId);

        if (!book) {
            console.log("Error: Cuốn sách không được tìm thấy.");
            return;
        }

        book.returnBook();
        console.log(`Sách "${book.title}" đã được trả lại thư viện.`);
    }

    listBorrowRecords(): void {
        if (this.borrowRecords.length === 0) {
            console.log("Không tìm thấy bản ghi mượn nào.");
            return;
        }

        this.borrowRecords.forEach(record => console.log(record.getRecordDetails()));
    }
}

class Main {
    private libraryManager: LibraryManager;

    constructor() {
        this.libraryManager = new LibraryManager();
    }

    bootstrap(): void {
        let loop: boolean = true;

        while (loop) {
            console.log("Library Management Menu:");
            console.log("1. Thêm thành viên");
            console.log("2. Thêm thủ thư");
            console.log("3. Thêm sách");
            console.log("4. Mượn sách");
            console.log("5. Trả sách");
            console.log("6. Hiển thị danh sách bản ghi mượn sách");
            console.log("7. Dừng chương trình");

            let choice = prompt("Mời bạn nhập vào lựa chọnchọn (1-7): ");
            switch (choice) {
                case "1":
                    const memberName = prompt("Nhập tên thành viên: ");
                    const membershipType = prompt("Nhập loạioại thẻ thành viên (VIP/Regular): ");
                    this.libraryManager.addMember(memberName!, membershipType!);
                    break;
                case "2":
                    const librarianName = prompt("Nhập tên thủ thư: ");
                    const position = prompt("Nhập vị trí: ");
                    this.libraryManager.addLibrarian(librarianName!, position!);
                    break;
                case "3":
                    const bookTitle = prompt("Nhập tiêu đề sách: ");
                    const author = prompt("Nhập tên tác giả: ");
                    this.libraryManager.addBook(bookTitle!, author!);
                    break;
                case "4":
                    const memberIdForBorrow = parseInt(prompt("Nhập ID thành viên: ")!);
                    const bookIdForBorrow = parseInt(prompt("Nhập ID sách muốn mượn: ")!);
                    this.libraryManager.borrowBook(memberIdForBorrow, bookIdForBorrow);
                    break;
                case "5":
                    const bookIdForReturn = parseInt(prompt("Nhập ID sách muốn trả: ")!);
                    this.libraryManager.returnBook(bookIdForReturn);
                    break;
                case "6":
                    this.libraryManager.listBorrowRecords();
                    break;
                case "7":
                    loop = false;
                    console.log("Kết thúc chương trình.");
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
                    break;
            }
        }
    }
}

let app = new Main();
app.bootstrap();

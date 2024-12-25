class Person {
    private _id: number;
    private _name: string;
    static idCounter: number = 0;

    constructor (name: string) {
        this._id = ++Person.idCounter;
        this._name = name;
    }

    get id () { 
        return this._id; 
    }

    get name () { 
        return this._name; 
    }
    set name (name: string) {
        this.name = name;
    }
}

class Member extends Person {
    private _membershipType: string;

    constructor (name: string, membershipType: string) {
        super(name);
        this._membershipType = membershipType;
    }

    get membershipType () {
        return this._membershipType;
    }
}

class Librarian extends Person {
    private _position: string;

    constructor (name: string, position: string) {
        super(name);
        this._position = position;
    }

    get position() {
        return this._position;
    }
}

class CD {
    private _id: number;
    private _title: string;
    private _artist: string;
    private _isBorrowed: boolean;
    static idCounter: number = 0;

    constructor (title: string, artist: string, isBorrowed: boolean) {
        this._id = ++CD.idCounter;
        this._title = title;
        this._artist = artist;
        this._isBorrowed = isBorrowed;
    }

    borrowed() {
        
    }

    returnCD() {

    }

    getDetails() {

    }
}

class BorrowRecord {
    private _member: string;
    private _cd: string;

    constructor(member: string, cd: string) {
        this._cd = cd;
        this._member = member;
    }

    getRecordDetails() {

    }
}

class LibraryManager {
    private members: Member[];
    private librarians: Librarian[];
    private cds: CD[];
    private borrowRecords: BorrowRecord[];

    constructor() {
        this.members = [];
        this.librarians = [];
        this.cds = [];
        this.borrowRecords = [];
    }

    addMember(name: string, membershipType: string): void {

    }

    addLibrarian(name: string, position: string): void {

    }

    addCD(title: string, artist: string): void {

    }

    borrowCD(memberId: number, cdId: number): void {

    }

    returnCD(cdId: number): void {

    }

    listBorrowRecords(): void {

    }
}

class Main {
    private _libraryManager = LibraryManager;
    constructor() {
        this._libraryManager = new LibraryManager;
    }

    bootstrap(): void {
        
    }
}
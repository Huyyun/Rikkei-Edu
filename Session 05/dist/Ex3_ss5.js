"use strict";
class Person {
    constructor(name) {
        this._id = ++Person.idCounter;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this.name = name;
    }
}
Person.idCounter = 0;
class Member extends Person {
    constructor(name, membershipType) {
        super(name);
        this._membershipType = membershipType;
    }
    get membershipType() {
        return this._membershipType;
    }
}
class Librarian extends Person {
    constructor(name, position) {
        super(name);
        this._position = position;
    }
    get position() {
        return this._position;
    }
}
class CD {
    constructor(title, artist, isBorrowed) {
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
CD.idCounter = 0;
class BorrowRecord {
    constructor(member, cd) {
        this._cd = cd;
        this._member = member;
    }
    getRecordDetails() {
    }
}
class LibraryManager {
    constructor() {
        this.members = [];
        this.librarians = [];
        this.cds = [];
        this.borrowRecords = [];
    }
    addMember(name, membershipType) {
    }
    addLibrarian(name, position) {
    }
    addCD(title, artist) {
    }
    borrowCD(memberId, cdId) {
    }
    returnCD(cdId) {
    }
    listBorrowRecords() {
    }
}
class Main {
    constructor() {
        this._libraryManager = LibraryManager;
        this._libraryManager = new LibraryManager;
    }
    bootstrap() {
    }
}

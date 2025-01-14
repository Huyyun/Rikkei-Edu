export class Person {
    constructor(name, email, phone) {
        this._id = ++Person.idCounter;
        this._name = name;
        this._email = email;
        this._phone = phone;
    }
    get id() { return this._id; }
    get name() { return this._name; }
    get email() { return this._email; }
    get phone() { return this._phone; }
    getDetails() {
        console.table({
            id: this._id,
            name: this._name,
            email: this._email,
            phone: this._phone,
        });
    }
}
Person.idCounter = 0;

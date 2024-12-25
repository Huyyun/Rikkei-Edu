"use strict";
class Animal {
    constructor(type, hairy) {
        this._type = type;
        this._hairy = hairy;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    get hairy() {
        return this._hairy;
    }
    set hypers(hairy) {
        this._hairy = hairy;
    }
    sound() {
        console.log("This is this animal sound");
    }
    walk() {
        console.log("This is this animal walk");
    }
}
class Dog extends Animal {
    constructor(name, gender) {
        super("carnivore", true);
        this._name = name;
        this._gender = gender;
        console.log(this._type);
        super.walk();
    }
    sound() {
        super.sound();
        console.log("Wof woff .... woff");
        console.log(`This is ${this._name}. I am a ${this._gender ? "male" : "female"} dog`);
    }
    introduce(input) {
        if (typeof input === "string") {
            console.log(`Hi, my name is ${this._name}. I'm a ${input}`);
        }
        else if (typeof input === "boolean") {
            console.log(`Hi my name is ${this._name}. I'm very ${input ? "handsome" : "ugly"}`);
        }
        else {
            console.log(`Hi, my name is ${this._name}`);
        }
    }
}
let dog01 = new Dog("Goofy", true);
console.log(dog01.hairy);
dog01.sound();

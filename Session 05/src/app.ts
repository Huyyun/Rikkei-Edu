class Animal {
    // private _type: string;
    // public _type: string;
    protected _type: string; // Bổ từ truy cập đặc biệt nằm giữa pri và pub
    private _hairy: boolean;

    constructor(type: string, hairy: boolean) {
        this._type = type;
        this._hairy = hairy;
    }

    get type() {
        return this._type;
    }

    set type(type: string) {
        this._type = type;
    }

    get hairy() { 
        return this._hairy; 
    }

    set hypers(hairy: boolean) {
        this._hairy = hairy;
    }

    sound() {
        console.log("This is this animal sound");
    }

    walk() {
        console.log("This is this animal walk");
    }
}

// let animal01 = new Animal("Bernivore");
// animal01._type; // không sử dụng đc khi đang dùng protected

class Dog extends Animal {
    private _name: string;
    private _gender: boolean;

    constructor(name: string, gender: boolean) {
        super("carnivore", true); // = Animal.constructor("carnivore", true);
        this._name = name;
        this._gender = gender;

        // console.log(this._type); // Chỉ khi type đc public
        console.log(this._type); // protected
        super.walk();
    }

    // ----> Method override (Ghi đè)
    override sound() {
        super.sound();
        console.log("Wof woff .... woff");
        console.log(
            `This is ${this._name}. I am a ${this._gender ? "male" : "female"} dog`
        );
    }

    // Method overloading (Nạp chồng) ---> Thể hiện tính đa hình thái (polymorphism)
    // thông qua việc tạo nhiều function signature cho phương thức

    // introduce(job: string) {
    //     console.log(
    //         `Hi, my name is ${this._name}. I'm working ${job}`
    //     );
    // }
    
    introduce(input: string): void;
    introduce(input: boolean): void;
    introduce(input: string | boolean): void {
        if(typeof input === "string") {
            console.log(`Hi, my name is ${this._name}. I'm a ${input}`);
        } else if(typeof input === "boolean") {
            console.log(
                `Hi my name is ${this._name}. I'm very ${input ? "handsome" : "ugly"}`
            );
        } else {
            console.log(`Hi, my name is ${this._name}`);
        }
    }
}

let dog01 = new Dog("Goofy", true);
console.log(dog01.hairy);
dog01.sound();
// dog01.introduce();
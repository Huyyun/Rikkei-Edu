class Storage1<T> {
    private _data: T;

    constructor(data: T) {
        this._data = data;
    }

    getData(): T {
        return this._data;
    }

    setData(data: T): void {
        this._data = data;
    }
}

// sử dụng với số
const numberStorage = new Storage1<number>(100);
console.log(numberStorage.getData()); // 100
numberStorage.setData(200);
console.log(numberStorage.getData()); // 200

// sử dụng với chuỗi
const stringStorage = new Storage1<string>("Hello");

"use strict";
class Storage1 {
    constructor(data) {
        this._data = data;
    }
    getData() {
        return this._data;
    }
    setData(data) {
        this._data = data;
    }
}
const numberStorage = new Storage1(100);
console.log(numberStorage.getData());
numberStorage.setData(200);
console.log(numberStorage.getData());
const stringStorage = new Storage1("Hello");

"use strict";
class Department {
    constructor(id, name, manager) {
        this.id = id;
        this.name = name;
        this._manager = manager;
    }
    get manager() {
        return this._manager;
    }
    set manager(manager) {
        this._manager = manager;
    }
    describe() {
        console.log(`This is ${this.name} Department with id: ${this.id}`);
    }
}
let educationDepartment = new Department("1", "Education", "Nguyễn Văn A");
console.log(educationDepartment);
let mktDepartment = new Department("3", "Marketing", "Trần Văn B");
console.log(mktDepartment);
console.log("Id:", mktDepartment.id);
console.log("Name:", mktDepartment.name);
mktDepartment.name = "Advance Marketing";
console.log("Name:", mktDepartment.name);
mktDepartment.describe();
console.log("Manager:", mktDepartment.manager);
mktDepartment.manager = "Bill Gates";
console.log("Manager:", mktDepartment.manager);
let accounting = {
    describe: educationDepartment.describe.bind({ id: "2", name: "Accounting" }),
};
accounting.describe();

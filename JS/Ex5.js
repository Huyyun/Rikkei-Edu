let employList = [
    {
        name: "Nguyễn Văn A",
    },

    {
        name: "Nguyễn Văn B",
    },

    {
        name: "Nguyễn Văn C",
    }
];

function display(){
    for(let key in employList) {
        console.log(`${+key + 1}. ${employList[key].name}`);
    }
}

function searchName(name){
    let findKey = -1;
    for (let key in employList) {
        if (name === employList[key].name) {
            findKey = key;
        }
    }
    return findKey;
}

while(true) {
    let command = prompt("Hãy nhập lệnh:");
    if (command === "C" || command === "c") {
        let name = prompt("Hãy nhập tên của bạn:");
        let findKey = searchName(name);
        if (findKey !== -1) {
            alert("Tên này đã tồn tại.");
        } else {
            newName = {
                name: name,
            }
            employList.push(newName);
            display();
        }
    } else if (command === "R" || command === "r") {
        display();
    } else if (command === "U" || command === "u") {
        let name = prompt("Hãy nhập tên của bạn:");
        let findKey = searchName(name);
        if (findKey !== -1) {
            newName = {
                name: name,
            }
            employList[findKey].name = name;
            display();
        } else {
            alert ("Tên này không tồn tại.");
        }
    } else if (command === "D" || command === "d") {
        let name = prompt("Hãy nhập tên của bạn:");
        let findKey = searchName(name);
        if (findKey !== -1) {
            delete employList[findKey].name;
            display();
        } else {
            alert ("Tên này không tồn tại.");
        }
    } else if (command === "E" || command === "e") {
        alert("Bai bai");
        break;
    } else {
        alert("Lệnh này không hợp lệ. Vui lòng nhập lại.");
    }
}
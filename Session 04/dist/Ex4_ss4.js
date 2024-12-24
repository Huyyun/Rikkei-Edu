"use strict";
class CD {
    constructor(id, title, artist, year) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.year = year;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getArtist() {
        return this.artist;
    }
    getYear() {
        return this.year;
    }
}
class CDStoreManager {
    constructor() {
        this.cds = [];
    }
    addCD(title, artist, year) {
        const id = this.cds.length + 1;
        const newCD = new CD(id, title, artist, year);
        this.cds.push(newCD);
        console.log(`CD "${title}" của nghệ sĩ ${artist} đã được thêm vào cửa hàng.`);
    }
    listCDs() {
        if (this.cds.length === 0) {
            console.log("Cửa hàng chưa có CD nào.");
            return;
        }
        console.log("Danh sách CD trong cửa hàng:");
        this.cds.forEach(cd => {
            console.log(`Mã CD: ${cd.getId()}, Tên CD: ${cd.getTitle()}, Nghệ sĩ: ${cd.getArtist()}, Năm phát hành: ${cd.getYear()}`);
        });
    }
    removeCD(id) {
        const index = this.cds.findIndex(cd => cd.getId() === id);
        if (index !== -1) {
            const removedCD = this.cds.splice(index, 1);
            console.log(`CD "${removedCD[0].getTitle()}" đã được xóa khỏi cửa hàng.`);
        }
        else {
            console.log("Không tìm thấy CD với mã này.");
        }
    }
    searchCD(title) {
        const foundCDs = this.cds.filter(cd => cd.getTitle().toLowerCase().includes(title.toLowerCase()));
        if (foundCDs.length > 0) {
            console.log("Kết quả tìm kiếm:");
            foundCDs.forEach(cd => {
                console.log(`Mã CD: ${cd.getId()}, Tên CD: ${cd.getTitle()}, Nghệ sĩ: ${cd.getArtist()}, Năm phát hành: ${cd.getYear()}`);
            });
        }
        else {
            console.log("Không tìm thấy CD với tên này.");
        }
    }
}
class Main {
    constructor() {
        this._cdStoreManager = new CDStoreManager();
    }
    bootstrap() {
        let loop = true;
        while (loop) {
            console.log("Menu chức năng:");
            console.log("1. Thêm CD vào cửa hàng.");
            console.log("2. Hiển thị danh sách CD.");
            console.log("3. Xóa CD theo mã CD.");
            console.log("4. Tìm kiếm CD theo tên.");
            console.log("5. Dừng chương trình.");
            let choice = prompt("Mời bạn nhập vào lựa chọn (1-5):");
            switch (choice) {
                case "1":
                    const title = prompt("Mời bạn nhập tên CD:");
                    const artist = prompt("Mời bạn nhập tên nghệ sĩ:");
                    const year = parseInt(prompt("Mời bạn nhập năm phát hành:"));
                    if (isNaN(year) || year <= 0 || title === "" || artist === "") {
                        console.log("Thông tin CD không hợp lệ!");
                    }
                    else {
                        this._cdStoreManager.addCD(title, artist, year);
                    }
                    break;
                case "2":
                    this._cdStoreManager.listCDs();
                    break;
                case "3":
                    const idToRemove = parseInt(prompt("Mời bạn nhập mã CD cần xóa:"));
                    if (isNaN(idToRemove) || idToRemove <= 0) {
                        console.log("Mã CD không hợp lệ!");
                    }
                    else {
                        this._cdStoreManager.removeCD(idToRemove);
                    }
                    break;
                case "4":
                    const titleSearch = prompt("Mời bạn nhập tên CD để tìm kiếm:");
                    this._cdStoreManager.searchCD(titleSearch);
                    break;
                case "5":
                    loop = false;
                    break;
                default:
                    console.log("Lựa chọn của bạn không hợp lệ. Vui lòng nhập lại.");
                    break;
            }
        }
    }
}
const app = new Main();
app.bootstrap();

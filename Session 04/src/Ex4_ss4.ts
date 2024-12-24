// Xây dựng chương trình quản lý cửa hàng băng đĩa CD sử dụng TypeScript

// Yêu cầu:
// Tính chất áp dụng: Chỉ sử dụng tính chất bao đóng (encapsulation). Không sử dụng đa hình, kế thừa hoặc trừu tượng hóa.
// Mô tả:
// Xây dựng một chương trình quản lý cửa hàng băng đĩa CD với các chức năng cơ bản bao gồm:

// Thêm CD mới vào cửa hàng.
// Hiển thị danh sách các CD trong cửa hàng.
// Xóa CD khỏi cửa hàng theo mã CD.
// Tìm kiếm CD theo tên.
 

 

 

// 1. Lớp CD:
// Thuộc tính:
// id: number - Mã CD duy nhất.
// title: string - Tên CD.
// artist: string - Nghệ sĩ biểu diễn.
// year: number - Năm phát hành.
// 2. Lớp CDStoreManager:
// Thuộc tính:
// cds: CD[] - Danh sách các CD trong cửa hàng.
// Phương thức:
// addCD(title: string, artist: string, year: number): void - Thêm CD mới vào cửa hàng.
// listCDs(): void - Hiển thị danh sách tất cả các CD.
// removeCD(id: number): void - Xóa CD theo mã CD.
// searchCD(title: string): void - Tìm kiếm CD theo tên.
// 3. Lớp Main:
// Khởi tạo một đối tượng CDStoreManager.
// Chạy chương trình theo menu lựa chọn trong vòng lặp while.
// Menu chức năng:
// Thêm CD vào cửa hàng.
// Hiển thị danh sách CD.
// Xóa CD theo mã CD.
// Tìm kiếm CD theo tên.
// Dừng chương trình.
// Yêu cầu bổ sung:

// Nhập thông tin từ người dùng thông qua prompt.
// Hiển thị kết quả tương ứng với từng thao tác.
// In thông báo lỗi nếu người dùng nhập thông tin không hợp lệ hoặc không tìm thấy CD.


class CD {
    private id: number;
    private title: string;
    private artist: string;
    private year: number;

    constructor(id: number, title: string, artist: string, year: number) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.year = year;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getArtist(): string {
        return this.artist;
    }

    getYear(): number {
        return this.year;
    }
}

class CDStoreManager {
    private cds: CD[] = [];

    // Thêm CD mới vào cửa hàng
    addCD(title: string, artist: string, year: number): void {
        const id = this.cds.length + 1; // Tạo mã CD tự động
        const newCD = new CD(id, title, artist, year);
        this.cds.push(newCD);
        console.log(`CD "${title}" của nghệ sĩ ${artist} đã được thêm vào cửa hàng.`);
    }

    // Hiển thị danh sách các CD
    listCDs(): void {
        if (this.cds.length === 0) {
            console.log("Cửa hàng chưa có CD nào.");
            return;
        }

        console.log("Danh sách CD trong cửa hàng:");
        this.cds.forEach(cd => {
            console.log(`Mã CD: ${cd.getId()}, Tên CD: ${cd.getTitle()}, Nghệ sĩ: ${cd.getArtist()}, Năm phát hành: ${cd.getYear()}`);
        });
    }

    // Xóa CD khỏi cửa hàng theo mã CD
    removeCD(id: number): void {
        const index = this.cds.findIndex(cd => cd.getId() === id);
        if (index !== -1) {
            const removedCD = this.cds.splice(index, 1);
            console.log(`CD "${removedCD[0].getTitle()}" đã được xóa khỏi cửa hàng.`);
        } else {
            console.log("Không tìm thấy CD với mã này.");
        }
    }

    // Tìm kiếm CD theo tên
    searchCD(title: string): void {
        const foundCDs = this.cds.filter(cd => cd.getTitle().toLowerCase().includes(title.toLowerCase()));
        if (foundCDs.length > 0) {
            console.log("Kết quả tìm kiếm:");
            foundCDs.forEach(cd => {
                console.log(`Mã CD: ${cd.getId()}, Tên CD: ${cd.getTitle()}, Nghệ sĩ: ${cd.getArtist()}, Năm phát hành: ${cd.getYear()}`);
            });
        } else {
            console.log("Không tìm thấy CD với tên này.");
        }
    }
}

class Main {
    private _cdStoreManager: CDStoreManager;

    constructor() {
        this._cdStoreManager = new CDStoreManager();
    }

    bootstrap(): void {
        let loop: boolean = true;

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
                    } else {
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
                    } else {
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
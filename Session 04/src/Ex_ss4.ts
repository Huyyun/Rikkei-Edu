// Xây dựng một ứng dụng quản lý danh sách công việc đơn giản.
class Todo {
    public id: number;
    public content: string;
    private _status: boolean;

    constructor (id: number, content: string, status: boolean = false) {
        this.id = id;
        this.content = content;
        this._status = status;
    }

    get status(): boolean {
        return this._status;
    }

    set status (status: boolean) {
        this._status = status;
    }
}

let index: number = 0;

class TodoListManager {

    // Quản lý danh sách công việc todos dưới dạng mảng các đối tượng Todo.
    public todos: Todo[] = [];

    // Thêm công việc mới vào cuối danh sách.
    addTodo (content: string) {
        index++;
        let newTodo = new Todo(index, content);
        this.todos.push(newTodo);
    }

    // Xóa công việc tại vị trí bất kỳ.
    removeTodo (id: number) {
        let index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
            return true;
        }
        return false;
    }

    // Cập nhật nội dung công việc tại vị trí bất kỳ.
    updateTodo (id: number, content: string) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.content = content;
            return true;
        }
        return false;
    }

    // In ra toàn bộ danh sách công việc, hiển thị trạng thái hoàn thành hoặc chưa hoàn thành nhưng sắp xếp các phần tử todo theo alphabet.
    sortTodo () {
        console.log("Sắp xếp theo nội dung todo");
        this.todos.sort((a, b) => a.content.localeCompare(b.content));
        console.log("Danh sách công việc sau khi sắp xếp:");
        this.listTodos();
    }

    // Tìm kiếm todo theo content truyền vào. Hiển thị ra vị trí đầu tiên của todo nếu tìm được, 
    // hiển thị ra “Không tìm thấy” nếu không tìm được todo trong danh sách.
    findTodo (content: string) {
        const result: Todo[] = this.todos.filter(todo => todo.content.includes(content));
        console.log("Kết quả tìm kiếm.");
        result.forEach(todo => console.log(todo));
    }

    // In ra toàn bộ danh sách công việc, hiển thị trạng thái hoàn thành hoặc chưa hoàn thành.
    listTodos () {
        for (let todo of this.todos) {
            console.log(todo);
        }
    }
}

class Main {
    private todoListManager: TodoListManager;

    constructor() {
        this.todoListManager = new TodoListManager();
    }

    run (): void {
        // B1: In ra menu
        // B2: Cho người dùng nhập vào các sự lựa chọn dựa vào menu
        // B3: If else để điều khiển 
        console.log("Quản lý danh sách công việc:");
        console.log("1. In ra danh sách công việc");
        console.log("2. Thêm công việc vào cuối danh sách");
        console.log("3. Xóa công việc tại vị trí bất kỳ");
        console.log("4. Sửa nội dung công việc tại vị trí bất kỳ");
        console.log("5. Sắp xếp và in ra nội dung công việc");
        console.log("6. Tìm kiếm công việc");
        console.log("7. Dừng chương trình");

        while(true) {
            let input = prompt("Hãy nhập lựa chọn của bạn:");

            if (input === null) {
                alert("Dừng chương trình thành công");
                break;
            }

            let number = parseInt(input, 10);
            if (isNaN(number)) {
                alert("Vui lòng nhập số hợp lệ");
                continue;
            }
            
            switch (number) {
                case 1:
                    this.todoListManager.listTodos();
                    break;
                case 2: 
                    let content = prompt("Nhập vào nội dung todo muốn thêm:");
                    if (content === null || content.trim() === "") {
                        alert("Vui lòng nhập nội dung công việc muốn thêm.");
                    } else {
                        this.todoListManager.addTodo(content);
                        alert("Thêm thành công vào danh sách.");
                    }
                    break;
                case 3:
                    let index = prompt("Nhập vào vị trí muốn xóa.");
                    if (index === null) {
                        alert("Dừng chương trình thành công.");
                        break;
                    }

                    let indexNumber = parseInt(index, 10);
                    if (isNaN(indexNumber) || indexNumber < 0) {
                        alert("Vui lòng nhập một số hợp lệ.");
                    } else {
                        const result = this.todoListManager.removeTodo(indexNumber);

                        if (result) {
                            alert(`Đã xóa thành công todo ở vị trí ${indexNumber}.`);
                        } else {
                            alert(`Không thể xóa todo ở vị trí ${indexNumber} không tồn tại.`);
                        }
                    }
                    break;
                case 4: 
                    let indexUpdate = prompt("Nhập vào vị trí bạn muốn cập nhật.");
                    if (indexUpdate === null) {
                        alert("Dừng chương trình thành công.");
                        break;
                    }

                    let contentUpdate = prompt("Nhập vào nội dung muốn cập nhật.");
                    if (contentUpdate === null) {
                        alert("Dừng chương trình thành công.");
                        break;
                    }

                    let idUpdate = parseInt(indexUpdate, 10);
                    if (isNaN(idUpdate) || idUpdate < 0) {
                        alert("Nhập vào một số hợp lệ.");
                    } else {
                        const result = this.todoListManager.updateTodo(idUpdate, contentUpdate);
                        if (result) {
                            alert(`Cập nhật thành công todo ở vị trí ${idUpdate}.`);
                        } else {
                            alert(`Không cập nhật được todo ở vị trí ${idUpdate} không tồn tại.`);
                        }
                    }
                    break;
                case 5: 
                    this.todoListManager.sortTodo();
                    break;
                case 6:
                    let contentFind = prompt("Nhập vào nội dung todo mà bạn muốn tìm kiếm.");

                    if (contentFind === null) {
                        alert("Dừng chương trình thành công.");
                        break;
                    }

                    this.todoListManager.findTodo(contentFind);
                    break;
                case 7:
                    alert("Dừng chương trình thành công.");
                    break;
                default:
                    alert("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
            }
        }
    }
}

let app = new Main();
app.run();
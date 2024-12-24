// // Xây dựng một ứng dụng quản lý danh sách công việc đơn giản.
// class Todo {
//     private _id: number;
//     private _content: string;
//     private _status: boolean;

//     constructor (id: number, content: string, status: boolean = false) {
//         this._id = id;
//         this._content = content;
//         this._status = status;
//     }

//     get id (): number { 
//         return this._id; 
//     }

//     get content(): string { 
//         return this._content; 
//     }

//     get status(): boolean {
//         return this._status;
//     }

//     set status (status: boolean) {
//         this._status = status;
//     }
// }

// class TodoListManager {

//     // Quản lý danh sách công việc todos dưới dạng mảng các đối tượng Todo.
//     public _todos: Todo[];

//     constructor() {
//         this._todos = [];
//     }

//     // Thêm công việc mới vào cuối danh sách.
//     addTodo (content: string) {
//         let id = Math.random() // 0 - 0.999999999999
//         let newTodo = new Todo(id, content);
//         this._todos.push(newTodo);
//         this.listTodos();
//     }

//     // Xóa công việc tại vị trí bất kỳ.
//     removeTodo (id: number) {
//         this._todos.splice(index -1, 1);
//     }

//     // Cập nhật nội dung công việc tại vị trí bất kỳ.
//     updateTodo (id: number, content: string) {

//     }

//     // In ra toàn bộ danh sách công việc, hiển thị trạng thái hoàn thành hoặc chưa hoàn thành nhưng sắp xếp các phần tử todo theo alphabet.
//     sortTodo () {

//     }

//     // Tìm kiếm todo theo content truyền vào. Hiển thị ra vị trí đầu tiên của todo nếu tìm được, 
//     // hiển thị ra “Không tìm thấy” nếu không tìm được todo trong danh sách.
//     findTodo (content: string): number {
//         return -1;
//     }

//     // In ra toàn bộ danh sách công việc, hiển thị trạng thái hoàn thành hoặc chưa hoàn thành.
//     listTodos (): void {
//         console.log("*************************");
//         if(this._todos.length === 0) {
//             console.log("Chưa có bất kỳ công việc nào cả!!!");
//         } else {
//             this._todos.forEach(function(element: Todo, index: number) {
//                 console.log(`${index + 1}.${element.content} - ${element.status ? "Hoàn thành" : "Chưa hoàn thành"}`);
//             });
//         }
//     }
//     getTodolength(): number {
//         return this._todos.length;
//     }
// }

// class Main {
//     private _todoListManager: TodoListManager;

//     constructor() {
//         this._todoListManager = new TodoListManager();
//     }

//     bootstrap (): void {
//         let loop: boolean = true;
//         // B1: In ra menu
//         // B2: Cho người dùng nhập vào các sự lựa chọn dựa vào menu
//         // B3: If else để điều khiển 
//         console.log("Chương trình bắt đầu...!!!");

//         console.log("Menu chức năng");
//         console.log("1. In ra danh sách công việc");
//         console.log("2. Thêm công việc vào cuối danh sách");
//         console.log("3. Xóa công việc tại vị trí bất kỳ");
//         console.log("4. Sửa nội dung công việc tại vị trí bất kỳ");
//         console.log("5. Sắp xếp và in ra nội dung công việc");
//         console.log("6. Tìm kiếm công việc");
//         console.log("7. Dừng chương trình");

//         let choice = prompt("Mời bạn nhập vào lựa chọn (1-7) để điều khiển chương trình:");
//         while (loop) {
//             switch (choice) {
//                 case "1":
//                     this._todoListManager.listTodos();
//                     break;
//                 case "2":
//                     let content = prompt("Mời bạn nhập vào công việc");
//                     if (!content) {
//                         console.log("Công việc thêm mới không hợp lệ !");
//                     } else {
//                         this._todoListManager.addTodo(content);
//                     }
//                     break;
//                 case "3":
//                     let input = prompt("Mời bạn nhập vào vị trí công việc muốn xóa");
//                     if(!input) {
//                         console.log("Vị trí cần xóa không hợp lệ");
//                     } else {
//                         let deleteIndex = +input;
//                         if(Number.isNaN(deleteIndex) || deleteIndex < 0 || deleteIndex > this._todoListManager.getTodolength()) {
//                             console.log("Vị trí cần xóa không hợp lệ")
//                         } else {
//                             this._todoListManager.removeTodo(deleteIndex);
//                         }
//                     }
//                     break;
//                 case "4":
//                     break;
//                 case "5":
//                     break;
//                 case "6":
//                     break;
//                 case "7":
//                     break;
//                 default: 
//                     console.log("Lựa chọn không hợp lệ");
//                     break;
//             }
//         }
//     }
// }

// const app = new Main();
// app.bootstrap();
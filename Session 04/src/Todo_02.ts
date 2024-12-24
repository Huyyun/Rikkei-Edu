// class Todo {
//   private _id: number;
//   private _content: string;
//   private _status: boolean;

//   constructor(id: number, content: string, status: boolean = false) {
//     this._id = id;
//     this._content = content;
//     this._status = status;
//   }
//   get id() {
//     return this._id;
//   }

//   get content() {
//     return this._content;
//   }

//   get status() {
//     return this._status;
//   }
// }

// class TodoListManager {
//   private _todos: Todo[];

//   constructor() {
//     this._todos = [];
//   }
//   addTodo(content: string): void {
//     // Thêm công việc vào cuối danh sách
//     let id = Math.random(); // 0 - 0.99999999999999999
//     let newTodo = new Todo(id, content);
//     this._todos.push(newTodo);
//     this.listTodos();
//   }
//   removeTodo(index: number): void {
//     // Xoá công việc tại vị trí bất kỳ
//     this._todos.splice(index - 1, 1);
//   }
//   updateTodo(index: number, content: string): void {
//     // Cập nhật nội dung công việc tại vị trí bất kỳ
//   }
//   sortTodo(): void {
//     // Hiển thị ra danh sách công việc đã được sắp xếp theo content (a-z)
//   }
//   findTodo(content: string): number {
//     // Tìm kiếm todo
//     return -1;
//   }
//   listTodos(): void {
//     // In ra danh sách công việc todo
//     console.log("*******************************");
//     if (this._todos.length === 0) {
//       console.log("Chưa có bất kỳ công việc nào cả !!!");
//     } else {
//       this._todos.forEach(function (element: Todo, index: number) {
//         console.log(
//           `${index + 1}. ${element.content} - ${
//             element.status ? "Hoàn thành" : "Chưa hoàn thành"
//           }`
//         );
//       });
//     }

//     console.log("*******************************");
//   }
//   getTodoLength(): number {
//     return this._todos.length;
//   }
// }

// class Main {
//   // Thuộc tính và phương thức dùng để vận hành chương trình
//   private _todoManager: TodoListManager;

//   constructor() {
//     this._todoManager = new TodoListManager();
//   }

//   bootstrap(): void {
//     let loop: boolean = true;
//     while (loop) {
//       console.log("Menu chức năng:");

//       console.log("1. In ra danh sách công việc.");
//       console.log("2. Thêm công việc vào cuối danh sách.");
//       console.log("3. Xóa công việc tại vị trí bất kỳ");
//       console.log("4. Sửa nội dung công việc tại vị trí bất kỳ");
//       console.log("5. Sắp xếp và in ra nội dung công việc");
//       console.log("6. Tìm kiếm todo");
//       console.log("7. Dừng chương trình.");

//       let choice = prompt(
//         "Mời bạn nhập vào lựa chọn (1-7) để điều khiển chương trình:"
//       );

//       switch (choice) {
//         case "1":
//           // Thực hiện tính năng (1)
//           this._todoManager.listTodos();
//           break;

//         case "2":
//           // Thực hiện tính năng (2)
//           let content = prompt("Mời bạn nhập vào công việc");
//           if (!content) {
//             console.log("Công việc thêm mới không hợp lệ !");
//           } else {
//             this._todoManager.addTodo(content);
//           }
//           break;

//         case "3":
//           // Thực hiện tính năng (3)
//           let input = prompt("Mời bạn nhập vào vị trí của công việc muốn xoá"); //
//           if (!input) {
//             console.log("Vị trí cần xoá không hợp lệ");
//           } else {
//             let deleteIndex = +input; // --> NaN
//             if (
//               Number.isNaN(deleteIndex) ||
//               deleteIndex < 0 ||
//               deleteIndex > this._todoManager.getTodoLength()
//             ) {
//               console.log("Vị trí cần xoá không hợp lệ");
//             } else {
//               this._todoManager.removeTodo(deleteIndex);
//               this._todoManager.listTodos();
//             }
//           }
//           break;

//         case "4":
//           // Thực hiện tính năng (4)
//           break;

//         case "5":
//           // Thực hiện tính năng (5)
//           break;

//         case "6":
//           // Thực hiện tính năng (6)
//           break;

//         case "7":
//           // Thực hiện tính năng (7)
//           console.log("Cảm ơn, hẹn gặp lại !!!!");
//           loop = false;
//           break;

//         default:
//           console.log("Lựa chọn không hợp lệ !!!");
//           break;
//       }
//     }
//   }
// }

// const app = new Main();
// app.bootstrap();

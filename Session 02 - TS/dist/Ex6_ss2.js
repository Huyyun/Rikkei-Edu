"use strict";
let stores = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100 }
];
let carts = [];
function displayStoresAndCarts() {
    console.log("Danh sách sản phẩm trong cửa hàng:");
    stores.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Count: ${product.count}`);
    });
    console.log("\nDanh sách sản phẩm trong giỏ hàng:");
    carts.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Count: ${product.count}`);
    });
}
function handleUserInput() {
    let input = prompt("Nhập lệnh (C/R/U/D/E):");
    if (!input)
        return;
    switch (input.toUpperCase()) {
        case 'C':
            let productNameToAdd = prompt("Nhập tên sản phẩm muốn mua:");
            let productToAdd = stores.find(p => p.name.toLowerCase() === (productNameToAdd === null || productNameToAdd === void 0 ? void 0 : productNameToAdd.toLowerCase()));
            if (productToAdd && productToAdd.count > 0) {
                carts.push({ id: productToAdd.id, name: productToAdd.name, count: 1 });
                productToAdd.count -= 1;
                console.log(`${productToAdd.name} đã được thêm vào giỏ hàng.`);
            }
            else {
                console.log("Sản phẩm không có trong cửa hàng hoặc hết hàng.");
            }
            break;
        case 'R':
            displayStoresAndCarts();
            break;
        case 'U':
            const cartIndexToUpdate = parseInt(prompt("Nhập chỉ số giỏ hàng cần cập nhật:"), 10);
            if (cartIndexToUpdate >= 0 && cartIndexToUpdate < carts.length) {
                const newCount = parseInt(prompt("Nhập số lượng mới:"), 10);
                const cartItem = carts[cartIndexToUpdate];
                const storeItem = stores.find(p => p.id === cartItem.id);
                if (storeItem) {
                    const difference = newCount - cartItem.count;
                    if (storeItem.count >= difference) {
                        storeItem.count -= difference;
                        cartItem.count = newCount;
                        console.log("Cập nhật giỏ hàng thành công.");
                    }
                    else {
                        console.log("Không đủ hàng trong cửa hàng.");
                    }
                }
            }
            else {
                console.log("Chỉ số giỏ hàng không hợp lệ.");
            }
            break;
        case 'D':
            const cartIndexToDelete = parseInt(prompt("Nhập chỉ số giỏ hàng cần xóa:"), 10);
            if (cartIndexToDelete >= 0 && cartIndexToDelete < carts.length) {
                const cartItem = carts[cartIndexToDelete];
                const storeItem = stores.find(p => p.id === cartItem.id);
                if (storeItem) {
                    storeItem.count += cartItem.count;
                }
                carts.splice(cartIndexToDelete, 1);
                console.log("Sản phẩm đã được xóa khỏi giỏ hàng.");
            }
            else {
                console.log("Chỉ số giỏ hàng không hợp lệ.");
            }
            break;
        case 'E':
            console.log("Cảm ơn bạn đã đến với cửa hàng");
            return;
        default:
            console.log("Lệnh không hợp lệ.");
    }
    handleUserInput();
}
handleUserInput();

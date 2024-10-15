let products = [
    { id: 1, product_name: "Sản phẩm A", price: 100000 },
    { id: 2, product_name: "Sản phẩm B", price: 150000 },
    { id: 3, product_name: "Sản phẩm C", price: 50000 },
    { id: 4, product_name: "Sản phẩm D", price: 200000 }
];

function sortProductsByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
}

function displayProducts(products) {
    console.log("Danh sách sản phẩm sau khi sắp xếp theo giá tăng dần:");
    for (let product of products) {
        console.log(`ID: ${product.id}, Tên sản phẩm: ${product.product_name}, Giá: ${product.price} VND`);
    }
}

let sortedProducts = sortProductsByPrice(products);
displayProducts(sortedProducts);

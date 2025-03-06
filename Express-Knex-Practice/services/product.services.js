const db = require('../config/database');

module.exports.getAllProducts = async function () {
    // Truy vấn bảng product
    // Truy vấn bảng listing, tag, ...
    // Xử lý lại dl thành dạng tổng hợp
    // Để client có thể dễ dàng render
    // return db("products").select("*"); // Promise

    try {
        let result = await db("products as p")
            .join("listing as l", "p.id", "l.id")
            .select("p.*", "l.*"); // Promise
        // Transform - Chuyển đổi dữ liệu
        result = result.map(function (el, index) {
            return {
                id: el.id, 
                productName: el.productName, 
                status: el.status,
                listing: {
                    description: el.description,
                    price: el.price,
                    rate: el.rate,
                },
            };
        });
        return result;
    } catch (error) {
        error;
    }
};
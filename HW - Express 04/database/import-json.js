const fs = require('fs');
const pool = require('./database'); // Sử dụng kết nối từ database.js

async function importData() {
    const conn = await pool.getConnection();
    try {
        // Đọc file JSON
        const usersData = JSON.parse(fs.readFileSync("../dev-data/users.json", "utf-8"));
        const albumsData = JSON.parse(fs.readFileSync("../dev-data/albums.json", "utf-8"));
        const photosData = JSON.parse(fs.readFileSync("../dev-data/photos.json", "utf-8"));
    
        // Xóa dữ liệu cũ để tránh lỗi khóa ngoại
        await conn.execute("SET FOREIGN_KEY_CHECKS = 0;");
        await conn.execute("DELETE FROM photos;");
        await conn.execute("DELETE FROM albums;");
        await conn.execute("DELETE FROM users;");
        await conn.execute("SET FOREIGN_KEY_CHECKS = 1;");
    
        console.log("Đã xóa dữ liệu cũ!");
    
        // Nhập dữ liệu vào bảng users
        for (const user of usersData) {
          await conn.execute(
            `INSERT INTO users (id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, company_name, company_catchphrase, company_bs, interests)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              user.id, user.name, user.username, user.email,
              user.address.street, user.address.suite, user.address.city, user.address.zipcode,
              user.address.geo.lat, user.address.geo.lng,
              user.phone, user.website,
              user.company.name, user.company.catchPhrase, user.company.bs,
              JSON.stringify(user.interests) // Chuyển đổi `interests` thành chuỗi JSON
            ]
          );
        }
        console.log("Đã nhập dữ liệu vào bảng users!");
    
        // Nhập dữ liệu vào bảng albums
        for (const album of albumsData) {
          await conn.execute(
            "INSERT INTO albums (id, user_id, title) VALUES (?, ?, ?)",
            [album.id, album.userId, album.title]
          );
        }
        console.log("Đã nhập dữ liệu vào bảng albums!");
    
        // Nhập dữ liệu vào bảng photos
        for (const photo of photosData) {
          await conn.execute(
            "INSERT INTO photos (id, album_id, title, url, thumbnail_url) VALUES (?, ?, ?, ?, ?)",
            [photo.id, photo.albumId, photo.title, photo.url, photo.thumbnailUrl]
          );
        }
        console.log("Đã nhập dữ liệu vào bảng photos!");
    
      } catch (error) {
        console.error("Lỗi nhập dữ liệu:", error);
      } finally {
        await conn.end();
      }
    }
    
    importData();
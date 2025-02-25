const express = require('express');
const router = express.Router();
const db = require('../database/database');

function buildQuery(baseQuery, filters, sortField, sortOrder, limit, offset) {
    let query = baseQuery;
    let queryParams = [];

    // Add filtering conditions
    if (filters.length > 0) {
        query += " WHERE " + filters.join(" AND ");
    }

    // Add sorting
    if (sortField) {
        query += ` ORDER BY ${sortField} ${sortOrder}`;
    }

    // Add pagination
    if (limit) {
        query += " LIMIT ?";
        queryParams.push(limit);
    }
    if (offset) {
        query += " OFFSET ?";
        queryParams.push(offset);
    }

    return { query, queryParams };
}

// 1️⃣ Lấy danh sách albums theo user_id với pagination & sorting
router.get('/users/:id/albums', function (req, res) {
    let userId = req.params.id;
    let { page = 1, limit = 10, sort = "id", order = "asc" } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);
    let offset = (page - 1) * limit;

    let baseQuery = "SELECT * FROM albums WHERE user_id = ?";
    let { query, queryParams } = buildQuery(baseQuery, ["user_id = ?"], sort, order, limit, offset);
    
    db.execute(query, [userId, ...queryParams])
        .then( function(data) {
            res.json({ page, limit, data: data[0] });
        })
        .catch( function(err) {
            console.log(err);
        });
});

// 2️⃣ Lấy danh sách photos theo album_id với pagination & sorting
router.get('/albums/:id/photos', function (req, res) {
    let albumId = req.params.id;
    let { page = 1, limit = 10, sort = "id", order = "asc" } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);
    let offset = (page - 1) * limit;

    let baseQuery = "SELECT * FROM photos WHERE album_id = ?";
    let { query, queryParams } = buildQuery(baseQuery, ["album_id = ?"], sort, order, limit, offset);
    
    db.execute(query, [albumId, ...queryParams])
        .then( function(data) {
            res.json({ page, limit, data: data[0] });
        })
        .catch( function(err) {
            console.log(err);
        });
});

module.exports = router;
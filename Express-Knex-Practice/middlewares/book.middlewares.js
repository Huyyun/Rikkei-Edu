const mysql = require("mysql2/promise");
const db = require("../config/database");

module.exports.handleQuery = function (req, res, next) {
  let { minPrice, maxPrice, minRate, maxRate, author_name, page, limit, sort, order } = req.query;
  let filters = [];
  let queryParams = [];

  if (minPrice && maxPrice) {
    filters.push("price BETWEEN ? AND ?");
    queryParams.push(parseFloat(minPrice), parseFloat(maxPrice));
  }

  if (minRate && maxRate) {
    filters.push("rate BETWEEN ? AND ?");
    queryParams.push(parseFloat(minRate), parseFloat(maxRate));
  }

  if (author_name) {
    filters.push("author_name = ?");
    queryParams.push(author_name);
  }

  let whereQuery = filters.length ? `WHERE ${filters.join(" AND ")}` : "";

  let orderQuery = sort && order ? `ORDER BY ${sort} ${order.toUpperCase()}` : "ORDER BY title ASC";

  let paginationQuery = page && limit ? `LIMIT ? OFFSET ?` : "";
  if (page && limit) {
    queryParams.push(parseInt(limit), (parseInt(page) - 1) * parseInt(limit));
  }

  let finalQuery = `SELECT * FROM books ${whereQuery} ${orderQuery} ${paginationQuery}`;
  req.finalQuery = mysql.format(finalQuery, queryParams);

  next();
};
// module.exports // {}
// module.exports.handleQuery = function (req, res, next) {
//     let { interests, page, limit, sort, order } = req.query;
//     console.log(interests);
//     console.log(page);
//     console.log(limit);
//     console.log(sort);
//     console.log(order);

    // Thứ tự của câu truy vấn SQL (SELECT)
    // SELECT
    // FROM
    // WHERE
    // GROUP BY
    // HAVING
    // ORDER BY
    // LIMIT
    // OFFSET
    // let baseQuery = `SELECT * FROM user`;
    // let paginationQuery = `LIMIT ... OFFSET ...`;
    // next();
// };

/ module.exports // {}
const mysql = require("mysql2/promise");

module.exports.handleQuery = function (req, res, next) {
  let { cities, page, limit, sort, order } = req.query;
  console.log(cities);
  console.log(page);
  console.log(limit);
  console.log(sort);
  console.log(order);

  // Thứ tự của câu truy vấn SQL (SELECT)
  // SELECT
  // FROM
  // WHERE
  // GROUP BY
  // HAVING
  // ORDER BY
  // LIMIT
  // OFFSET
  let baseQuery = `SELECT * FROM user`;
  // cities // ["South Elvis", "Mackenziehaven"];
  let whereQuery;
  if (!cities) {
    whereQuery = "";
  } else {
    let subQuery = cities
      .map(function (el, i) {
        // return `city = '${el}'`;
        return `city = ?`;
      })
      .join(" OR ");
    whereQuery = `WHERE id IN (
	                    SELECT address_id FROM address
	                WHERE ${subQuery}
                )`;
  }

  let orderQuery;
  if(!sort || !order) {
    orderQuery = "ORDER BY id ASC";
  } else {
    orderQuery = `ORDER BY ${sort} ${order.toUpperCase()}`;
  }

  let paginationQuery;
  if (!page || !limit) {
    paginationQuery = "";
  } else {
    paginationQuery = `LIMIT ${limit} OFFSET ${(+page - 1) * +limit}`;
  }

  console.log(paginationQuery);

  let finalQuery = `${baseQuery} ${whereQuery} ${orderQuery} ${paginationQuery}`;

  finalQuery = mysql.format(finalQuery, cities);

  req.finalQuery = finalQuery;
  next();
};
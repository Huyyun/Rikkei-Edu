module.exports = {
    development: {
        client: "mysql2",
        connection: {
            host: "localhost",
            // database: "fake-database",
            database: "book_express_knex",
            user: "root",
            password: "12345678" ,
        },
    },
};
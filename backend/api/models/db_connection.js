const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "api_db",

})

db.connect((error) => {
    if (error) {
        console.log("Error connecting to database")
        throw error;

    }
    else {
        console.log("Successfully connected to the database")
    }
})

module.exports = db;


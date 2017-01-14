var pg = require('pg');
var connString = '';

if(process.env.DATABASE_URL !== undefined) {
    console.log('env connection string');
    connString = process.env.DATABASE_URL;
    pg.defaults.ssl = true;
} else {
    connString = 'postgres://localhost:5432/car-codes';
}

console.log("connString set to: ", connString);

module.exports = connString;

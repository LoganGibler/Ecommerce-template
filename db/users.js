const { Client } = require("pg");
const DB_NAME = "ecommercedb";
const DB_URL =
  process.env.DATABASE_URL || `postgres://postgres@localhost:5432/${DB_NAME}`;
const client = new Client(DB_URL);
// database methods

module.exports = {
    client,
  };
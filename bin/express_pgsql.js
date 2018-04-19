// const initOptions = {};
const pgp = require("pg-promise")
const db = pgp("postgres://username:password@host:port/database");

db
  .one("SELECT $1 AS value", 123)
  .then(function(data) {
    console.log("DATA:", data.value);
  })
  .catch(function(error) {
    console.log("ERROR:", error);
  });

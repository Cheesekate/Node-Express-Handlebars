// Import MySQL connection.
var connection = require("./connection");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function (table, callback) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: function (table, cols, vals, callback) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [table, cols, vals], function (err, data) {
      if (err) throw err;
      callback(data);
    });
  },

  updateOne: function (table, eaten, id, callback) {
    var queryString = "UPDATE ?? SET eaten = ? WHERE id = ?;";
    connection.query(queryString, [table, eaten, id], function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  deleteOne: function (id, callback) {
    var queryString = "DELETE FROM burgers WHERE id=" + id + ";";
    connection.query(queryString, [id], function (err, res) {
      if (err) throw err;
      callback(res);
    });
  },
};
module.exports = orm;

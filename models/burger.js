// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (res) {
      callback(res);
    });
  },
  // The constiables cols and vals are arrays.
  insertOne: function (vals, callback) {
    orm.insertOne("burgers", "burgers_name", vals, function (res) {
      console.log("Add a Burger to be eaten: ", vals);
      callback(res);
    });
  },

  updateOne: function (id, callback) {
    orm.updateOne("burgers", true, id, function (res) {
      callback(res);
    });
  },

  deleteOne: function (id, callback) {
    orm.deleteOne(id, function (res) {
      callback(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

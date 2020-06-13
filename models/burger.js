// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  getall: function (cb) {
    orm.Selectall("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createBurger: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateBurger: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  deleteBurger: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

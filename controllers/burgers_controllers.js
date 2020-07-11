const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    const burgerObj = {
      burgers: data,
    };
    console.log(burgerObj);
    res.render("index", burgerObj);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body.burgers_name, function (vals) {
    res.redirect("/");
  });
});

router.put("/api/burger/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
    res.send("success");
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  burger.deleteOne(req.params.id, function (data) {
    res.send("success");
  });
});

// Export routes for server.js to use.
module.exports = router;

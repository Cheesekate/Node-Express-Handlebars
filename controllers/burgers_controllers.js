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
    res.redirect("/")
  });
});

router.put("api/burgers/:id", function (req, res) {
  console.log(res);
  burger.updateOne(req.params.id, function (result) {
    console.log(result);
    res.redirect("/");
  });
});




router.post("/updateOne/:id", function (req, res) {
  const condition = "id = " + req.params.id;

  console.log("Condition is = " + condition);

  burger.updateOne(req.params.id, function () {
    res.redirect("/");
  });
});



router.post("/deleteOne/:id", function (req, res) {
  const condition = "id = " + req.params.id;

  burger.deleteOne(condition, function () {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
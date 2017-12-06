var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ Welcome: "Welcome to my server API Version I" });
});

module.exports = router;
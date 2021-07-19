const express = require("express");
const router = express.Router();
const db = require("../models");

// router.get("/api/authors", (req, res) => {
//     db.User.find({}).populate("genre").then((foundPizzas) => {
//         res.json({
//             error: false,
//             data: foundPizzas,
//             message: "Retrieved All Pizzas "
//         });
//     });
// });


module.exports = router;
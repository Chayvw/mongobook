const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/authors", (req, res) => {
    db.Book.find({}).populate("genre").then((foundPizzas) => {
        res.json({
            error: false,
            data: foundPizzas,
            message: "Retrieved All Pizzas "
        });
    });
});


router.post("/api/authors", (req, res) => {
    if (!req.body.name || !req.body.name.trim().length) {
        return res.status(400).json({
            error: true,
            data: null,
            message: "Please enter valid information"
        })
    }
    db.Book.create(req.body).then((addedAuthor) => {
        res.json({
            error: false,
            data: addedAuthor,
            message: "Successfully created added new title to you database"

        })
    }).catch((err) => {
        res.status({
            error: true,
            data: null,
            message: "unable to add new author"
        })
    })
});
router.put("/api/authors/:id", (req, res) => {
    // dynamically accept a new genre to add
    const genreToAdd = req.body.ingredientToAdd;
    // find one and update passes through a filter and an update _id is the filter and req.params.id is the update
    db.Book.findOneAndUpdate(
        { _id: req.params.id }, 
        { $push: { genre:genreToAdd } },
        { new: true }
    )
        .then((updatedAuthors) => {
            console.log(updatedAuthors);
            res.json({
                error: false,
                data: updatedAuthors,
                message: "Successfully authors in your database"
            })
        }).catch((err) => {
            console.log(err);
            es.status({
                error: true,
                data: null,
                message: "unable to update author"
            });

        })
});

module.exports = router;
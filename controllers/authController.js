const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");



router.get("/api/user", (req, res)=>{
    db.User.find({}).then((foundUsers) =>{
        res.json({
           error:false,
            data: foundUsers,
            message: "Retrieved All Users "
        });
    });
});

router.post("/api/user", (req, res) => {
    db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password 
    }).then((createdUser) => {
        res.json({
            error: false,
            data: createdUser,
            message: "Successfully created a new user"

        })
    }).catch((err) => {
        res.status({
            error: true,
            data: null,
            message: "unable to create new user"
        })
    })
});

module.exports = router;
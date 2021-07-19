const express = require("express");
const router = express.Router();
const db = require("../models");



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
    // if (!req.body.name || !req.body.name.trim().length) {
    //     return res.status(400).json({
    //         error: true,
    //         data: null,
    //         message: "Please enter valid information"
    //     })
    // }
    db.User.create(req.body).then((createdUser) => {
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
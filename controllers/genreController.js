const express = require("express");
const router = express.Router();
const db = require("../models");
// READ
router.get("/api/genres", (req, res)=>{
    db.Genre.find({}).then((foundGenres) =>{
        res.json({
           error:false,
            data: foundGenres,
            message: "Retrieved All Pizzas "
        });
    });
});

//CREATE
router.post("/api/genres", (req, res)=>{
    if(!req.body.name || !req.body.name.trim().length){
        return res.status(400).json({
            error:true,
            data:null,
            message:"Please enter valid information"
        })
    }
    db.Genre.create(req.body).then((addedGenre) =>{
        res.json({
            error:false,
            data: addedGenre,
            message:"Successfully created added new title to you database"
        
        })
    }).catch((err) =>{
        res.status({
            error:true,
            data:null,
            message:"unable to add new author"
        })
    })
});



module.exports = router;
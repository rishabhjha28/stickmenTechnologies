const express = require('express');
const router = express.Router();
require("../db/connection");
const User = require("../model/userSchema");
const TokenCount = require("../model/tokenCountSchema");


router.get("/", (req, res) => {
    const data = req.query
    if(data.date){
        User.find(data,(err, docs) => {
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json(docs);
            }
        })
    }
    else{
        User.find((err, docs) => {
            if (err) {
                res.json({ error: err });
            }
            else {
                res.json(docs);
            }
        })
    }
});
router.post("/", async (req, res) => {
    const data  = req.body
    TokenCount.find(async (err,docs)=>{
        if(err){
            res.json({error:err})
        }
        else{
            let iniCount = docs[0].tokenCount;
            data.mobileNo.forEach(element => {
                data.token.push(iniCount++)
            });
            const newUser = new User(data);
            const saveUser = await newUser.save();
            if(saveUser){
                TokenCount.findByIdAndUpdate("63384d0b6bb80382b95d52b1",{tokenCount:iniCount},(err,docs)=>{
                    if(err){
                        res.json({error:err})
                    }
                    else{
                        res.status(201).json({message:'User Saved Successfully'})
                    }
                })
            }
            else{
                res.status(500).json({error:"Failed To Add User"})
            }
        }
    })
});

module.exports = router;
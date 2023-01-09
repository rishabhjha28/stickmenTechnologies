const express = require('express');
const router = express.Router();
require("../db/connection");

const pdfTemplate = require('./template')
const Admin = require("../model/adminSchema");
router.post("/",async(req,res)=>{
    const credentials = req.body
    Admin.findOne(credentials,(err,docs)=>{
        if(err){
            res.json({error:err})
        }
        else{
            res.json(docs)
        }
    })
})
module.exports = router;
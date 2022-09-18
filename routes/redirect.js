const express = require('express');

const router = express.Router();

const urModel = require('../models/UrlModel')

router.get('/:code',async(req,res) => {
    try{
        const url = await urModel.findOne({
            urlCode: req.params.code
        })
        if(url){
            res.redirect(url.longUrl)
        } else {
            res.status(404).json('Invalid Url')
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json("Server Error")
    }
})

module.exports = router;

const express = require('express');
const shortid = require('shortid');
const validUrl = require('valid-url');

const router = express.Router();

const UrlModel = require('../models/UrlModel');

const baseUrl = "http://localhost:3000"

router.post('/shorter',async (req,res) => {
    const {longUrl} = req.body

    if(!validUrl.isUri(baseUrl)){
        res.status(401).json("Invalid Base URL");
    }

    const urlCode = shortid.generate()

    if(validUrl.isUri(longUrl)){
        try{
            const url = await UrlModel.findOne({longUrl})
            if(url){
                res.json(url)
            } else {
                const shortUrl = baseUrl + "/" + urlCode
                const newUrl = new UrlModel({
                    urlCode,
                    longUrl,
                    shortUrl,
                    date: new Date()
                })
                await newUrl.save()
                res.json(newUrl)
            }
        } catch(err){
            console.log(err)
            res.status(500).json('Server Error')
        }

    } else {
        res.status(401).json("Invalid Long Url");
    }
})

module.exports = router;

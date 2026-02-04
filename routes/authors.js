const express = require('express')
const router = express.Router()
const Author = require('../models/author')

//all Authors,Route
router.get('/',(req,res)=>{
    res.render('authors/index')
})

// New Author Route
router.get('/new',(req,res)=>{
    res.render('authors/new',{author: new Author()})
})

//create Author Route
router.post('/',(req,res)=>{
    res.send( req.body.name)
})

module.exports = router

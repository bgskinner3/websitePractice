const productRouter = require('express').Router()
const Product = require('../db/product')



productRouter.get('/' , async (req,res,next) => {
  try {
    const allproducts = await Product.findAll()
    res.json(allproducts)
    
  } catch (error) {
    console.error(error)
    
  }
})

module.exports = productRouter
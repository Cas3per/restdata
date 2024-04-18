const express = require('express')

const { deleteProduct, getAllProduct, getNewProduct, getSingleProduct, UpdateNewProduct} = require('./userProduct')
const router = require('./userRoute')

router.route('/products').get(getAllProduct).post(getNewProduct)

router.route('/products/:id').get(getSingleProduct).put(UpdateNewProduct).delete(deleteProduct)


module.exports = router


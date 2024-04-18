
const express = require('express')
const { getAllUsers, getSingleUser, createAUser, updateUser, deleteUser } = require('./userController')


const router = express.Router()

router.route("/users").get(getAllUsers).post(createAUser)

router.route("/users/:id").get(getSingleUser).put(updateUser).delete(deleteUser)


module.exports = router

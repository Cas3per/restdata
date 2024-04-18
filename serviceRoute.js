const express = require ('express')

const { getNewService, UpdateNewService, deleteService, getAllService, getSingleService} = require('./userServices')
const router = express.Router()

router.route('/services').get(getAllService).post(getNewService)

router.route('/services/:id').get(getSingleService).put(UpdateNewService).delete(deleteService)



module.exports = router
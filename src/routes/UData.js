const express = require('express')
const router = new express.Router()
const udata_controller = require('../controllers/uDataController')
const auth = require('../middleware/auth')

router.post('/addlist', auth, udata_controller.uData_list_post)

module.exports = router
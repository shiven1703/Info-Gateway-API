// third-party module import
const express = require('express')

// custom module import
const facebook = require('./Facebook')
const instagram = require('./Instagram')
const linkedin = require('./LinkedIn')

// util import
const { echo } = require('../utils/echo')

const router = express.Router()

router.use('/facebook', facebook)
router.use('/instagram', instagram)
router.use('/linkedin', linkedin)
router.use('/echo/:echoParam', echo)

module.exports = router

// third-party module import
const express = require('express')

// custom module import
const facebook = require('./Facebook')
const instagram = require('./Instagram')
const linkedin = require('./LinkedIn')

// util import
const { echo } = require('../../utils/echo')

const router = express.Router()

router.use('/v1/facebook', facebook)
router.use('/v1/instagram', instagram)
router.use('/v1/linkedin', linkedin)
router.use('/v1/echo/:echoParam', echo)

module.exports = router

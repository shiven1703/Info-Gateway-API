// third-party module import
const express = require('express')

// custom module import
const facebook = require('./Facebook')
const instagram = require('./Instagram')
const linkedin = require('./LinkedIn')
const docs = require('./docs')

// util import
const { echo } = require('../utils/echo')

const router = express.Router()

router.use('/facebook', facebook)
router.use('/instagram', instagram)
router.use('/linkedin', linkedin)
router.use('/docs', docs)

router.use('/echo/:echoParam', echo)

router.use('/', (req, res) => {
  res.status(200).send('Home of info gateway api')
})

module.exports = router

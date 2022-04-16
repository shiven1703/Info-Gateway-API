const express = require('express')
const linkedinService = require('./linkedin.service')
const router = express.Router()

router.get('/', linkedinService.home)

router.route('/users').get(linkedinService.getUsers)

module.exports = router

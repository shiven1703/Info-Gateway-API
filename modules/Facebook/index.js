const express = require('express')
const facebookService = require('./facebook.service')
const router = express.Router()

router.get('/', facebookService.home)

router.route('/users').get(facebookService.getUsers)

module.exports = router

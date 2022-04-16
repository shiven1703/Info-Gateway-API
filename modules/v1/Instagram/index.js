const express = require('express')
const instagramService = require('./instagram.service')
const router = express.Router()

router.get('/', instagramService.home)

router.route('/users').get(instagramService.getUsers)

module.exports = router

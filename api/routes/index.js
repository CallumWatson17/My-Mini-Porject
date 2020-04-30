const router = require('express').Router()

const players = require('./players')
const managers = require('./managers')
const clubs = require('./clubs')

router.use('/managers', managers)
router.use('/players', players)
router.use('/clubs', clubs)

module.exports = router

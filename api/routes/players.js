const router = require('express').Router()
const playersController = require('../controllers/players')

// When we go to the /players route we want to execute this controller function
router.route('/').get(playersController.getPlayers)

// /players/:id (e.g players/lionel%messi)
router.route('/:name').get(playersController.getSinglePlayer)

module.exports = router

const router = require('express').Router()
const clubsController = require('../controllers/clubs')

// When we go to the /players route we want to execute this controller function
router.route('/').get(clubsController.getClubs)

// /players/:id (e.g players/lionel%messi)
router.route('/:name').get(clubsController.getSingleClub)

module.exports = router

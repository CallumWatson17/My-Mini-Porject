const router = require('express').Router()
const managersController = require('../controllers/managers')

// When we go to the /players route we want to execute this controller function
router.route('/').get(managersController.getManagers)

// /players/:id (e.g players/lionel%messi)
router.route('/:name').get(managersController.getSingleManager)

module.exports = router

const clubs = require('../models/clubs')

exports.getClubs = (req, res) => res.json(clubs)

exports.getSingleClub = (req, res) => {
    const paramName = req.params.name.toLowerCase()

    const singleClubs = clubs.filter((clubs) => {
        const clubsName = clubs.name.toLowerCase()
        return clubsName.includes(paramName)
    })

    res.json(singleClubs)
}

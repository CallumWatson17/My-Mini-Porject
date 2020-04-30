const players = require('../models/players')

exports.getPlayers = (req, res) => res.json(players)

exports.getSinglePlayer = (req, res) => {
    const paramName = req.params.name.toLowerCase()

    const singlePlayer = players.filter((player) => {
        const playerName = player.name.toLowerCase()
        return playerName.includes(paramName)
    })

    res.json(singlePlayer)
}

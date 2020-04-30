const managers = require('../models/managers')

exports.getManagers = (req, res) => res.json(managers)

exports.getSingleManager = (req, res) => {
    const paramName = req.params.name.toLowerCase()

    const singleManager = managers.filter((manager) => {
        const managerName = manager.name.toLowerCase()
        return managerName.includes(paramName)
    })

    res.json(singleManager)
}

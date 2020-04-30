const express = require('express')
const jwt = require('jsonwebtoken')
const morgan = require('morgan')
const routes = require('./routes')
const cors = require('cors')

const app = express()
const PORT = 4000

// Setup middleware
app.use(cors())
app.use(morgan('dev'))
app.use('/', cors(), routes)

// Run server
app.listen(PORT, () =>
    console.log(`[SERVER] - Server is up and running on ${PORT}`)
)

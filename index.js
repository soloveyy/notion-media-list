const express = require('express')
const getMedia = require('./services/notion');
const PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT, console.log(`Server is starting on port: ${PORT}`))
var express = require('express')
var { color } = require('./lib/color.js')

const PORT = process.env.PORT || 80 || 5000 || 9000
const app = express()

var apirouter = require('./routes/api')

app.use('/api', apirouter)

app.use(function (req, res, next) {
    res.status(404).json({
        status: false,
        message: "Page not found"
    })
})

app.listen(PORT, () => {
  console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app
var express = require('express')
var app = express()
app.use(express.static('public'))
app.get('./json', function (request, response) {
  response.json(123)
})
app.listen(3000, function () {
  console.log(3000)
})

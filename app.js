var express = require('express')
var app = express()
app.use(express.static('public'))
// var users = [
//
// ]
app.get('/json', function (request, response) {
  response.json({"title" : "按揭计算器"})
})
app.listen(3000, function () {
  console.log(3000)
})

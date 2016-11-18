var express = require('express')
var app = express()
app.use(express.static('public'))
var users = {"title" : "按揭计算器"}
app.get('/json', function (request, response) {
  response.json(users)
})
app.listen(3000, function () {
  console.log(3000)
})

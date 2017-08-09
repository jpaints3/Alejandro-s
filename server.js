var express = require("express")
var logger = require("morgan")
var bodyParser = require("body-parser")

var app = express()

app.get('/', function(request, response){
    response.render('home.ejs')
})

app.set('view engine', 'ejs')

app.use (express.static('views'))
app.set ('views', __dirname + '/views')
app.use(logger('dev'))

var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log (`App running on ${port} hamsters`)
})


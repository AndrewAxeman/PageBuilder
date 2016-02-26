'use strict'
var http = require('http')
var path = require('path')
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

/**
* Set the parameters
*/

var app = express()
var port = 9000

/**
* Configure app
*/
mongoose.connect( 'mongodb://Axeman:0000@ds053305.mongolab.com:53305/brutto',
	function() { console.log('Connected to db') } )

app.use( express.static( path.join( __dirname, './public' ) ))

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 

/**
* Require frontend dir public
*/

app.get( '/', function( req, res ) {
res.sendFile( path.join( __dirname, './public' ) )

} )


/**
* Listen port
*/

http.createServer( app ).listen( port, function ( err ) {
console.log( 'Server running with port : '+ port )
})

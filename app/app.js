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
var port = 7777




/**
* Configure app
*/
mongoose.connect( 'mongodb://Axeman:0000@ds053305.mongolab.com:53305/brutto',
	function() { console.log('Connected to db') } )

app.use( express.static( path.join( __dirname, '../view' ) ))
 
// parse application/json 
//app.use(bodyParser.json())
app.use( bodyParser.json( { limit: '50mb' } ))
app.use( bodyParser.urlencoded( { limit: '50mb', extended: true } ))

 

/**
* Require frontend dir public
*/

app.get( '/', function( req, res ) {
res.sendFile( path.join( __dirname, '../view' ) )

} )

var Routes = require( './router/index' )

var router = new Routes( app ) 
/**
* Listen port
*/

http.createServer( app ).listen( port, function ( err ) {
console.log( 'Server running with port : '+ port )
})

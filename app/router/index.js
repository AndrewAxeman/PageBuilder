'use strict'


var config = require('./config.js')


module.exports = class Router { 

    constructor( app ){

         this.app = app

         this.configup( config )

    }
	 
	 configup( route ){ 

         config.map( route => {

    	 this.app[ route.method ]( route.path, route.handler )

    	 })
     
     }
}

   

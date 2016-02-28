var mongoose = require( 'mongoose' )


var pages = mongoose.model( 'Pages', mongoose.Schema({

	name: { type: String, default: '' } ,
	
}) )

module.exports = pages
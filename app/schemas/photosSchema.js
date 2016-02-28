var mongoose = require( 'mongoose' )


var todos = mongoose.model( 'Todos', mongoose.Schema({

	text: { type: String, default: '' } ,
	id_name: { type: String, default: '' },
	state: { type: String, default: '' }
	
}) )

module.exports = todos
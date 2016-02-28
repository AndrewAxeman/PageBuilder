var mongoose = require( 'mongoose' )


var photos = mongoose.model( 'Photos', mongoose.Schema({

//	number: { type: String, default: '' },
	name: { type: String, default: '' },
	src: { type: String, default: '' }

})

module.exports = content
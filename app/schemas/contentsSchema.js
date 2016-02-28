var mongoose = require( 'mongoose' )

var contentsSchema = mongoose.Schema({

//	number: { type: String, default: '' },
	name: { type: String, default: '' },
	text: { type: String, default: '' }

})


var content = mongoose.model( 'Contents', contentsSchema )

module.exports = content
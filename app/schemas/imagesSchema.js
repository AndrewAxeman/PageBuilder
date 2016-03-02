var mongoose = require( 'mongoose' )


var images = mongoose.model( 'Images', mongoose.Schema({
	
    id_name: { type: String, default: '' },
	name: { type: String, default: '' },
	src: { type: String, default: '' }

})
)
module.exports = images
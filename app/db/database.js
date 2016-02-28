'use strict'

module.exports = class Driver {

	constructor( modelName ) {
		this.Model = require( '../schemas/' + modelName + 'Schema' )
	}

	create( params ,cb ){

		var obj = new this.Model(params)
		console.log( obj )
		obj.save( function ( err, entity ) {

		  cb( err, entity)

		})

	}


	getALL ( id_name, cb ) {

	this.Model.find( { id_name : id_name } , function ( err, entity ) {

			cb( err, entity )

		})
	}


	getOne ( params, cb ) {

		  this.Model.findOne( params, function ( err, entity ) {

		    if ( !err && !entity ) {
		      err = true
		    }

		    cb( err, entity )


		  })

	}


	getById ( id, cb ) {
		this.getOne({
			_id : id
		}, function ( err, entity ) {
			cb( err, entity )
		})
	}

	update ( opts, cb ) {

		this.Model.findOneAndUpdate( { _id: opts._id }, opts, {}, function ( err, result ) {
		  if ( err ) {
		    console.log('got an error');
		  }
		  cb( err, result )
		  
		})

    }

	delete ( id ,cb ){

         this.Model.findByIdAndRemove( { _id:id } ,  function ( err, result ){
		  if ( err ) {
		    console.log( err );
		  }
		  cb( err, result )
		  // at this point person is null.
		})
    }


}

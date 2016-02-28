'use strict'

var db = require('../db/database') 

var driverPages = new db ('pages')

module.exports = class Pages {
     
	 createpage( req, res ){
     console.log(req.body)
		driverPages.getOne( { name: req.body.name} , function ( err, entity ){ 

			if( entity === null ){

		         driverPages.create( { name: req.body.name }, function ( err, entity ){ 

			         res.json({ message: 'page completed', status: 200  }) 

		             console.log(err)

		         })           		
		         
			}else{

		        res.json({ message: 'This Pages Exist' }) 

			}
		})
			
     }


	deleteuser( req, res ){
         
		 driverPages.delete( req.body.id  , function ( err, result ){

		     console.log( err )

		     res.json({ message: 'We have a problem' })

	     } )
				
	} 

}
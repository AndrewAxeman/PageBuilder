'use strict'

var db = require('../db/database') 

var driverPages = new db ('pages')

module.exports = class Pages {
     
	 create_page( req, res ){
    
		driverPages.getOne( { name: req.body.name} , function ( err, entity ){ 

			if( entity === null ){

            var name = req.body.name.replace(/\s+/g,"")

				if( name !==''){

			         driverPages.create( { name: req.body.name }, function ( err, entity ){ 

				         res.json({ message: 'page completed', status: 200  }) 

			             console.log(err)

			         })

			    }else{
			    
                    res.json({ message: 'Enter Name' }) 

			    }                		
		         
			}else{

		        res.json({ message: 'This Pages Exist' }) 

			}
		})
			
     }


	delete_page( req, res ){
         
		 driverPages.delete( req.body.id  , function ( err, result ){

		     console.log( err )

		     res.json({ message: 'Page Delete' })

	     } )
				
	}

	update_page( req, res ){
    
         var name = req.body.name.replace(/\s+/g,"")
         
         if( name !==''){

			 driverPages.update( { _id: req.body.id , name: req.body.name }  , function ( err, result ){

			     console.log( err )

			     res.json( { message: "renamed" } )
       
		     } )

		 }else{
		 
             res.json({ message: 'Enter Name' })    

		 }    
		
	}
    
    getAllPages( req, res ){

	    driverPages.findAll( {} , function ( err, result){

         res.send( result )    
	    
		});
	}

    

}
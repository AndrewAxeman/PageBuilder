'use strict'

var db = require('../db/database') 

var driverContent = new db ('contents')

var driverPage = new db ('pages')

module.exports = class Content {

	delete_text( req, res ){

		 driverContent.delete( req.body.id  , function ( err, result ){

		     console.log( err )

		     res.json( { message: "Text was delete" } )
	     
	     } )
				
	} 


	update_text( req, res ){

		var name = req.body.name.replace(/\s+/g,"")

		var text = req.body.text.replace(/\s+/g,"")
           
        if( name !=='' && text !=='' ){
        
			 driverContent.update( { _id: req.body.id , name: req.body.name, text: req.body.text }  , function ( err, result ){

			     console.log( err )

			     res.json( { message: "Content update" } )
       
		     } )

		}else{
		
            res.json( { message:"Please enter name or text" } )

		}     
	
	}


	create_content( req, res ){

		var name = req.body.name.replace(/\s+/g,"")

		var text = req.body.text.replace(/\s+/g,"")
           
        if( name !=='' && text !=='' ){

	        driverPage.getOne( { _id: req.body.id_name } , function ( error, result ){

	             if ( result ){

						driverContent.create( { id_name: result._id  , name: req.body.name, text: req.body.text }, function ( err, entity ){ 

							res.json( { message: "Task was create" } )
	                
	                     })                    
			     
			     }else{
	            
	             res.json( { message: "Page is not found" }  )

			     }

			})

		}else{
		
             res.json( { message:"Please enter text"} )


		}	
			
    } 


    getAllContent( req, res ){
        
        driverPage.getOne( { _id: req.params.id } , function ( error, result ){

             if ( result !== null ){

				driverContent.getALL( result._id  , function ( err, entity ){

				res.send( entity )
		        
		        })

		     }else{

             	res.json( { message: 'No content on this page' } )

		     }   

         })
     }

}


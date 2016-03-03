'use strict'

var db = require('../db/database') 

var driverImage = new db ('images')

var driverPage = new db ('pages')

var fs = require( "fs" )
//var path = require( "path" )


module.exports = class Content {

	delete_photo( req, res ){

		 driverImage.delete( req.body.id  , function ( err, result ){
             
             fs.unlinkSync('../view/'+req.body.way)

		     console.log( err )

		     res.json( { message: "Image delete" } )
	     
	     } )
				
	} 


	add_photo( req, res ){

        var form=["gif","jpg","jpeg","psd","png"]

		var name = req.body.name.replace(/\s+/g,"")
          

        if( name !=='' && form.some(elem => elem === req.body.ext)){

        	// if( form.some(elem => elem === req.body.ext) ){

		        driverPage.getOne( { _id: req.body.id_name } , function ( error, result ){

		             if ( result ){
	     				
	 				     var base64Data = req.body.code.split(',')

				         var end = base64Data[1].replace(/ /ig, "+")

				         //path.join(__dirname, '../view/images' )
				                 
				         var path = "images/"+req.body.name+"."+req.body.ext
						
						 fs.writeFileSync( '../view/'+path , end, 'base64')


						driverImage.create( { id_name: result._id  , name: req.body.name, src: path }, function ( err, entity ){ 

							res.json( { message: "Image Add" } )
	                
	                     })                    
				     
				     }else{
		            
		             res.json( { message: "Page is not found" }  )

				     }

				})

			// }else{

   //            res.json( { message:"Upload photo"} )

			// }	

		}else{
		
             res.json( { message:"Fill in All, Man"} )


		}	
			
     } 


    getAllImages( req, res ){
        
        driverPage.getOne( { _id: req.params.id } , function ( error, result ){

             if ( result !== null ){

				driverImage.getALL( result._id  , function ( err, entity ){

				res.send( entity )
		        
		        })

		     }else{

             	res.json( { message: 'No Photo on this page' } )

		     }   

         })
     }

}
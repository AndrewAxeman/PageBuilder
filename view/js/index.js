$( document ).ready(function() {

    getAllPages()

});


function create_page( name ){
	fetch( 'http://127.0.0.1:7777/pages' , {
		method: 'post',
		headers: {  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        }, 
		body: 'name='+name
	})    
        
	.then( function ( response ) {

		response.json().then( function ( data ) {

		console.log( data.message )

		getAllPages()

		$('#FormContent').html('')

		$('#ChangeNamePage').val('')

		$('#InputPage').val('')

		$('#ContentBlock').css('display', 'none')

		$('#ImageBlock').css('display', 'none')

		})

	})

	.catch( function ( err ) { 
		console.log( 'Request failed', err ) 

	})

}

function delete_page( id ){

	fetch( 'http://127.0.0.1:7777/pages' , {
		method: 'delete',
		headers: {  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        }, 
		body: 'id='+id
	})    
        
	.then( function ( response ) {

		response.json().then( function ( data ) {

		console.log( data.message )

		getAllPages()
		
		})

	})

	.catch( function ( err ) { 
		console.log( 'Request failed', err ) 

	})

}


function update_page( id, name ){

	fetch( 'http://127.0.0.1:7777/pages' , {
		method: 'put',
		headers: {  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        }, 
		body: 'id='+id+'&name='+name
	})    
        
	.then( function ( response ) {

		response.json().then( function ( data ) {

		console.log( data.message )

		getAllPages() 

		$('#ChangeNamePage').val('')
		
		})

	})

	.catch( function ( err ) { 
		console.log( 'Request failed', err ) 

	})

}


function getAllPages() {

	fetch( 'http://127.0.0.1:7777/pages' )	
	.then( function ( response ) {

            $('#Pages').html('')


		response.json().then( function ( data ) {

			for ( var i = 0; i < data.length; i++ ) {

					$('#Pages').html(
					$('#Pages').html()+'<tr class="page" onClick="getAllImages(\''+data[i]._id+'\') " id="'+data[i]._id+'"><td>'+data[i].name+
					'</td><td><a href="#openModal" ><input type="button" value="Change" </a></td><td><input type="submit" value="Delete Page" onClick="delete_page(\''+data[i]._id+'\')"></td></tr>'
				)

			};
	
		})
	
	})

	.catch( function ( err ) { console.log( 'Request failed', err ) });

}






function create_contents( id, name ,text ){
    console.log(id)
	fetch( 'http://127.0.0.1:7777/content' , {
		method: 'post',
		headers: {  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        }, 
		body: 'id_name='+id+'&name='+name+'&text='+text
	})    
        
	.then( function ( response ) {

		response.json().then( function ( data ) {

		console.log( data )

		getAllContents( id )

		$('#InputContentName').val('')

		$('#InputContentText').val('')
		
		})

	})

	.catch( function ( err ) { 
		console.log( 'Request failed', err ) 

	})

}

function delete_text( id, id_page ){

	fetch( 'http://127.0.0.1:7777/content' , {
		method: 'delete',
		headers: {  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        }, 
		body: 'id='+id
	})    
        
	.then( function ( response ) {

		response.json().then( function ( data ) {

		console.log( data.message )

		getAllContents(id_page)
		
		})

	})

	.catch( function ( err ) { 
		console.log( 'Request failed', err ) 

	})

}


function update_content( id, name ,text, id_name ){
    
	fetch( 'http://127.0.0.1:7777/content' , {
		method: 'put',
		headers: {  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        }, 
		body: 'id='+id+'&name='+name+'&text='+text
	})    
        
	.then( function ( response ) {

		response.json().then( function ( data ) {

		console.log( data.message )

		getAllContents(id_name)

		$('#ChangeName').val('')

		$('#ChangeText').val('')
		
		})

	})

	.catch( function ( err ) { 
		console.log( 'Request failed', err ) 

	})

}


function getAllContents(id) {
    
   

	fetch( 'http://127.0.0.1:7777/content/'+id )	
	.then( function ( response ) {
	
		response.json().then( function ( content ) {

             $('#ContentBlock').css('display', 'block')
             $('#FormContent').html('')
             
             $("button").attr("id", id );

			for ( var i = 0; i < content.length; i++ ) {

					$('#FormContent').html(
					$('#FormContent').html()+'<tr id="'+content[i]._id+'"><td>'+content[i].name+
					'</td><td>'+content[i].text+
					'</td><td><a href="#openModal2" ><input type="button" value="Change" onClick="popUp(\''+content[i]._id+'\',\''+content[i].id_name+'\')"></a></td><td><input type="submit" value="Delete Page" onClick="delete_text(\''+content[i]._id+'\',\''+content[i].id_name+'\')"></td></tr>'
				)

			};
	
		})
	
	})

	.catch( function ( err ) { console.log( data.message ) });

}




function popUp( id, id_name ){

$(".popupbut").attr("_id", id );

$(".popupbut").attr("id_name", id_name );

}

$("#fileUpload").on('change', function ( e ) {

	var reader = new FileReader()

	var ext =e.target.files[0].name.split( '.' ) 
    
	reader.onload = function ( e ) {

		 

	     var arrImage = reader.result.split('')

	     // console.log( reader.result )

	     $('.photo').attr('photoTag', reader.result )
	     $('.photo').attr('photoImg', ext[1] )

	}

	reader.readAsDataURL( e.target.files[0] )


 });


function add_photo( id, name, code, ext ){
	
	// if(ext){

		fetch( 'http://127.0.0.1:7777/photo' , {
			method: 'post',
			headers: {  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
	        }, 
			body: 'id_name='+id+'&name='+name+'&code='+code+'&ext='+ext,
		})    
	        
		.then( function ( response ) {

			response.json().then( function ( data ) {
	        
	        getAllImages(id)

			console.log( data.message )

			$('#InputPhoto').val('')

			$('#fileUpload').val('')

			})

		})

		.catch( function ( err ) { 

			console.log( 'Request failed', err ) 

		})

	// }else{
      
 //         console.log( 'onload photo' )      
     
	// }	

}


// function add( id, name, code, ext ){

// $.ajax({
//   type: "POST",
//   url: "http://127.0.0.1:7777/photo",
//   data: 'id_name='+id+'&name='+name+'&code='+code+'&ext='+ext,
//   dataType: 'json',
//   success: function(msg){
//     //alert( "Прибыли данные: " + msg );
//   }
// });


// }

function delete_photo( id, id_image, way ){

	fetch( 'http://127.0.0.1:7777/photo' , {
		method: 'delete',
		headers: {  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        }, 
		body: 'id='+id+'&way='+way
	})    
        
	.then( function ( response ) {

		response.json().then( function ( data ) {

		console.log( data.message )

		getAllImages(id_image)
		
		})

	})

	.catch( function ( err ) { 
		console.log( 'Request failed', err ) 

	})

}


function getAllImages(id) {

	fetch( 'http://127.0.0.1:7777/photo/'+id )	
	.then( function ( response ) {
	     getAllContents(id)
		response.json().then( function ( image ) {
             
             $('.selected').removeClass('selected');
   			 $('#'+id).addClass('selected');

			 $('#ImageBlock').css('display', 'block')
             $('#FormImage').html('')           
             $("button").attr("id", id );

			for ( var i = 0; i < image.length; i++ ) {

					$('#FormImage').html(
					$('#FormImage').html()+'<tr id="'+image[i]._id+'"><td>'+image[i].name+
					'</td><td><img src="'+image[i].src+'" width="50" height="50"></td><td><input type="submit" value="Delete Image" onClick="delete_photo(\''+image[i]._id+'\',\''+image[i].id_name+'\',\''+image[i].src+'\')"></td></tr>'
				)

			};
	
		})
	
	})

	.catch( function ( err ) { console.log( data.message ) });

}





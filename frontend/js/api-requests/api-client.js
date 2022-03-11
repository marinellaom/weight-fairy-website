function api_client(url, content, callback ){

	fetch(url, content ) 
	.then((response)=>{
	response
	.json() 
	.then(object =>{
		
		var status = response.status
		callback(object, status)

		})
	})
	.catch((error)=>{

		console.log(JSON.stringify(error))
			callback(error)
		})
	}
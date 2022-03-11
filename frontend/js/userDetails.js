function getUserDetails(){
	var url = "http://localhost:8000/api/select?table=account_tbl?"
	var content = {
		method: 'GET'
    }
    
	api_client(url, content, (response, status)=>{

		// console.log("Response from api" +JSON.stringify(response))
		if(response.successful == true){

			var tableString = ""
			for (var index in response.data){
			
				tableString +=
                `      
                <ul class="w3-ul w3-large">
                <li>Name: ${response.data[index].name}</li>
                <li>Age: ${response.data[index].age}</li>
                <li>Gender:${response.data[index].gender}</li>
                <li>Height in cm: ${response.data[index].height}</li>
                <li>Weight in kg: ${response.data[index].weight}</li>
                <li>Target Weight: ${response.data[index].targetWeight} </li>
                <li>Weight Fairy Estimated Time: 2 months</li>
                </ul>
               
                `
}
                               
                        document.getElementById("showTasksID").style.visibility = "visible"; 
                        document.getElementById("goBackID").style.visibility = "visible"; 
                        document.getElementById("tableID").style.visibility = "visible"; 
                        document.getElementById("userLayout1").style.visibility = "hidden";
                        document.getElementById("userLayout2").style.visibility = "hidden";
                        document.getElementById("userLayout3").style.visibility = "hidden";
                        document.getElementById("nameButtonID").style.visibility = "hidden";
        
                        document.getElementById("tableID").innerHTML = tableString;

                        console.log("Response from api" +JSON.stringify(response.data))
		}
		else{
			
            alert("Get User Details Failed = "+ response.message)
		}
	})
}


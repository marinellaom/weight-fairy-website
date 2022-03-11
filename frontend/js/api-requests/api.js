//apiGetAllNotes function name is configurable
function apiGetUserDetails(callback){
        
    //THIS PARAM VARIABLE IS ALSO CONFIGURABLE... YOU CAN CHANGE THE VALUES OF THE KEY NAME
     let param = {
       //INDICATE WHAT KIND OF API IN THE api key
       api: "GET DETAILS",
       //INDICATE THE URL HERE OR WHAT THE BACKEND REQUIRES
       url: `${endpoint}/user-details`,
       //content KEY CONTAINS THREE KEY-VALUE PAIR.
       //1. METHOD --> WHAT HTTP VERB THE API REQUIRES (GO TO THE ROUTER PART TO KNOW)
       //2. HEADERS --> SEE THE apiDeleteNote FUNCTION FOR ANY IDEA
       //3. BODY -- > SEE ALSO THE apiDeleteNote FOR MORE DETAILS
       content: {
         method: 'GET'
       }
     }
     //DO NOT CHANGE ANYTHING HERE:
     api_client.sendRequest(param, 60, function (status, response) {
       if (status) {
         //THIS ONE IS CONFIGURABLE. YOU CAN CHANGE THE parseGetAllNotesResponse NAME
         parseGetAllNotesResponse(response, callback)
       }
       else {
         console.log(`Failed === ${JSON.stringify(response)}`)
         callback(JSON.stringify(response))
       }
     })
     
   
 }
 
 //THIS IS THE FUNCTION CALLED AFTER A SUCCESSFUL REQUEST
 function parseGetUserDetails(response, callback) {
     
         
     //IF THE BACKEND RESPOND WITH A STATUS OF 200
     if (response.status === 200) {
       response.json().then(object => {
        //THIS ONE IS CONFIGURABLE. THE OBJECT KEY NAME DEPENDS ON THE API.
        //object.successful BECAUSE THE API I MADE RETURNS A successful KEY.
         var returnData = {}
          returnData["status"] = object.successful;
          returnData["message"] = object.message;
          returnData["notesData"] = object.data;
          returnData["count"] = object["data"].length;
 
        //NOPE. DON'T TRY TO CHANGE THIS ONE.
         JS.callback(JSON.stringify(returnData), callback)
       })
     }
     //THIS IS FOR ERROR HANDLING
     else if (response.status === 404) {
       var returnData = {}
       returnData["status"] = false
       returnData["message"] = 404;
       callback(JSON.stringify(returnData))
     }
     else {
       response.json().then(object => {
         console.log(`Failed === ${JSON.stringify(object)}`)
         var returnData = {};
 
         returnData["status"] = false;
         returnData["message"] = object.message;
 
         callback(JSON.stringify(returnData));
       })
     }
   }
 
 
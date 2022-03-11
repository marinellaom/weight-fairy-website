// const { text } = require('body-parser');

// const accountForm = document.getElementById('accountForm')

// accountForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const formData = new FormData(this);
//     var url = `http://localhost:8000/user-details/insert?table=account_tbl`

//     fetch('account_tbl.sql', {
//         method: 'POST',
//         body: formData
//     }).then(function (response) {
//         return response.text();
//     }).then(function (text) {
//         console.log(text);
//     }).catch(function(error){
//         console.error(error);
//     })
// });

// api_client(url, content, (response, status)=>{
//     console.log(JSON.stringify(response))
//     if(response.successful == true){
//         alert("success")

//     }
//     else{
//         alert("failed")
//     }
// })


// function createAcc(name, age, gender, height, weight, targetWeight){
//     var accName = document.getElementById(name).innerHTML;
//     var accAge = document.getElementById(age).innerHTML;
//     var accGender = document.getElementById(gender).innerHTML;
//     var accHeight = document.getElementById(height).innerHTML;
//     var accWeight = document.getElementById(weight).innerHTML;
//     var accTargetWeight = document.getElementById(targetWeight).innerHTML;

//     console.log("name ="+ accName)
//     console.log("age ="+ accAge)
//     console.log("gender ="+ accGender)
//     console.log("height ="+ accHeight)
//     console.log("weight ="+ accWeight)
//     console.log("target weight ="+ accTargetWeight)

//     var dataArr = [];
//     dataArr.push({

//         "name": accName,
//         "age": accAge,
//         "gender": accGender,
//         "height": accHeight,
//         "weight": accWeight,
//         "targetWeight" : accTargetWeight
//     })
// }

// //api req

// var accDetails = {
//     data: dataArr
// }

// var url = `http://localhost:8000/api/insert?table=account_tbl?`
// var content = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(accDetails)
    
// }

// api_client(url, content, (response, status)=>{

//     console.log("Response from api" +JSON.stringify(response))
//     if(response.successful == true){
//         alert("Successfully created account")
//     }
//     else{
//         alert("Unable to create account")
//     }
// })





function createAcc(){

    var accName = document.getElementById("name").value;
    var accAge = document.getElementById("age").value;
    var accGender = document.getElementById("gender").value;
    var accHeight = document.getElementById("height").value;
    var accWeight = document.getElementById("weight").value;
    var accTargetWeight = document.getElementById("targetWeight").value;

    var dataArr = []
    dataArr.push({
        "name": accName,
        "age": accAge,
        "gender": accGender,
        "height": accHeight,
        "weight": accWeight,
        "targetWeight": accTargetWeight
    })


var accDetails = {
    data: dataArr
}

var url = `http://localhost:8000/api/insert?table=account_tbl`
var content = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(accDetails)
    
}

console.log("payload = "+JSON.stringify(content))

api_client(url, content, (response, status)=>{

    console.log("Response from api" +JSON.stringify(response))
    if(response.successful == true){
        alert("Successfully created account")
    }
    else{
        alert("Unable to create account")
    }
})
}

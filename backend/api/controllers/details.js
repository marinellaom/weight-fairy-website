var mysql = require('mysql');
var express = require('express');
var app = express();

const db = require('../db_connection');


app.get('/user-details', function(request, response){
    fetchData(response);
    console.log('Done. Data displayed!');
});


function executeQuery(sql, cb){
    db.query(sql, function(error, result, fields){
        if(error){throw err;}
        cb(result);
    });
}


function fetchData(response){
    executeQuery("SELECT * FROM account_tbl", function(result){
        console.log(result);
        response.write('<table><tr>');
        for(var column in result [0]){
            response.write('<td><label>'+ column +'</label></td>');
            response.write('</tr>');
        }
        for(var row in result){
            response.write('<tr>');
            for(var column in result[row]){
                response.write('<td><label>'+ result[row][column] +'</label></td>');
            }
            response.write('</tr>');
        }
        response.end('</table>');
    });
}



//api requests study

        app.get("/api/user-details", function(req, res, next){
            console.log("this is the userdetails file", req.query);

            res.send({
                success:true,
                message: 'this is the GET method',
                data: req.query
            })
        })

        app.post("/api/user-details", function(req, res, next) {
            console.log("this is the POST method");
    
            res.send({
                success:true, 
                message: 'this is the POST method',
                data: req.body
            });
        })


            //url or api ng put/patch/del dapat specified (ex: /api/user/:id)

        app.put("/api/user-details/:id", function(req, res, next) {
            console.log("this is the PUT method");
    
            res.send({
                success:true,
                message: 'this is the PUT method',
                data: req.params //getting the values from parameter
                });
            })

        app.patch("/api/user-details/:id", function(req, res, next) {
            console.log("this is the PATCH method");
            res.send({success:true, message: 'this is the PATCH method' });
            })


        app.delete("/api/user-details/:id", function(req, res, next) {
            console.log("this is the DELETE method");
            res.send({success:true, message: 'this is the DELETE method' });
            })

            
 
        app.listen(8000, function(){
            console.log('Listening to port 8000');
        });




        

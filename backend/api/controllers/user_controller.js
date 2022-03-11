const db = require('../models/db_connection');

    //TABLE VALIDATION

    exports.getAllData= (req, res, next)=>{

        var data = req.query.table
   
        if (data == "" || data == undefined){
            res.status(500).json({
                successful: false,
                message: "Missing table name"
            })
        }
        else{
           
            let search_sql = `SELECT * FROM account_tbl `;
            
            db.query(search_sql, (err, rows, result)=>{
                //IF THERE IS SOMETHING WRONG WITH THE CONNECTION TO THE DATABASE
                if(err){
                    console.log(JSON.stringify(err))
                res.status(500).json({
                    successful: false,
                    message: "No such table"
                    });
                }
                //THIS MEANS A SUCCESSFUL QUERY
                else{
                    //TAKE NOTE THAT MYSQL SENDS RESULTS IN A ROWS
                    if (rows.length == 0){
                        res.status(200).send({
                            successful: true,
                            message: "No data found",
                            data: []
                        });
                    }
                    else{
                        res.status(200).send({
                            successful: true,
                            message: `Found results (${rows.length})`,
                            data: rows
                        });
                    }
                    
                }
            })
        }
        
    }


    exports.insertData= (req, res, next)=>{

        var table = req.query.table
        var table_data = req.body.data
        if (table == "" || table == undefined){
            res.status(500).json({
                successful: false,
                message: "Missing table name"
            })
        }
        else if (table_data == "" || table_data == undefined){
            res.status(400).json({
                successful: false,
                message: "No table data included."
            })
        }
        else{
            let insert_sql = `INSERT INTO ${table} SET ?`;
            console.log("insert data = "+insert_sql)
            //INSERT QUERY IS DIFFERENT FROM OTHER QUERIES AS IT HAS THREE PARAMETERS
            //THE INSERT QUERY, TABLE COL VALUES, AND THE CALLBACK FUNCTION
            db.query(insert_sql, table_data, (err, result)=>{
                if(err){
                    res.status(500).json({
                            successful: false,
                            message: err
                        });
                }
                else{
                    res.status(200).json({
                        successful: true,
                        message: "Successfully inserted data"
                    });
                }
            });
        }
    }
    


// app.listen(8000);
// module.exports = db;

    


        
var express = require('express');
var router = express.Router();
var apiController = require('../controllers/user_controller');



router.post('/insert', apiController.insertData);

router.get('/select', apiController.getAllData);
// router.get('/select?table=account_tbl', apiController.getAllData);

// router.put('/update', apiController.updateById);
// router.get('/search', apiController.getDataByCol);
// router.delete('/delete', apiController.deleteByCol);
// router.delete('/clear', apiController.clearData);

const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    schema: "api_db",

})

module.exports = router;


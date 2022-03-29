module.exports = app=>{

    var employeeController = require('../controller/employee.controller.js');
    var router = require('express').Router();
console.log("TEST");
    

    router.post('/insert',employeeController.insertEMP);
    router.get('/view/:id',employeecontroller.viewbyid);
    router.get('/view',employeecontroller.view);
    router.get('/delete/:id',employeecontroller.delete);
    router.post('/update',employeecontroller.update);
    app.use('/emp',router);

};
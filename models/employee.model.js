const db = require('../db/db.js');


const employeeModel = function(employeeModel){
    this.emp_id = employeeModel.emp_id;
    this.emp_name = employeeModel.emp_name;
    this.emp_phone = employeeModel.emp_phone;
    this.emp_email = employeeModel.emp_email;
    this.emp_dob = employeeModel.emp_dob;
    this.emp_address = employeeModel.emp_address;
    this.emp_dept = employeeModel.emp_dept;
    this.emp_designation = employeeModel.emp_designation
} 
employeeModel.insert = (valuefromController, result) =>{
    var sqlQuery = `INSERT INTO employeedb (emp_name, emp_email, emp_phone, emp_dob, emp_address, emp_dept, emp_designation) VALUES
                    ('${valuefromController.emp_name}', '${valuefromController.emp_email}', '${valuefromController.emp_phone}',
                    '${valuefromController.emp_dob}', '${valuefromController.emp_address}', '${valuefromController.emp_dept}', 
                    '${valuefromController.emp_designation}')`;
console.log(sqlQuery);
    db.query(sqlQuery, (err, res)=>{
        console.log(res);
        console.log(err);
        if(res.affectedRows>0){
            result(null,res.affectedRows);
        }else{
            result(null,res.affectedRows);
        }

    });                  
}


employeeModel.view=(result)=>{
    var sqlQuery = `SELECT * FROM employeedb`;
    db.query(sqlQuery,(err,res)=>{
Console.log(res);
        if(err){
            console.log(err);
        }else{
            result(null,res);
        }
    });
    
}

employeeModel.update = (valuefromController, result) =>{
    var sqlQuery=`UPDATE employeedb SET emp_name='${valuefromController.emp_name}', emp_phone='${valuefromController.emp_phone}', emp_email='${valuefromController.emp_email}', emp_dob='${valuefromController.emp_dob}', emp_dept='${valuefromController.emp_dept}', emp_designation='${valuefromController.emp_designation}', emp_address='${valuefromController.emp_address}'WHERE emp_id=${valuefromController.emp_id}`;   
    Console.log(sqlQuery);
   db.query(sqlQuery,(err,res)=>{
    console.log(res);
    console.log(err);

    if(res.affectedRows>0){
        result(null,res.affectedRows);
    }else{
        result(null,res.affectedRows);
    }

   });
    
    }

employeeModel.viewbyid=(valuefromController,result)=>{
Console.log(valuefromController.emp_id);
        var sqlQuery = `SELECT * FROM employeedb WHERE emp_id=${valuefromController.emp_id}`;
Console.log(sqlQuery);
      db.query(sqlQuery,(err,res)=> {
         if(err)
            console.log(err);
          else
          result(null,res);
Console.log(res);
    });
    }

employeeModel.deletebyid=(valuefromController,result)=>{
Console.log(valuefromController.emp_id);
        var sqlQuery = `DELETE FROM employeedb WHERE emp_id=${valuefromController.emp_id}`;
Console.log(sqlQuery);
      db.query(sqlQuery,(err,res)=> {
         if(err)
            console.log(err);
          else
            result(null,res);
Console.log(res);
    });
    }



module.exports = employeeModel;
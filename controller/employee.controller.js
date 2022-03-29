const employeeModel = require('../models/employee.model.js');

//insert or create
exports.insertEMP= (req, res) =>{
    console.log("TEST controller");
    const emp = new employeeModel({
        emp_name:req.body.emp_name,
        emp_phone : req.body.emp_phone,
        emp_email : req.body.emp_email,
        emp_dob : req.body.emp_dob,
        emp_address : req.body.emp_address,
        emp_dept : req.body.emp_dept,
        emp_designation : req.body.emp_designation
    });
console.log(emp);
    employeeModel.insert(emp,(err, data)=>{
        console.log(err);
        console.log(data);
        if(err){
            res.json({status:0,message:"error while inserting"});
        }else if(data>0){
            res.json({status:1,message:"Success"});
        }else{
            res.json({status:0,message:"Failed to insert"});
        }
    });
}

//view or Read

exports.view=(req,res)=>{
    Console.log(req);
    employeeModel.view((err,data)=>{
        console.log(data);
        if(err){
            res.json({Status:0, Message:"failed to view"} );

        }else{
            res.json({data});

        }
    });
}

//update

exports.update=(req,res)=>{
    const emp=new employeeModel({
        emp_id :req.body.emp_id,
        emp_name :req.body.emp_name,
        emp_phone : req.body.emp_phone,
        emp_email : req.body.emp_email,
        emp_dob : req.body.emp_dob,
        emp_address : req.body.emp_address,
        emp_dept : req.body.emp_dept,
        emp_designation : req.body.emp_designation

    });
  
Console.log(emp);
    employeeModel.update(emp,(err,data)=>{
        Console.log(data);
    if(err)
        res.json({Status:0, Message:" Failed to update"} );
    else
        res.json({Status:1, Message:"updated successfully.."});
   
});

}



//view by id
exports.viewbyid=(req,res)=>{
    const emp = new employeeModel({
        emp_id: req.params.id

    });
Console.log(emp);
    employeeModel.viewbyid(emp,(err,data)=> {
Console.log(data);

    if(err)
        res.json({Status:0, Message:"Failed to show"} );
    else
        res.json({data});
   
});

}




//delete
exports.delete=(req,res)=>{
    const emp=new employeeModel({
        emp_id: req.params.id

    });
Console.log(emp);
    employeeModel.deletebyid(emp,(err,data)=> {
Console.log(data);
    if(err)
        res.json({Status:0, Message:"Failed to Delete"} );
    else
        res.json({Status:1, Message:"Deteled sucessfully"});
   
});

}
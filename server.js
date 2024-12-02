let express = require("express");
let cors = require("cors");
let mysql = require("mysql");
let multer = require("multer");




const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
      cb(null, 'uploads')
    },
    filename: (req, file, cb)=> {
      
      cb(null,   Date.now() +"_"+  file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


let app = express();
app.use(cors());
app.use('/uploads', express.static('uploads'));


let connection = mysql.createConnection({

    host:"localhost",
    database:"batch2212",
    user:"root",
    password:"root",
    port:3306
})

connection.connect((err)=>{

    if(err){
        console.log("Unable to Connect to DB")
    }else{
        console.log("Sucessfully Connect to DB")
    }
})


app.post("/validateLogin", upload.none(), (req,res)=>{

    console.log(req.body);

 let sqlQuery = `select * from Students where email = '${req.body.email}'`;

   connection.query(sqlQuery,(err,results)=>{

   if(err){
    res.json ({status: "failure",details:err})
   }else{

   console.log(results)


 if(results.length> 0){


  if(req.body.password==results[0].password){

    let userDetails = {

    name:results[0].name,
    email:results[0].email,
    profilePic:results[0].profilePic,
    mobileNo:results[0].mobileNo,
    batchId:results[0].batchID,
    studentID:results[0].studentID,
    }

    res.json({status: "Sucess",details:userDetails})
   }else{

    res.json({status: "Failure",details:"Invailid Password"})
   }


}else{
  res.json({status: "Failure",details:"Invailid UserName"})

}
    
   }
 })

    // res.json(["dummy Response"]);
})


app.post("/signup", upload.single("profilePic"), (req,res)=>{


   let  filePath = req.file.destination +"/"+ req.file.filename


   let sqlQuery = `insert into students (name, email, password, mobileNo , batchId , profilePic)values
   ('${req.body.name}','${req.body.email}',
  '${req.body.password}', '${req.body.mobileNo}','${req.body.batchId}','${filePath}')`
  

//  let sqlQuery = `insert into students (name, email, password, mobileNo, batchId, profilePic)values('${req.body.name}',
//   '${req.body.email}', '${req.body.password}, '${req.body.mobileNo}','${req.body.batchId}','${filePath}')`;


connection.query(sqlQuery,(err,results)=>{

    if(err){
        res.json(err)
    }else{
        res.json({status: "Sucess"})
    }
});

//   res.json(["Dummy Response"])

});


app.listen(6767,(req,res)=>{

  console.log("Listening to port 6767");
    
})



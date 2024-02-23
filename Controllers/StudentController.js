
const Student=require("../Models/Student")
const Classrooms=require("../Models/ClassRooms")
const Practice=require("../Models/Practice")


const details=(req,res)=>
{
    Student.find({})
    .then((result)=>{
        if(result){
        console.log(result);
        res.status(200).send(result)
        }
        else{
        res.status(500).send("can't find the doc");
        }
    })
    .catch((error)=>{
        res.status(500).send(error);
    });  
}

const classrooms=(req,res)=>{
    Classrooms.find({})
    .then((result)=>{
        if(result){
        console.log(result);
        res.status(200).send(result)
        }
        else{
        res.status(500).send("can't find the doc");
        }
    })
    .catch((error)=>{
        res.status(500).send(error);
    });  
}

const practice=(req,res)=>{
    const id=req.params.id;
    Practice.findOne({tid:id})
    .then((result)=>{
        if(result){
        res.status(200).send(result)
        }
        else{
        res.status(500).send("can't find the doc");
        }
    })
    .catch((error)=>{
        res.status(500).send(error);
    });  
}

const post_details=(req,res)=>{
const {cid,cname}=req.body;
Classrooms.find({cid,cname})
.then((result)=>{
    if(result){
        console.log(result);
        res.status(200).send(result);
    }
    else{
        res.status(500).send("can't find the doc!");
    }
  })
    .catch((err)=>{
        res.status(500).send(err);
    })
}

const quiz=(req,res)=>{
    const id=req.params.id;
    Practice.findOne({tid:id})
    .then((result)=>{
        if(result){
        res.status(200).send(result)
        }
        else{
        res.status(500).send("can't find the doc");
        }
    })
    .catch((error)=>{
        res.status(500).send(error);
    });  
}

module.exports={details,classrooms,practice,quiz,post_details}
import express from 'express';
import Student from '../models/student.js';
import { createStudents, getStudents } from '../controller/studentController.js';

const studentRouter=express.Router();


studentRouter.get('/',getStudents
    
    // (req,res)=>{
    // console.log("GET request received from students");

    // Student.find().then((student)=>{
    //         res.json(student);
    //     }).catch(()=>{
            
    //     })


    // }
)


studentRouter.post('/',createStudents
//     (req,res)=>{
//     // console.log("POST request received from students");
//     console.log(req.body);

//     const student = new Student({
//         name:req.body.name,
//         age:req.body.age,
//         city:req.body.city
//     })
//     student.save().then(()=>{
//         res.json({
//             message:"Student added successfully"
//         })
//     })
//     .catch(()=>{
//         res.json({
//             message:"Failed to add student"
//         })
//     })
// }
)

// studentRouter.put('/',()=>{
//     console.log("PUT request received from students");
// })

// studentRouter.delete('/',()=>{
//     console.log("DELETE request received from students");
// })

export default studentRouter;
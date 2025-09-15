
import Student  from "../models/student.js";
export function getStudents(req,res){
    // console.log("GET request received from students");

    Student.find().then((student)=>{
            res.json(student);
        }).catch(()=>{
            
        })

}

// export async function getStudents(req,res){
//     try{
//         const students=await Student.find();
//         res.json(students);
//     }
//     catch(err){
//         console.error(err);
//         res.status(500).json({
//             message:"Failed to reteive students"
//         })
//     }
// }

export function createStudents(req,res){
    // console.log("POST request received from students");

    if(req.user==null){
        res.status(401).json({
            message:"Please login and try again later"
        })
        return
    }

    if(req.user.role!="admin"){
        res.status(403).json({
            message:"You must be an admin to create a student"
        })
    }
    // console.log(req.body);

    const student = new Student({
        name:req.body.name,
        age:req.body.age,
        city:req.body.city
    })
    student.save().then(()=>{
        res.json({
            message:"Student added successfully"
        })
    })
    .catch(()=>{
        res.json({
            message:"Failed to add student"
        })
    })
}
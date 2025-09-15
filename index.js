// console.log("Hello, World");
import express from 'express';
import mongoose  from "mongoose";
import Student from './models/student.js';
import studentRouter from './routes/studentsRoutes.js';
import userRouter from './routes/userRouter.js';
import jwt from 'jsonwebtoken';
import productRouter from './routes/productRouter.js';

const app=express();

app.use(express.json())

//middleware
// app.use((req,res,next)=>{
//     let token=req.header("Authorization")
//    if(token!=null){
//     token=token.replace("Bearer","")
//     // console.log(token);
//     jwt .verify(token,"jwt-secret",
//         (err,decoded)=>{
//             console.log(decoded);
//         }
//     )
//    }
 
    
// })

app.use((req, res, next) => {
    let token = req.header("Authorization");
    if (token != null) {
        token = token.replace("Bearer", "").trim();
        jwt.verify(token, "jwt-secret", (err, decoded) => {
            if(decoded==null){
                res.json({
                    message:"Invalid token  please login again"
                })
                return

            }else{
              req.user=decoded;
            }
        });
    }
    next();
});

const connectionString="mongodb+srv://Kaveesha:kavee123@cluster0.jismfn6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(connectionString).then(
    () =>{
        console.log("Database connected");
    }
).catch( ()=>{
    console.log("Database connection failed");
})

app.use("/Students",studentRouter);

app.use("/Users",userRouter);

app.use("/Products",productRouter);


app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})
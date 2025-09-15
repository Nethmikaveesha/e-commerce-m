import mongoose  from "mongoose";
const studentSchema=new mongoose.Schema({
    name:String,
    age:Number,
    city:String
})

const Student=new mongoose.model("Student",studentSchema);
export default Student
import mongoose from "mongoose"

const Student = mongoose.model('Student', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
})

export default Student;
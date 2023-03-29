import mongoose from 'mongoose';

import Student from './models/student.js';


const start = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ICS');
        console.log("CONNECTED TO DATABASE");
    } catch (err) {
        console.log("FAILED TO CONNECT DATABASE");
    }
}

const find = async () => {
    // let data = await Student.findOne({ fname: "Peter", lname: "Parker" });
    // console.log(data);

    // results here will always be an array, regardless of how many matching documents were found
    let data = await Student.find({ age: { $gte: 17, $lte: 20 } });
    console.log(data);
}

const create = async () => {
    const newStudent = new Student({
        stdnum: "12345678",
        fname: "Juan",
        lname: "Dela Cruz",
        age: 20
    })

    await newStudent.save();
}

const update = async () => {
    let stud = await Student.updateOne({ stdnum: "12345678" }, { $set: { fname: "Peter" } });
    console.log(stud);
}

const main = async () => {
    await start();
    await find();
    // await create();
    await update();
    const data = await Student.findOne({ stdnum: "12345678" });
    console.log(data);
    process.exit();
}

export { start }
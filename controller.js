import Student from "./models/student.js";

const homepage = (req, res) => {
    res.send('Welcome to the home page');
}

const getStudents = async (req, res) => {
    res.send(await Student.find({}))
}

const findStudentsPost = async (req, res) => {
    res.send(await Student.find({ age: req.body.age }))
}

const addData = async (req, res) => {
    
}

export { homepage, getStudents, findStudentsPost };
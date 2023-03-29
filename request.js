import needle from "needle";

needle.post('http://localhost:3000/students-post', { age: 18 }, (err, res) => { console.log(res.body) })
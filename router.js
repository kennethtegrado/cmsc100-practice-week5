import { findStudentsPost, getStudents, homepage } from "./controller.js";

const router = (app) => {
    app.get('/', homepage);
    app.get('/students', getStudents);
    app.post('/students-post', findStudentsPost);

}

export default router;
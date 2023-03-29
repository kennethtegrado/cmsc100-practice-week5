import express from 'express';

import router from './router.js';
import { start } from './app.js';

const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log('SERVER STARTED ON PORT 3000');
await start()
app.listen(3000);
router(app);

export default app;
import express from 'express';
import bookRoutes from "./routes/bookRoutes.js";

import studentRoutes from "./routes/studentRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//create expres app
const app = express();

//to.parse.incoming.data
app.use(express.json());

//This use to Log the request on the console
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

/* Routes implementation */
app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes); 

try {
    const port = 3000; //Define port variables
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}
import express from 'express';
import bookRoutes from "./routes/bookRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

//create expres app
const app = express();


//to.parse.incoming.data
app.use(express.json());

/* Routes implementation */
app.use('/book', bookRoutes);
app.use('/student', studentRoutes);

try {
    const port = 3000; //Define port variables
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}
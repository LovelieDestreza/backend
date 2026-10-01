import express from 'express';
import bookRoutes from "./routes/bookRoutes.js";

//create expres app
const app = express();

/* Routes implementation */
app.use('/book', bookRoutes);

try {
    const port = 3000; //Define port variables
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}
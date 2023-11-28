import express from "express";
import cors from "cors";
import SearchRoutes from "./search/routes.js";
import session from "express-session";

const app = express();
app.use(
    cors({
        credentials: true, // support cookies
        origin: "http://localhost:3000" // restrict cross origin resource sharing to the react application
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false
};
app.use(session(sessionOptions));
app.use(express.json()); // must be AFTER session configuration
// app.get('/search', (req, res) => {
//     res.send('Hello World!');
// });
app.get('/', (req, res) => {
    res.send('Hello, this is the root endpoint!');
});
console.log("Server running successfully...")

SearchRoutes(app);

app.listen(4000);
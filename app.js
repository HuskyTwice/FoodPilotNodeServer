import express from "express";
import cors from "cors";
import SearchRoutes from "./search/routes.js";
import session from "express-session";

import { createRequire } from 'module';
import UserRoutes from "./users/routes.js";
import RestaurantRoutes from "./restaurants/routes.js";
import BookmarksRoutes from "./bookmarks/routes.js";
import FollowsRoutes from "./follows/routes.js";
import ContactRoutes from "./contact/routes.js";


// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/foodpilot'
// mongoose.connect(CONNECTION_STRING);
const require = createRequire(import.meta.url);
const mongoose = require('mongoose');
const url = 'mongodb+srv://teamfoodpilot:goodfood5610@foodpilot.efmu0r0.mongodb.net/FoodPilot?retryWrites=true&w=majority'
const connectionParams = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ');
        console.log(mongoose.Connection);
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const app = express();
app.use(
    cors({
        credentials: true, // support cookies
        // restrict cross origin resource sharing to the react application
        // origin: "http://localhost:3000"
        origin: "https://deployment-2--endearing-gumption-a4c4af.netlify.app/"
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
// app.use(express.json()); 
app.get('/', (req, res) => {
    res.send('Hello, this is the root endpoint!');
});
console.log("Server running successfully...")

SearchRoutes(app);
UserRoutes(app);
RestaurantRoutes(app);
BookmarksRoutes(app);
ContactRoutes(app);
FollowsRoutes(app);

app.listen(4000);

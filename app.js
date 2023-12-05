import express from "express";
import cors from "cors";
import SearchRoutes from "./search/routes.js";
import session from "express-session";

import { createRequire } from 'module';
import UserRoutes from "./users/routes.js";

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/foodpilot'
// mongoose.connect(CONNECTION_STRING);
const require = createRequire(import.meta.url);
const mongoose = require('mongoose');
const url = 'mongodb+srv://teamfoodpilot:goodfood5610@foodpilot.efmu0r0.mongodb.net/FoodPilot?retryWrites=true&w=majority'
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ');
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

// allowing picture upload
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var imgSchema = require('./model.js');
var fs = require('fs');
var path = require('path');
app.set("view engine", "ejs");
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });
 
app.get('/', (req, res) => {
    imgSchema.find({})
    .then((data, err)=>{
        if(err){
            console.log(err);
        }
        res.render('imagepage',{items: data})
    })
});

app.post('/', upload.single('image'), (req, res, next) => {
 
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgSchema.create(obj)
    .then ((err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});
 
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
app.use(express.json()); 
app.get('/', (req, res) => {
    res.send('Hello, this is the root endpoint!');
});
console.log("Server running successfully...")

SearchRoutes(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);
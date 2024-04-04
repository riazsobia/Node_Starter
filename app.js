const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes")

/* 
    Express
*/

const app = express();


/* 
    Define view engine 
*/

// FOR EXAMPLE: 
// app.set("views", path.join("./views"));
// app.set("view engine", "pug");


// Static Directory
app.use(express.static(path.join(__dirname, "public")));

// Parse raw requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
    Routing
*/
app.use("/", routes);

// Exports
module.exports = app;

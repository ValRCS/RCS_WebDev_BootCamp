
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here
const mylogger = (req, res, next) => {
  console.log(req.method + 
" " + req.path +" - " + req.ip );
  next();
}
app.use(mylogger);

// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */
// app.get("/", (req, res) => res.send("Hello Express"));

/** 3) Serve an HTML file */
app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

/** 4) Serve static assets  */
app.use("/", express.static(__dirname + '/public'));

/** 5) serve JSON on a specific route */
app.get("/json", (req,res) => res.json(handleStyle({"message": "Hello json"})));

/** 6) Use the .env file to configure the app */
 const handleStyle = (obj) => {
   if (process.env.MESSAGE_STYLE == "uppercase") {
     obj.message = obj.message.toUpperCase();
   } 
   return obj;
 }
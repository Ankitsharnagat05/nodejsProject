/* const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
app.disable("etag");

//ststic path 
const staticPath=path.join(__dirname,"../public/ststic files");
const templates=path.join(__dirname,"../template/views");


// Middleware to set no-cache headers

 
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});
 







// console.log(staticPath);
app.use(express.static(staticPath));


app.set("view engine","hbs");
app.set("views" ,templates);







//routing
app.get("",(req,res)=>{
    res.send("wellcom to home static page");
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.send("wellcom to our weather app search and find to your city weather");
})

app.get("*",(req,res)=>{
    res.send(" this page are not avalible in this href  opps! 404'!");
})

app.listen(8000,()=>{
    console.log("server are ready to use ");
}) 



 */

















 

/* 


const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

// Disable ETag
app.disable("etag");

// Static path
const staticPath = path.join(__dirname, "../public/static files");
const templates = path.join(__dirname, "../template/views");

// Middleware to set no-cache headers

 
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});
 

// Serving static files
app.use(express.static(staticPath));

// View engine setup
app.set("view engine", "hbs");
app.set("views", templates);

// Routing
app.get("", (req, res) => {
    res.send("welcome to home static page");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.send("welcome to our weather app search and find your city weather");
});

app.get("*", (req, res) => {
    res.send("this page is not available in this href - oops! 404!");
});

app.listen(8000, () => {
    console.log("server is ready to use on port 8000");
});
 */











/* 


const express = require("express");
const path = require("path");
const app = express();
app.disable("etag");

const staticPath = path.join(__dirname, "../public");
console.log(staticPath);

app.use(express.static(staticPath));

// Middleware to set no-cache headers
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});

app.get("", (req, res) => {
    res.send("welcome to our static page in our website");
});

app.get("/about", (req, res) => {
    res.send("you are present in about page");
});

app.get("*", (req, res) => {
    res.send("OOPS! this page is not present in this website");
});

app.listen(9000, () => {
    console.log("server is ready to use, you can access it");
});

















 */



const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
app.disable("etag");

const staticPath = path.join(__dirname, "../public");
const template=path.join(__dirname,"../template/views");
const partialPath = path.join(__dirname, "../template/partials");

// Set the view engine to hbs
app.set("view engine", "hbs");
app.set("views", template);
// Register partials
hbs.registerPartials(partialPath);

app.use(express.static(staticPath, {
    setHeaders: (res, path, stat) => {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
    }
}));
 

app.get("/home", (req, res) => {
    res.render("home")
});



app.get("/about", (req, res) => {
    res.render("about");
});



app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("", (req, res) => {
    res.send("welcome to our static page in our website");
});



app.get("*", (req, res) => {
    res.render("404error")
});

app.listen(9000, () => {
    console.log("server is ready to use, you can access it");
});







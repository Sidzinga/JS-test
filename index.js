import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;
app.use(express.urlencoded({extended:true}));
let save


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
  });


  app.get("/register", (req, res) => {

    // console.log(req.body.firstname)
    res.sendFile(__dirname + "/public/register.html");
  });
  app.get("/dashboard", (req, res) => {

let saved = localStorage


    res.sendFile(__dirname + "/public/dashboard.html");
  });
  app.post("/new", (req, res) => {


    // let email = req.body.email;


   localStorage.setItem("Users", req.body);

    res.sendFile(__dirname + "/public/register.html");
  });





  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
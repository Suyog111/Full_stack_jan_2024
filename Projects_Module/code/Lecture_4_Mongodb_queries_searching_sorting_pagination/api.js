
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
// including env variables
dotenv.config();
const { PORT, DB_PASSWORD, DB_USER } = process.env;
/**********************connection to our DB********************************/

const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ozpoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// once 
mongoose.connect(dbURL)
    .then(function (connection) {
        console.log("connected to db");
    }).catch(err => console.log(err))



// with this your creating simple app -> api
const app = express();
const UserRouter = require("./router/UserRouter");
const ProductRouter = require("./router/ProductRouter");

app.use(express.json());
app.use("/api/user", UserRouter);
app.use("/api/product", ProductRouter);

// app.get("/search", function (req, res) {
//     console.log(req.query);
//     res.status(200).json({
//         message:req.query,
//         status:"success"
//     })

// })

/******************handler functions ***************/
// 404 route not found
app.use(function cb(req, res) {
    // console.log("");
    // response 
    res.status(404).json({
        status: "failure",
        message: " route not found"
    })
})
// server -> run on a port 
app.listen(PORT, function () {
    console.log(` server is listening to port ${PORT}`);
})

/***
 * At code level -> prevent Repetiton -> Factory(controllers)
 * At file level -> structure to segregate the code  -> MVC
 * **/











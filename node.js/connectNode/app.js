const express = require("express");
const mongoose = require("mongoose");
const app = express(),
    bodyParser = require("body-parser");
port = 3080;
app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
    res.json(users);
    console.log("hgf");
});
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

// mongoose.connect("mongodb://localhost:27017/My-Health-Routine", (err) => {
//     if (!err) console.log("db connect");
//     else console.log("db error");
// });

// const NewSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     lastname: String,
// });
// app.listen(5000, () => {
//     console.log("Running");
// });

// const newModel = new mongoose.model("users", NewSchema);
// const data = async() => {
//     const result = await newModel.insertMany([
//         { name: "peretz", age: 22 },
//         { name: "shanit", age: 24, lastname: "kiprman" },
//     ]);
// };
// data.apply();

const express = require("express")
const services = require("./services/route")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://AbhijitRadke:7768916626@cluster0.v76zsxi.mongodb.net/costumer-cards", { useNewUrlParser: true })
    .then(() => console.log("Mongoose is connected"))
    .catch((err) => console.log(err.massage))

app.use("/", services)

app.listen(3000, () => console.log("express is runiong on Port 3000"))
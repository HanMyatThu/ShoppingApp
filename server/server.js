import express from "express";
const app = new express()
import connectDb from "./src/db/db.js";

connectDb()

app.get('/', (req,res) => {
    res.send('hello')
})

app.listen(3000, () => {
    console.log('server is connected to port 3000')
})
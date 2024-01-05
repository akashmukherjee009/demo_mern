import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/NoteRoute.js'
import dotenv from 'dotenv';
import jwt  from 'jsonwebtoken';
import bcrypt  from 'bcrypt';


const app=express()
app.use(cors())
app.use(bodyParser.json());




export const JWT_SECRET = process.env.KEY


app.get("/", (req,res)=>{
    res.send('hello')
})

app.use("/notes", router)






app.listen(5000,()=>{
    console.log(`Connected to 5000 `)
})
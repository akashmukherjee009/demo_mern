import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'


const app=express()
app.use(cors())

app.get("/", (req,res)=>{
    res.send('hello')
})






app.listen(5000,()=>{
    console.log(`Connected to 5000 `)
})
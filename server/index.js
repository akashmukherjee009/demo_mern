import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/NoteRoute.js'




const app=express()
app.use(bodyParser.json());
app.use(cors())

app.get("/", (req,res)=>{
    res.send('hello')
})

app.use("/notes", router)






app.listen(5000,()=>{
    console.log(`Connected to 5000 `)
})
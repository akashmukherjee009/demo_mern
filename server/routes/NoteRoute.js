import express from 'express'
import {createNote} from"../controllers/user.js"

const router=express.Router()

router.post("/",createNote)

module.exports = router
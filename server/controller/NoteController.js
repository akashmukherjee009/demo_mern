import User from"../models/User.js"

const createNote = async(req,res)=>{
    const newUser = new User(req.body)
    try{
        const saveUser = await newUser.save()
        res.status(200).json(saveUser)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {createNote}
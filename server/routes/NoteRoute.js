import express from 'express';
import { createNote, login } from '../controller/NoteController.js';
import { verifyToken } from '../middleware/VarifyToken.js';
import { body, validationResult } from 'express-validator'


const router = express.Router();

router.get('', (req, res) => {
  res.json({ message: 'GET request received' });
});

router.post('',[
  body('name').notEmpty().withMessage('Username must be at least 5 characters long'),
  body('email').notEmpty().isEmail().withMessage('Invalid email address'),
  body('password').notEmpty().isLength({ min: 4 }).withMessage('Invalid email address'),
  // Add more validation rules as needed
], createNote);
 // const dataFromBody = req.body; 
  // console.log(dataFromBody);
  // res.json({ message: 'POST request received', data: dataFromBody });

router.post('/login', login);

router.get('/home', verifyToken, (req,res)=>{
  res.status(200).json({ message: 'Protected route accessed' });
});


export default router;

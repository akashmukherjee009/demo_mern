import express from 'express';
import { createNote, getNotes } from '../controller/NoteController.js';


const router = express.Router();

router.get('', (req, res) => {
  res.json({ message: 'GET request received' });
});

router.post('', createNote);
 // const dataFromBody = req.body; 
  // console.log(dataFromBody);
  // res.json({ message: 'POST request received', data: dataFromBody });

export default router;

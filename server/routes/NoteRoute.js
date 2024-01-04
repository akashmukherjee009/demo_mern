import express from 'express';
import { createNote, login } from '../controller/NoteController.js';


const router = express.Router();

router.get('', (req, res) => {
  res.json({ message: 'GET request received' });
});

router.post('', createNote);
 // const dataFromBody = req.body; 
  // console.log(dataFromBody);
  // res.json({ message: 'POST request received', data: dataFromBody });

  router.post('/login', login);

export default router;

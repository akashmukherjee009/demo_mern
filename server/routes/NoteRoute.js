import express from 'express';

const router = express.Router();

router.get('', (req, res) => {
  res.json({ message: 'GET request received' });
});

router.post('', (req, res) => {
  const dataFromBody = req.body; 
  res.json({ message: 'POST request received', data: dataFromBody });
});

export default router;

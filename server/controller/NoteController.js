import pool from '../db.js';
import bcrypt from 'bcrypt';

export const createNote = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
        'INSERT INTO user_details (user_email, user_pass, user_name) VALUES ($1, $2, $3) RETURNING *',
        [email, hashedPassword, name ]
        );
        const createdNote = result.rows[0];
        res.status(201).json({
        message: 'Note created successfully',
        note: createdNote,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const login = async (req, res) => {
    
};

import pool from '../db.js';

export const createNote = async (req, res) => {
    try {
        const { email, password, name } = req.body;

        const result = await pool.query(
        'INSERT INTO user_details (user_email, user_pass, user_name) VALUES ($1, $2, $3) RETURNING *',
        [email, password, name ]
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

export const getNotes = async (req, res) => {
    console.log('Okk');
};

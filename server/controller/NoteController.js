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
    console.log("Here");
    try {
        const { email, password } = req.body;

        const result = await pool.query(
            'SELECT * FROM user_details WHERE user_email = $1',
            [email]
        );

        const user = result.rows[0];

        if (!user) {
            return res.status(200).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, user.user_pass);

        if (!passwordMatch) {
            return res.status(200).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }

};

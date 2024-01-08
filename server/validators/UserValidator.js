import { validationResult, check } from 'express-validator';

export const registrationValidationRules = () => {
    return [
        // Add more validation rules as needed
        check('email').isEmail().withMessage('Invalid email address'),
        check('password').isLength({ min: 4 }).withMessage('Password must be at least 8 characters long'),
        check('name').isLength({ min: 5 }).withMessage('Name must be at least 5 characters long'),
    ];
};
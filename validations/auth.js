const { body } = require('express-validator');

const registerValidation = [
    body('email').isEmail(),
    body('passowrd').isLength({ min: 6 }),
    body('name').isLength({ min: 3 }),
    body('surname').isLength({ min: 3 }),
    body('telephone').isLength({ min: 6 }),
    body('avatarUrl').optional().isURL(),
];

module.exports = {
    registerValidation
}
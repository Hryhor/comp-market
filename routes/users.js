const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
//const { validationResult } = require('express-validator');

//const { registerValidation } = require('../validations/auth');

//For save images
const storage = multer.diskStorage({
    destination: './assets/users/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage });

router.post('/register',  upload.single('userImage'), async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    res.json({ success: true });
});

module.exports = router;
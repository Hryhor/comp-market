const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { getProducts, createProduct, getProduct  } = require('../controllers/products');

//For save images
const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage });
// @route GET /api/products
// @desc Get all products
router.get('/', getProducts);

// @route GET /api/products
// @desc Get single product
router.get('/:id', getProduct);

// @route POST /api/products
// @desc create single product
router.post('/', upload.single('productImage'), createProduct);

module.exports = router;
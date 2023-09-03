const Product = require('../models/product');

const port = process.env.PORT;

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get product list. Try again.'});
    }
}

const createProduct = async (req, res) => {
    const errors = {};

    if (!req.body.name) {
        errors.name = { message: "Please enter a name" };
      }
    
      if (!req.body.price) {
        errors.price = { message: "Please enter a price" };
      }
    
      if (!req.body.description) {
        errors.description = { message: "Please provide a description" };
      }
    
      if (req.body.description.length > 700) {
        errors.description = { message: "Too long description" };
      }
    
      if (!req.body.rating) {
        errors.capacity = { message: "Please enter a rating" };
      }

      if (!req.file) {
        errors.planeImage = { message: "Please add a product photo" };
      }
    
      if (Object.keys(errors).length < 0) {
        return res.status(400).json(errors);
      }

    try {
        const { name, price, description, rating, } = req.body;

        const product = await Product.create({
            name, 
            price, 
            description, 
            rating,
            imageProduct: `http://localhost:${port}/static/${req.file.filename}`
        })

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create product. Try again.'});
    }
}

const getProduct = async (req, res) => {
  try {
    const product = await Product.find({_id: req.params.id});

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: 'Product not found. Try again.'});
  }
}

module.exports = {
    getProducts,
    createProduct,
    getProduct,
}
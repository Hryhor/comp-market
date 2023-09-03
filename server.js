const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000
const cors = require('cors');

//For parsing application json
app.use(express.json());

app.use(cors());
//For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
//Paths to folder with images
app.use("/static", express.static(__dirname + "/assets"));

app.use('/api/products', require('./routes/products'));
//app.use('/api/users', require('./routes/users'));

mongoose.connect("mongodb://localhost:27017").then(()=> {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    })
});


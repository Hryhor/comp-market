import axios from "axios";

const getProducts = async () => {
    const products = await axios.get('/api/products') //GET http://localhost:8000/api/products

    return products.data;
}

const productsService = {
    getProducts
}

export default productsService;
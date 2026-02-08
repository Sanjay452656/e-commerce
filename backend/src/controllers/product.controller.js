import Product from "../models/Product.js"

export const getProducts =async (req,res)=>{
    const products = await Product.find();
    res.json(products);
}

export const getProductsById = async (req,res) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({message:"Product not found"})
    }
    res.json(product)
}

export const createProduct = async (req,res) => {
    const {title,description,price,image,category,stock} =req.body;

    const product = new Product({
        title,
        description,
        price,
        image,
        category,
        stock
    })

    const createdProduct = await product.save();
    res.status(201).json(createdProduct)
}
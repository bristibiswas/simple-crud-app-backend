const Product = require('../models/product.model')


const getProducts = async(req,res) => {
    try{
        const products = await Product.find({});
         res.status(200).json(products)
     } catch(error) {
         res.status(500).json({message:error.message})
     }
};



const getOneProduct = async(req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)

    } catch{
        res.status(500).json({message:error.message})
    }
};

const createProduct = async(req,res) => {
    try{
        const productIn = await Product.create(req.body);
        res.status(200).json({productIn})
    } catch(error) {
        res.status(500).json({message:error.message});
    }
};


const updateProduct = async(req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id , req.body);

        if(!product) {
            return res.status(404).json({message:"Product not found !"})
        }
           const updateProduct = await  Product.findById(id);
           res.status(200).json(updateProduct)

    } catch(error){
        res.status(400).json({message:error.message})
    }
};


const deleteProduct = async(req,res) => {
    try{
        const {id} = req.params;
       const product =  await Product.findByIdAndDelete(id , req.body);

        if(!product) {
            return res.status(404).json({message:"Product not found !"});
        } 

        return res.status(200).json({message:"Product deleted successfully!"})

    } catch(error) {
        res.status(500).json({message:error.message})
    }
};




module.exports = {
    getProducts ,
    getOneProduct,
    createProduct ,
    updateProduct , 
    deleteProduct 
    

}
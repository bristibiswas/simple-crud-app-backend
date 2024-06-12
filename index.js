const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route.js');
const app = express();



//middleware
app.use(express.json());


//routes
app.use('/api/products' , productRoute)



app.get('/' , (req,res) => {
    res.send("hello from api server")
});







// app.post('/api/products',async (req,res) => {
//     try{
//         const productIn = await Product.create(req.body);
//         res.status(200).json({productIn})
//     } catch(error) {
//         res.status(500).json({message:error.message});
//     }
// });

    // app.get('/api/products' , async(req,res) => {
    //     try{
    //        const products = await Product.find({});
    //         res.status(200).json(products)
    //     } catch(error) {
    //         res.status(500).json({message:error.message})
    //     }
    // })


    // app.get('/api/products/:id' , async(req,res) => {
    //     try{
    //         const {id} = req.params;
    //         const product = await Product.findById(id);
    //         res.status(200).json(product)

    //     } catch{
    //         res.status(500).json({message:error.message})
    //     }
    // });

    //update a product

    // app.put('/api/products/:id' , async (req,res) => {
    //     try{
    //         const {id} = req.params;
    //         const product = await Product.findByIdAndUpdate(id , req.body);

    //         if(!product) {
    //             return res.status(404).json({message:"Product not found !"})
    //         }
    //            const updateProduct = await  Product.findById(id);
    //            res.status(200).json(updateProduct)

    //     } catch(error){
    //         res.status(400).json({message:error.message})
    //     }
    // })


    //delete a product 

    // app.delete('/api/products/:id' , async(req,res) => {
    //     try{
    //         const {id} = req.params;
    //        const product =  await Product.findByIdAndDelete(id , req.body);

    //         if(!product) {
    //             return res.status(404).json({message:"Product not found !"});
    //         } 

    //         return res.status(200).json({message:"Product deleted successfully!"})

    //     } catch(error) {
    //         res.status(500).json({message:error.message})
    //     }
    // })

mongoose.connect("mongodb+srv://bristibiswas:bristi123@nodebackend.82qqnjm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeBackend").then(() =>{
    console.log("connected to database!");
    app.listen(4000 , () =>{
        console.log("server is running on 4000");
    });
})
.catch(()=> {
    console.log("not connected to database!!!!");
});
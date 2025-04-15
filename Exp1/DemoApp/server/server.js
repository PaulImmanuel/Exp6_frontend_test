const express = require('express')
const cors = require('cors')

const UserModel = require('./User')
const ProductModel = require('./Products')  //Add a Product Model
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

//DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/Electricity')
.then(() => console.log('DB connected'))
.catch(err => console.log(err))

//Register API Route
app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(res.json('Data Saved Successfully'))
    .catch(err=>res.json(err))
    })



// Create Rest API (http://localhost:8000/addProduct)
app.post('/addProduct', async (req, res)=>{
    try {
        await ProductModel.create(req.body)
        res.json({ message: 'Product Added Successfully' })
    } 
    catch(error) {
        res.json(error)
    }
})

// Read All - Rest API (http://localhost:8000/viewProducts)
app.get('/viewProducts', async (req, res)=>{
    try {
        const records = await ProductModel.find()
        res.json(records)
    } 
    catch(error) {
        res.json(error)
    }
})

// Read By ID Rest API - to display before updation (EditProduct)
app.get('/findProduct/:id', async (req, res)=>{
    try {
        const record = await ProductModel.findById(req.params.id)
        res.json(record)
    } 
    catch(error) {
        res.json(error)
    }
})

// Update - REST API
app.put('/editProduct/:id', async (req, res)=>{
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
        )
        if (!updatedProduct) {
            return res.send('Item not found');
        }
        res.json({ message: 'Product Updated Successfully' });
    } 
    catch (err) {
        res.json(err);
    }
})

// Delete - REST API
app.delete('/deleteProduct/:id', async (req, res)=>{
    try {
        const deletedItem = await ProductModel.findByIdAndDelete({ _id: req.params.id })
        res.json({ message: 'Item Deleted Successfully!' });
    } 
    catch (error) {
        res.json(error);
    }
})



//Create API End Points (HTTP Request,Response)
app.get('/',(req,res)=>{
res.send('Welcome to Node JS Server')
})
//config PORT and Start Server
const PORT = 8000
app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`)
})
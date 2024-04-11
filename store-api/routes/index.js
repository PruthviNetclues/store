const express = require('express');
const router = express();
require('../models')
const upload = require('../middlewares/uploadImages');
const uploadPImages = require('../middlewares/uploadImages copy');
const {
    registerUser,
    login,
}  = require('../controller/createUser');
const  {listCategory,addCategory,updateCategory,deleteCategory} = require('../controller/categories');
const {listProducts,createProduct,updateProducts, deleteProducts} = require('../controller/product');
const {verifyToken} = require('../middlewares/authenticate');
// const login = require('../controller/createUser');

router.get('/',(req,res) => {
    res.send("Hello")
})

router.post('/api/upload',upload, (req,res) => {
    res.send(req.file);
    res.send("Uploaded Successfully");
})

//login and registration api's
router.post('/createUser/registerUser',upload,registerUser)
router.post('/createUser/login',login)

//category api's
router.get("/list", verifyToken, listCategory);
router.post("/addCategory", verifyToken, addCategory);
router.patch("/updateCategory/:id", verifyToken, updateCategory);
router.delete("/deleteCategory/:id", verifyToken, deleteCategory);

//productn api's
router.get("/listProducts",verifyToken,listProducts);
router.post("/createProducts",uploadPImages,verifyToken,createProduct);
router.patch("/updateProducts/:id",uploadPImages,verifyToken,updateProducts);
router.delete("/deleteProducts/:id",verifyToken,deleteProducts);

module.exports = router
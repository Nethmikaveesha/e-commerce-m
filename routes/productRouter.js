import express from "express";
import { createProduct, deleteProduct, getProductId, getProducts, updateProduct } from "../controller/productController.js";

const productRouter=express.Router();

productRouter.get("/",getProducts);
productRouter.post("/",createProduct);
productRouter.get("/search",(req,res)=>{
    res.json({
        message:"Search products "
    })
})
productRouter.delete("/:productID",deleteProduct);
productRouter.put("/:productID",updateProduct);
productRouter.get("/:productID",getProductId);


export default productRouter;
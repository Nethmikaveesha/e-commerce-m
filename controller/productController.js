import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export async function createProduct(req,res) {
    // if(req.user==null){
    //     res.status(401).json({
    //         message:"Please login and try again later"
    //     });
    //     return;
    // }
    // if(req.user.role!="admin"){
    //     res.status(403).json({
    //         message:"You are not authorized to create a product"
    //     });
    //     return;
    
    // }

    if(!isAdmin(req)){
        res.status(403).json({
            message:"You are not authorized to create a product"
        })
    }
    try{
        const productData=req.body;
        const product= new Product(productData);
        await product.save()
        res.json({
            message:"Product created successfully",
            product:product
        });

    }catch(err){
        console.error(err);
        res.status(500).json({
            message:"Failed to create product"
        })

    }
    
}
export async function getProducts(req,res){
    try{
        const products=await Product.find()
        res.json(products)
    }catch(err){
        console.error(err);
        res.status(500).json({
            message:"Failed to retrive products"
        })
    }
}

export async function deleteProduct(req,res){
   if(!isAdmin(req)){
        res.status(403).json({
            message:"You are not authorized to delete a product"
        });
        return;
    }
    try{

        const productID=req.params.productID;
        // const productID=req.body.productID
        // if(productID==null){
        //     res.status(400).json({
        //         message:"Product ID is required"
        //     });
        //     return;
        // }
        await Product.deleteOne({
         productID:productID
        })
        res.json({
            message:"Product deleted successfully"
        })
    } catch(err){
       console.error(err);
       res.status(500).json({
        message:"Failed to delete product"
       })
    }
}

export async function updateProduct(req,res) {

    if(!isAdmin(req)){
        res.status(403).json({
            message:"You are not authorized to create a product"
        });return;
    }
    try{
        const productID=req.params.productID;
        const updateData=req.body;
        await Product.updateOne(
            {productID:productID},
            updateData
            
        );
        res.json({
            message:"Product updated successfully"
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            message:"Failed to update product"
        })
    }
}

export async function getProductId(req,res){
    try{
        const productID=req.params.productID;
        const product=await Product.findOne(
            {productID:productID}
        )
        if(product==null){
            res.status(404).json({
                message:"Product not found"
            });
        }else{
            res.json(product);
        }
    }catch(err){
        console.error(err);
        res.status(500).json({
            message:"Failed to retrieve product"
        })
    }
}
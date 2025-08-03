const productModel = require("./product.model")
const db = require('../../db')

exports.addProduct = async(req , res) => {
    try{
        // extracting data from req.body
        const{
            name, 
            description, 
            price, 
            discount, 
            stock, 
            category_id, 
            brand, 
            thumbnail,
            isActive,
        }= req.body;

        //basic validation
        if(!name || !price || !stock || !category_id ){
            return res.status(400).json({sucess:false, error:"Missing required fields"});
        }

        // check if category_id exists in the database. 
        // will change this line later on
        const [categoryResult] = await db.query(`select * from categories where id=?`,[category_id]);

        if(categoryResult.length === 0){
            return res.status(404).json({
                success: false,
                message: "No such category exists."
            });
        }

        // call model function
        const result = await productModel.insertProduct({
            name,
            description,
            price,
            discount,
            stock,
            category_id,
            brand,
            thumbnail,
            isActive
        });

        return res.status(201).json({
            success: true,
            statusCode: 201,
            message: "product added successfully!",
            data:{
                id: result.insertId,
                name,
                category_id
            }
        });
    }catch(error){
        console.error("Error adding product: ",error);
        return res.status(500).json({
            success: false,
            message:"Internal server error",
            statusCode: 500,
            error: error.message
        });
        
    } 
};
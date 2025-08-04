const db = require("../../db")

exports.insertProduct = async (productData) => {
    const {
        name,
        description,
        price,
        discount,
        stock,
        category_id,
        brand,
        thumbnail,
        isActive
    } = productData;

    const [result] = await db.query(`INSERT INTO products (name, description, price, discount,
        stock, category_id,brand, thumbnail,isActive) VALUES (?,?,?,?,?,?,?,?,?)`,
        [name,
            description,
            price,
            discount,
            stock,
            category_id,
            brand,
            thumbnail,
            isActive]
    );

    return result;

}
const products = require("./products");

const getAllProducts = async (req, res) => {
    let products;
    try {
        products = await products.find();
    } catch (err) {
        res.status(500).send(err.message);
    }
    if (!products) {
        return res.status(500).json('User not found');
    }
    return res.status(200).json({products});
};

exports.getAllProducts = getAllProducts;

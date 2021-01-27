const products = require("../products.json")

const getProduct = (req, res) => {
    const product = products.find(elem => elem.id === +req.params.id)
    if(product) {
        res.status(200).send(product)
    }else{
        res.status(500).send("Item not in list")
    }
    
}

module.exports = getProduct
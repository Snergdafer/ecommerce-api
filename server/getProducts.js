
const products = require("../products.json")



const getProducts = (req, res) => {
    if(req.query.price){
        let arr = products.filter( i => i.price > +req.query.price)
        res.status(200).send(arr)
    }else{
        res.status(200).send(products)
    }
    
}

module.exports = getProducts
const express = require('express')
const products = require("../products.json")
const getProducts = require("./getProducts.js")
const getProduct = require("./getProduct.js")

const app = express()

app.use(express.json())

const port = 3000

app.get("/api/products", getProducts)

app.get("/api/products/:id", getProduct)




app.listen(port, () => console.log(`Server is running on port ${port}`))
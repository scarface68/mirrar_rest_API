const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect("mongodb://localhost:27017/ecommerce");

const PORT = 5000 || process.env.PORT;

const app = express();
app.use(express.json());

const productRoutes = require("./routes/product");
app.use("/product", productRoutes);



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

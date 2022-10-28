const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./router/user");
const authRoute = require("./router/auth");
const productRoute = require("./router/product");
const cartRoute = require("./router/cart");
const orderRoute = require("./router/order");
const stripeRoute = require("./router/stripe");
const cors = require("cors");
app.listen(process.env.PORT|| 5000,() => console.log("Background SERVER is RUNNING!"));

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("MongoDB Connection SuccessFull!!"))
.catch((err) => console.log(err))

app.use(cors());
//クライアントサイドのCORSトラブル対策
app.use(express.json());
//ExpressでJSONの使用許可
app.use("/api/users" ,userRoute);
app.use("/api/auth" ,authRoute);
app.use("/api/products" ,productRoute);
app.use("/api/carts" ,cartRoute);
app.use("/api/orders" ,orderRoute);
app.use("/api/checkout" ,stripeRoute);

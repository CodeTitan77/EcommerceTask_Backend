const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { IntializeDatabase } = require("./dbConnect.js");
const authRouter = require("./Routes/authentication.js");
const orderRouter = require("./Routes/order.js");
const productRouter = require("./Routes/product.js");
const {seedData,products}=require("./Routes/seedData.js");
const userRouter = require("./Routes/user.js");

const app = express();
const PortNumber = 3333;

require("dotenv").config();
IntializeDatabase();
//  seedData(products);

const corsOptions = {
    origin: [
        "http://localhost:5173", 
        "https://ecommerce-task-frontend.vercel.app" 
    ],
    credentials: true,
   
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/",authRouter);

app.use("/",productRouter);
app.use("/",userRouter);
app.use("/",orderRouter);

app.listen(PortNumber, () => {
    console.log(`Server started at Port Number ${PortNumber}`);
});
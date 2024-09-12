import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import route from "./routes/taskRoutes.js"
import cors from "cors"
const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database Connected");
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    })
})

app.use("/api",route)
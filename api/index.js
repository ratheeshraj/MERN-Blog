const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./Routes/auth")
const userRoute = require("./Routes/users")
const postRoute = require("./Routes/posts")
const catRoute = require("./Routes/categories")
const multer = require("multer")
dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
}).then(console.log("connected to mongoose")).catch((err) => console.log(err))

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null, "images")
    }, filename:(req,file,cb)=>{
        cb(null, req.body.name)
    }
})

const upload = multer({storage:storage})

app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded");
})


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",catRoute);

app.listen("8080",()=>{
    console.log("backend works")
});
 
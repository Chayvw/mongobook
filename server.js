const express = require("express");
const mongoose = require("mongoose");
// const validator = require("validator");

const authorController = require("./controllers/authorController");
const genreController = require("./controllers/genreController");
const userController = require("./controllers/userController");
const authController = require("./controllers/authController");
const loginController = require("./controllers/loginController");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongobook", {
  useNewUrlParser: true,
  useFindAndModify: false,
   useUnifiedTopology: true 
});

mongoose.connection.on("connected", ()=>{
    console.log("connected to mongoose")
});

app.get("/api/config", (req, res)=>{
        res.json({
            success:true,
        });
});

app.use(authorController);
app.use(genreController);
app.use(userController);
app.use(authController);
app.use(loginController);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
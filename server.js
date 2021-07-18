const express = require("express");
const mongoose = require("mongoose");

const authorController = require("./controllers/authorController");
const genreController = require("./controllers/genreController");
const userController = require("./controllers/userController");

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

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
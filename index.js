const express = require("express");
const { connectMongoDB } = require("./connection");
const{ logReqres } = require("./middlewares");  
const userRouter = require("./routes/user");


const app = express();
const port = 8000;

// Connect to MongoDB
connectMongoDB("mongodb://localhost:27017/users") .then(() =>  console.log("Connected to MongoDB"));

// Middleware to parse JSON and URL-encoded data

app.use(express.urlencoded({ extended: false }));

app.use(logReqres("log.txt"));

//routes
app.use("/api/users", userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

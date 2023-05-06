const express = require('express');
const app = express();
const userRouter = require ("./routes/userRoute");



app.use(express.json());



app.use("/", userRouter);


app.listen(3000, ()=>{
    console.log("Server is running at port 3001");
})
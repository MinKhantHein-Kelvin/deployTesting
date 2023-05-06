const express = require('express');
const app = express();
const categoryRouter = require ("./routes/categoryRoute");
const db = require('./models');



app.use(express.json());



app.use("/", categoryRouter);


db.sequelize.sync().then((req)=>{
    app.listen(3000, ()=>{
        console.log("Server is running at port 3001");
    })
})
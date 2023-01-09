const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
dotenv.config({ path: './config.env' });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const userRouter = require('./router/user');
app.use('/user', userRouter);

const adminRouter = require('./router/admin');
app.use('/admin', adminRouter);


// app.get('/',(req,res)=>{
//     res.json({name:'Shree Ram'})
// })



if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}
const port = process.env.PORT
app.listen(port, () => {
    console.log("Server Started Successfully At Port", port);
});
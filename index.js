const express = require('express')
const app = express();
const userRouter = require('./routes/users');
const cors = require('cors');
app.use('/users', userRouter);



app.use(express.json());
app.use(cors());


app.get('/', (req,res) => {
    res.send("hello");
});





app.listen(5000, () => console.log("server running"));



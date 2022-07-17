const express = require('express');
const userRouter = express.Router();
const users = require('./users.json');

userRouter.get('/', (req,res) =>{
    res.send(users);
})

userRouter.use((req,res) => {
    res.send("Not Fonnd");
})

userRouter.get('/:id', (req,res) => {
    const finder = users.find( e => {
        return e.id == req.params.id
    })
    const newObj = {
        name : "hello",
        city : "khulna"
    }
    res.send(finder);
});


module.exports = userRouter;
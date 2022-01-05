const express = require('express');

//routers
const {router} = require('./routes/todos.router')

//init app
const app = express();

app.use(express.urlencoded());
app.use(express.json());

//endpoints
app.use('/api/v1/todos', router)

app.listen(4000, () =>{
    console.log('ToDo App');
})


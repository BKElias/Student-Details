const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser =require('body-parser');
const ToDoModel =require('./models/dataModel');
const { append } = require('express/lib/response');

const app =express();

app.use(bodyParser.json());

app.post('/',async(req, res) => {
    const ToDo =ToDoModel.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        date_of_birth: req.body.date_of_birth,
        school:  req.body.school
    });
    try {
        const createData = await ToDo.save();
        res.json({
            data: createData,
            message: "saved"
        })
    } 
    catch (error) {
        res.json({
            message:error
        })
        
    }
});

app.get('/studentDetails', async(req, res)=>{
    try {
        const getData = await ToDoModel.find();
        res.json({
            message: "Done",
            data: getData,
        })
    } catch (error) {
        res.json({
            message:error
        });
    }
});

mongoose.connect(process.env.db_URL,()=>console.log('Connected'))

app.listen(process.env.portNum)

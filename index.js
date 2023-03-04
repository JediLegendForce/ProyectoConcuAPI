/*
import {Employee} from "./employee.js";
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';


const port=8000;
const app = express();
app.use(bodyParser.json());

//datos
var employees;
fs.readFile('./employees.json','utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    console.log('File data:', jsonString) 
    employees=JSON.parse(jsonString);
});
//////////////////////////////////////////////////////////

//GETS
app.get("/employees",(req,res)=>{
    res.send(employees);
});

app.get("/employees/:username",(req,res)=>{
    employees.forEach(element => {
        if(element.username==req.params.username){
            res.send(element);
        }
    });
})

////////////////////////////////////////////
app.listen(port, ()=> {
    console.log('Listening on port '+port)
});
*/

const express = require('express');
const bodyParser = require('body-parser');


require("dotenv").config();

const app = express();


app.use(bodyParser.json());

const employeeRoutes = require("./Routes/employeeRoute");

app.use("/employee", employeeRoutes);

app.listen(8000);
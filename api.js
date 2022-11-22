const express = require('express')
const cors = require('cors')
const dbConnection = require('./mongo.js')
const mongodb = require('mongodb')
// const router = require('express').Router();
const app = express();
app.use(cors())
app.use (express.json())
// app.use('/', router);
app.get('/users',async (req,res)=>{
  let data = await dbConnection();
  data = await data.find().toArray();
//   console.log(data);
  res.send(data)
})
app.post('/users',async(req,res)=>{
    let data = await dbConnection();
    let result = await data.insert(req.body)
    res.send(result)
})
app.put('/users/:id',async(req,res)=>{
  let data = await dbConnection();
  let result =  data.updateOne(
    { _id: new mongodb.ObjectId(req.params.id) },
    {$set: req.body} 
    )

    res.send(result)
})
app.delete('/users/:id',async(req,res)=>{
  let data = await dbConnection();
  let result =  data.deleteOne(
    { _id: new mongodb.ObjectId(req.params.id) },
   
    )

    res.send(result)
})


app.listen(4000)

import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './db.js';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server is running")
})



app.post('/input/:email/:password/:cpassword',async(req,res)=>
{
    const details=await db.collection('rohini').insertOne({email:req.params.email,Password:req.params.password,Cpassword:req.params.cpassword})
    res.json(details);
})
app.post('/output/:email/:password',async(req,res)=>
{
    const details=await db.collection('rohini').findOne({email:req.params.email,Password:req.params.password})
    res.json(details);
})
app.post('update/:upassword',async(req,res)=>
{
    const result=await db.collection("rohini").findOneAndUpdate({email:req.params.email,$set:{Password:req.params.upassword}});
    res.json(details);
})
// app.get('/output/:name',async(req,res)=>
// {
//     const details = await db.collection("rohini").findOne({Name:req.params.name})
//     res.json(details);
// });
app.get('/check/:email',async(req,res)=>
{
    const result =await db.collection("rohini").find({email:req.params.email}).toArray();
    res.json(result);
})

connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})
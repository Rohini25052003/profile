import { MongoClient } from "mongodb";
let db; 
async function connectToDB(cb){
    const url = "mongodb+srv://roni:roni03@rohini.at9qw55.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("rohini");
    cb();
}


export { connectToDB,db};
// import { MongoClient } from "mongodb";
// const mongoose=require("mongoose")
// //const url = "mongodb+srv://roni:roni03@rohini.at9qw55.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect("mongodb+srv://roni:roni03@rohini.at9qw55.mongodb.net/?retryWrites=true&w=majority")
// .then(()=>{
//     console.log("mongodb connected");
// })
// .catch(()=>{
//     console.log('failed');
// })


// const newSchema=new mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// })

// const collection = mongoose.model("collection",newSchema)

// module.exports=collection

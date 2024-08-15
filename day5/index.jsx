const express =require('express');
const mongodb=require('mongodb')

const url='mongodb://localhost:27017';
const client=new mongodb.MongoClient(url);
const dbName='new_database'

const app = express();

const connect=async()=>{
    await client.connect();
    const db=client.db(dbName);
    console.log('connected');
    return db;
}

const insertdata=async()=>{
    const db=await connect();
    const admins=db.collection('admins');

    const response = await admins.insertOne({
        name:'khushwant',
        contact:7726882222,
    });
    // console.log(response);
}

// insertdata();

const deleteData=async()=>{
    const db=await connect();
    const admins=db.collection('admins');

    const response =await admins.deleteOne({
        name:'prateek',
    });
    console.log(response);
}

// deleteData();

const updateData=async()=>{
    const db=await connect();
    const admins=db.collection('admins');

    const response=await admins.updateOne({name:'prateek'},{$set:{contact:7014174848}});
    console.log(response);
}

// updateData();
app.listen(5200,()=>{
    console.log('server is running on port 5200')
})
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/users_product')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

const userSchema=new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    thumbnail:String,
    images:Object
});

const Products=mongoose.model('products',userSchema);

module.exports=Products
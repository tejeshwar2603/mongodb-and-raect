const express=require('express');
const app=express();
const mongoose=require('mongoose')
const devuser=require('./devusermodel')
mongoose.connect('mongodb://localhost:27017').then(
    () => console.log('DB connected')
)
app.get('/',(req,res)=>{
    return res.send('hello,world !!')

})
app.post('register',async(req,res)=>{

})
app.listen(5000,()=> console.log('server running..'))

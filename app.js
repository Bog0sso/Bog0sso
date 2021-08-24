const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    
    res.json({message:"je viens"});
})
app.listen(3000);
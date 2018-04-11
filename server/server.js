const path=require('path');
const express=require('express');
const app=express();
const port=process.env.PORT || 3000;
const publicpath=path.join(__dirname,'../public');
app.use(express.static(publicpath));
app.listen(port,()=>{
    console.log(`server started on  ${port}`);
});



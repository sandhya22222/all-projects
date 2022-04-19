var app=require ('express');

let router = app.Router()

router.get('/process' ,(req ,res) =>{
    
     res.send({
        price :400,
        label :INR 
     });
});
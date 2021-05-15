const express = require('express')
const router= express.Router();
const feedbackTemplate= require('../modles/FeedbackModal');
const visitTemplate= require('../modles/VisitModal');


router.post('/feedback',async(req,res)=>{

    const newFeedBack= new feedbackTemplate({
        fullname:req.body.fullname,
        email:req.body.email,
        rating:req.body.rating,
        feedback:req.body.feedback
    })

    await newFeedBack.save()
    .then((data)=>{res.json(data)})
    .catch((err)=>{res.json(err)})
})

router.get('/fetchlist',async(req,res)=>{

    feedbackTemplate.find()
    .then((data)=>res.json(data))
    .catch((err)=>res.json(err))

})

router.get('/visits',async(req,res)=>{

    await visitTemplate.find().then((data)=>{
        
    let v=data[0].visit
         visitTemplate.updateOne({un:"secretkey"},{visit:data[0].visit+1})
            .then((data)=>res.json(v))
            .catch((err)=>res.json(err))
    })
    .catch((err)=>res.json(err))

  

})

module.exports=router
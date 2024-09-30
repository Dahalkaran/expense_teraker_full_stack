const path=require('path');

 const express=require('express');

 const router=express.Router();

 const admincontroler=require('../controlers/admin')

 router.post('/',admincontroler.postDetails);
 router.get('/',admincontroler.getDetails);
 router.delete('/:id',admincontroler.deleteDetails);
 router.put('/:id', admincontroler.updateExpense);

 module.exports=router;
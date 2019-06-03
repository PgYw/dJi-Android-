const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/productSelect",(req,res)=>{
  pool.query("SELECT * FROM dji_product WHERE product_select=1",(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,productSelect:result})
    }else{
      res.send({code:0})
    }
  });
});
module.exports=router;
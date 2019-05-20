const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/goodList",(req,res)=>{
  var $product_id=req.query.product_id;
  pool.query("SELECT * FROM dji_product WHERE product_id=?",$product_id,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,product:result})
    }else{
      res.send({code:0})
    }
  });
});
router.get("/imgList",(req,res)=>{
  var $product_id=req.query.product_id;
  pool.query("SELECT * FROM dji_img WHERE relevancy_id=?",$product_id,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,imgList:result})
    }else{
      res.send({code:0})
    }
  });
});
router.get("/relevancyList",(req,res)=>{
  var $product_id=req.query.product_id;
  pool.query("SELECT * FROM dji_relevancy WHERE product_id=?",$product_id,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,relevancyList:result})
    }else{
      res.send({code:0})
    }
  });
});
module.exports=router;
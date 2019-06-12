const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.post("/product",(req,res)=>{
  var $product_id=req.body.product_id;
  pool.query("SELECT * FROM dji_product WHERE product_id=?",$product_id,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,product:result})
    }else{
      res.send({code:0})
    }
  });
});
router.get("/productImg",(req,res)=>{
  var $product_id=req.query.product_id;
  pool.query("SELECT * FROM dji_img WHERE relevancy_id=?",$product_id,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,productImg:result})
    }else{
      res.send({code:0})
    }
  });
});
module.exports=router;
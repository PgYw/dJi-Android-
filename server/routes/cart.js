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
router.post("/addCart",(req,res)=>{
  var $product_arr=JSON.parse(req.body.product_arr)
  var $product_cart=[];
  var num=0;
  $product_cart=$product_arr;
  for(var i=0;i<$product_cart.length;i++){
    pool.query("INSERT INTO dji_cart VALUES(NULL,?,?)",[$product_cart[i].product_id,$product_cart[i].product_count],(err,result)=>{
      num++;
      if(err) throw err;
      if(num==$product_cart.length){
        if(result.affectedRows>0){
          res.send({code:1})
        }else{
          res.send({code:0})
        }
      }
    })
  }
})
module.exports=router;
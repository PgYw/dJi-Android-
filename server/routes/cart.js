const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.post("/cart",(req,res)=>{
  var $user_id=req.body.user_id;
  pool.query("SELECT * FROM dji_cart WHERE user_id=?",$user_id,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,cart:result})
    }else{
      res.send({code:0})
    }
  });
});
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
router.post("/slCart",(req,res)=>{
  var $user_id=req.body.user_id
  var $product_id=req.body.product_id
  pool.query("SELECT * FROM dji_cart WHERE user_id=? AND product_id=?",[$user_id,$product_id],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,slCart:result})
    }else{
      res.send({code:0})
    }
  });
});
router.post("/addCart",(req,res)=>{
  var $product_arr=JSON.parse(req.body.product_arr)
  console.log($product_arr)
  var num=0;
  for(var i=0;i<$product_arr.length;i++){
    pool.query("INSERT INTO dji_cart VALUES(NULL,?,?,?,1)",[$product_arr[i].user_id,$product_arr[i].product_id,$product_arr[i].product_count],(err,result)=>{
      num++;
      if(err) throw err;
      if(num==$product_arr.length){
        if(result.affectedRows>0){
          res.send({code:1})
        }else{
          res.send({code:0})
        }
      }
    })
  }
})
router.post("/upCart",(req,res)=>{
  var $product_count=req.body.product_count;
  var $user_id=req.body.user_id;
  var $product_id=req.body.product_id;
  pool.query("UPDATE dji_cart SET product_count=? WHERE user_id=? AND product_id=?",[$product_count,$user_id,$product_id],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1})
    }else{
      res.send({code:0})
    }
  });
});
router.post("/isSelect",(req,res)=>{
  var $product_isSelect=req.body.product_isSelect;
  var $user_id=req.body.user_id;
  var $product_id=req.body.product_id;
  $product_isSelect=="true"?$product_isSelect=1:$product_isSelect=0
  pool.query("UPDATE dji_cart SET product_isSelect=? WHERE user_id=? AND product_id=?",[$product_isSelect,$user_id,$product_id],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1})
    }else{
      res.send({code:0})
    }
  });
});
router.post("/dtCart",(req,res)=>{
  var $user_id=req.body.user_id;
  var $product_id=req.body.product_id;
  pool.query("DELETE FROM dji_cart WHERE user_id=? AND product_id=?",[$user_id,$product_id],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1})
    }else{
      res.send({code:0})
    }
  });
});
module.exports=router;
const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/user",(req,res)=>{
  var $admin=req.query.admin;
  var $upwd=req.query.upwd;
  var num=new Number($admin)
  if(num.toString()=="NaN"&&(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/).test($admin)){
    pool.query("SELECT * FROM dji_user WHERE user_email=? and user_pwd=?",[$admin,$upwd],(err,result)=>{
      if(err) throw err;
    if(result.length>0){
      res.send({code:1});
    }else{
      res.send({code:0});
    }
    })
  }else{
    pool.query("SELECT * FROM dji_user WHERE user_phone=? and user_pwd=?",[$admin,$upwd],(err,result)=>{
      if(err) throw err;
    if(result.length>0){
      res.send({code:1});
    }else{
      res.send({code:0});
    }
    })
  }
})
router.get("/phone",(req,res)=>{
  var $phone=req.query.phone;
  pool.query("SELECT * FROM dji_user WHERE user_phone=?",$phone,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1});
    }else{
      res.send({code:0});
    }
  })
});
router.get("/email",(req,res)=>{
  var $email=req.query.email;
  pool.query("SELECT * FROM dji_user WHERE user_email=?",$email,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1});
    }else{
      res.send({code:0});
    }
  })
});
module.exports=router;
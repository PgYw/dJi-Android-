const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.post("/user",(req,res)=>{
  var $admin=req.body.admin;
  var $upwd=req.body.upwd;
  var num=new Number($admin)
  if(num.toString()=="NaN"&&(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/).test($admin)){
    pool.query("SELECT * FROM dji_user WHERE user_email=? and user_pwd=?",[$admin,$upwd],(err,result)=>{
      if(err) throw err;
    if(result.length>0){
      res.send({code:1,user_id:result[0].user_id});
    }else{
      res.send({code:0});
    }
    })
  }else{
    pool.query("SELECT * FROM dji_user WHERE user_phone=? and user_pwd=?",[$admin,$upwd],(err,result)=>{
      if(err) throw err;
    if(result.length>0){
      res.send({code:1,user_id:result[0].user_id});
    }else{
      res.send({code:0});
    }
    })
  }
})
router.post("/phone",(req,res)=>{
  var $phone=req.body.phone;
  pool.query("SELECT * FROM dji_user WHERE user_phone=?",$phone,(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1});
    }else{
      res.send({code:0});
    }
  })
});
router.post("/email",(req,res)=>{
  var $email=req.body.email;
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
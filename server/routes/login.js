const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/user",(req,res)=>{
  var $admin=req.query.admin;
  var $upwd=req.query.upwd;
  var num=new Number($admin)
  if(num.toString()=="NaN"&&(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/).test($admin)){
    pool.query("SELECT * FROM dji_user WHERE user_email=? user_pwd=?",[$admin,$upwd],(err,result)=>{
      if(err) throw err;
    if(result.length>0){
      res.send({code:1});
    }else{
      res.send({code:0});
    }
    console.log(1111111)
    })
  }else if(num.toString()!="NaN"&&(/^0?1[3|4|5|6|7|8][0-9]\d{8}$/).test($admin)){
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
module.exports=router;
const express=require("express");
// 跨域访问
const cors=require("cors");
// 解析字符串和响应头请求
const bodyParser=require("body-parser");
const index=require("./routes/index.js");
var app=express();
app.listen(3000);
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(cors({
  orgin:["http://127.0.0.1:5500","http://127.0.0.1:8080","http://localhost:8080"]
}))
app.use("/index",index);
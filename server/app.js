const express=require("express");
// 跨域访问;
const cors=require("cors");
// 解析字符串和响应头请求
const bodyParser=require("body-parser");
const index=require("./routes/index.js");
const login=require("./routes/login.js");
const detail=require("./routes/detail.js");
const cart=require("./routes/cart.js");
var app=express();
app.listen(3000);
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(cors({
  // 允许跨域的地址
  //192.168.1.102换自己的ip可以手机访问(手机，电脑同一局域网内)
  orgin:["http://127.0.0.1:5500",
    "http://127.0.0.1:8080",
    "http://localhost:8080",
    "http://192.168.1.102:8080"]
}))
app.use(express.static('public'));
app.use("/index",index);
app.use("/login",login);
app.use("/detail",detail);
app.use("/cart",cart);
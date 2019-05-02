const express=require("express");
const bodyParser=require("body-parser");
// 跨域访问
const cors=require("cors");
var app=express();
app.listen(3000);
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(cors({
  orgin:"http://127.0.0.1:5500"
}))
app.use(express.static("../public"));
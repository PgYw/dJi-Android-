const mysql=require("mysql");
var pool=mysql.createPool({
  port:"3306",
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"myject",
  connctionLimit:15
});
module.exports=pool;
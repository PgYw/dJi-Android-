const express=require("express");
const pool=require("../pool.js");
// 获取当前电脑的ip地址返回给前端
var os = require('os');
var ip=os.networkInterfaces()['无线网络连接'][1].address;
const router=express.Router();
router.get("/ip",(req,res)=>{
  res.send(ip)
})
router.get("/banner",(req,res)=>{
  pool.query("SELECT * FROM dji_banner",(err,result)=>{
    if(err) throw err;
    res.send(result);
    return;
  })
});
router.get("/one_product",(req,res)=>{
  pool.query("SELECT * FROM dji_product WHERE product_ify='灵眸 Osmo'",(err,result)=>{
    if(err) throw err;
    res.send(result);
    return;
  })
});
router.get("/two_product",(req,res)=>{
  pool.query(`SELECT * FROM dji_product WHERE product_ify='"御" Mavic'`,(err,result)=>{
    if(err) throw err;
    res.send(result);
    return;
  })
});
router.get("/shaky",(req,res)=>{
  pool.query("SELECT * FROM dji_shaky",(err,result)=>{
    if(err) throw err;
    res.send(result);
    return;
  })
});
router.get("/three_product",(req,res)=>{
  pool.query(`SELECT * FROM dji_product WHERE product_ify='"晓" Spark'`,(err,result)=>{
    if(err) throw err;
    res.send(result);
    return;
  })
});
router.get("/favourable",(req,res)=>{
  pool.query("SELECT * FROM dji_favourable",(err,result)=>{
    if(err) throw err;
    res.send(result);
    return;
  })
});
router.get("/products",(req,res)=>{
  pool.query("SELECT * FROM dji_product GROUP BY product_ify ORDER BY `dji_product`.`product_ify` DESC",(err,result)=>{
    if(err) throw err;
    res.send(result);
    return;
  })
});
module.exports=router;





// { '无线网络连接':
//    [ { address: 'fe80::ad1c:ec29:92aa:e6bb',
//        netmask: 'ffff:ffff:ffff:ffff::',
//        family: 'IPv6',
//        mac: 'e0:06:e6:f9:a3:25',
//        scopeid: 11,
//        internal: false,
//        cidr: 'fe80::ad1c:ec29:92aa:e6bb/64' },
//      { address: '192.168.1.103',
//        netmask: '255.255.255.0',
//        family: 'IPv4',
//        mac: 'e0:06:e6:f9:a3:25',
//        internal: false,
//        cidr: '192.168.1.103/24' } ],
//   'Loopback Pseudo-Interface 1':
//    [ { address: '::1',
//        netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//        family: 'IPv6',
//        mac: '00:00:00:00:00:00',
//        scopeid: 0,
//        internal: true,
//        cidr: '::1/128' },
//      { address: '127.0.0.1',
//        netmask: '255.0.0.0',
//        family: 'IPv4',
//        mac: '00:00:00:00:00:00',
//        internal: true,
//        cidr: '127.0.0.1/8' } ] }
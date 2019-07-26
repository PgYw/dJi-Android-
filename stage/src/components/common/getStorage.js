// 引入所需模块
import $axios from 'axios';
import qs from 'qs';
// 获取本地购物车数据或者服务器端购物车数据
function getStorage(){
  var user_id=sessionStorage.getItem("userId")
  if (user_id != (undefined || null)) {
    return new Promise(function(res1){
      $axios.post("http://127.0.0.1:3000/cart/cart",
      qs.stringify({user_id: user_id }))
      .then(res => {
        if (res.data.code == 1) {
          res1(res.data.cart)
        }
      });
    })
  } else {
    if (localStorage.getItem("product") != (undefined || null)) {
      return new Promise(function(res1){
        var getVal = localStorage.getItem("product");
        getVal = JSON.parse(getVal);
        if (getVal != null) {
          res1(getVal);
        }
      });
    }else{
      return new Promise(function(res1){
        res1([]);
      });
    }
  }
}
// 更新商品的数据
function upCart(value) {
  var user_id=sessionStorage.getItem("userId")
  if (user_id != (undefined || null)) {
    $axios.post("http://127.0.0.1:3000/cart/upCart",
      qs.stringify({
        user_id: user_id,
        product_id: value.product_id,
        product_count: value.product_count
      }))
      .then(res => {
        if (res.data.code != 1) {
          alert("对不起，服务器端错误");
          return;
        }
      });
  } else {
    if (value.length == 0) {
      window.localStorage.removeItem("product");
    } else {
      window.localStorage.setItem("product", JSON.stringify(value));
    }
  }
}
// 取消单选或者选中单选
function isSelect(value) {
  var user_id=sessionStorage.getItem("userId")
  if(user_id!=(undefined||null)){
    $axios.post("http://127.0.0.1:3000/cart/isSelect",
      qs.stringify({
        user_id: user_id,
        product_id: value.product_id,
        product_isSelect: value.product_isSelect
      }))
      .then(res => {
        if (res.data.code != 1) {
          alert("取消失败，请稍后再试");
          return;
        }
      });
  }
}
// 删除商品
function dtCart(value) {
  var user_id=sessionStorage.getItem("userId")
  $axios.post("http://127.0.0.1:3000/cart/dtCart",
    qs.stringify({ 
      user_id: user_id, 
      product_id: value.product_id 
    }))
    .then(res => {
      if (res.data.code != 1) {
        alert("删除失败，请稍后再试");
        return;
      }
    });
}
// 增加商品
function addCart(product_arr){
  this.$axios.post("http://127.0.0.1:3000/cart/addCart",
  this.qs.stringify({
    product_arr: JSON.stringify(product_arr)
  }))
  .then(res => {
    if (res.data.code != 1) {
      alert("对不起，参数错误");
    }
  });
}
// 导出所需function，共mian.js使用
  export { getStorage, upCart, isSelect, dtCart , addCart };

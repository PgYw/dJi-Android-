import $axios from 'axios';
import qs from 'qs';
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
          console.log(123)
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
function setStorage(value) {
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
          alert("对不起，参数错误");
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
  export { getStorage, setStorage, isSelect, dtCart };

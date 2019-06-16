let product_arr = [],
  Cartl = false;
var user_id = sessionStorage.getItem("userId");

function getStorage() {
  // 获取本地存储数据，如果登陆了就获取数据库
  if (user_id != (undefined || null)) {
    this.$axios.post("http://127.0.0.1:3000/cart/cart",
    this.qs.stringify({ user_id: user_id }))
    .then(res => {
      if (res.data.code == 1) {
        product_arr = res.data.cart;
        Cartl = product_arr.length;
      } else {
        Cartl = false;
      }
    });
  } else {
    product_arr = [],Cartl = false;
    if (localStorage.getItem("product") != (undefined || null)) {
      var getVal = localStorage.getItem("product");
      getVal = JSON.parse(getVal);
      if (getVal != null) {
        product_arr = getVal;
        Cartl = product_arr.length;
      }
    }
  }
  return { product_arr, Cartl };
}

function setStorage(value) {
  // 添加购物车新的数据到本地，登陆了就添加到购物车
  if (user_id != (undefined || null)) {
    this.$axios.post("http://127.0.0.1:3000/cart/upCart",
      this.qs.stringify({
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
  // 选中框的选中状态
  if(user_id!=(undefined||null)){
    this.$axios.post("http://127.0.0.1:3000/cart/isSelect",
      this.qs.stringify({
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
  // 当用户点击删除按钮的时候向购物车查询并且删除
  this.$axios.post("http://127.0.0.1:3000/cart/dtCart",
    this.qs.stringify({ user_id: user_id, 
      product_id: value.product_id 
    }))
    .then(res => {
      if (res.data.code != 1) {
        alert("删除失败，请稍后再试");
        return;
      }
    });
}
// function getCart(){
//   this.$axios.post()
// }
// 抛出方法，使得其他页面能够使用
export { getStorage, setStorage, isSelect, dtCart };

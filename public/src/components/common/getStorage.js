let product_arr=[],Cartl=false;
function getStorage(){
  if(sessionStorage.getItem("userId")!=(undefined||null)){
    var user_id=sessionStorage.getItem("userId");
    this.$axios.post("http://127.0.0.1:3000/cart/cart",
    this.qs.stringify({user_id:user_id}))
    .then(res=>{
      if(res.data.code==1){
        product_arr=res.data.cart
        Cartl=product_arr.length
      }
    })
  }else{
    product_arr=[],Cartl=false;
    if(localStorage.getItem("product")!=(undefined||null)){
      var getVal=localStorage.getItem("product");
      getVal=JSON.parse(getVal)
      if(getVal!=null){
        product_arr=getVal
        Cartl=product_arr.length;
      }
    }
  }
    return {product_arr,Cartl}
}

function setStorage(value){
  if(value.length==0){
    window.localStorage.removeItem("product")
  }else{
    window.localStorage.setItem("product",JSON.stringify(value))
  }
}
function getCart(){
  this.$axios.post()
}
export {getStorage,setStorage}
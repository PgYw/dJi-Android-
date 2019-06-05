function getStorage(){
  let product_arr=[],Cartl=false;
  if(localStorage.getItem("product")!=undefined||null){
    var getVal=localStorage.getItem("product");
    getVal=JSON.parse(getVal)
    if(getVal!=null){
      product_arr=getVal
      Cartl=product_arr.length;
    }
  }
  return {product_arr,Cartl}
}
function setStorage(value){
  if(value.length==0){
    localStorage.clear();
  }else{
    window.localStorage.setItem("product",JSON.stringify(value))
  }
}
export {getStorage,setStorage}
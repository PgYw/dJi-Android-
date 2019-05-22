<template>
  <div id="test">
    <div class="test">
      <button @click="get()">加入</button>
    </div>
  </div>
</template>
<script>
export default {
  name:"test",
  data(){
    return{
      arr:[{product_id:1,product_price:3499.00},{relevancy_id:2,product_price:3499.00}],
    }
  },
  methods: {
    get:function(){
      this.arr.find(item=>{
        if(item.relevancy_id){
          console.log(213124)
        }else{
          console.log(22324)
        }
      })
    }
  },
  mounted() {
  },
}
</script>
<style lang="css">
*{
  margin:0;
  padding: 0;
}
html,body,#test,.test{
  height:100%;
}
</style>
<style scoped lang="css">
.yellow{
  width:5rem;
  height:5rem;
  background:yellow;
  position: relative;
  float: right;
}
.green{
  width:1rem;
  height:1rem;
  background:green;
  position: absolute;
  top:42rem;
}
</style>
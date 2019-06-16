<template>
  <div class="father">
    <div v-for="(test,index) in data" :key="test.product_id">
      <button @click="getD(index)">加载</button>
      <input type="text" :value="test.product_count">
    </div>
  </div>
</template>
<script>
export default {
  name:"father",
  data(){
    return{
      data:[{product_id:1,product_count:1},{product_id:2,product_count:3}],
      isLoading:false
    }
  },
  methods: {
    getD(index){
      this.data[index].product_count++;
    }
  },
}
// 第一个项目的响应式解决
// 点击登录成功加入本地数据到购物车的问题
// 解决网页来回切换时cart的值得问题
</script>
<style lang="">
</style>
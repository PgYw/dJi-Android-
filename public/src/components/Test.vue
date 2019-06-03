<template>
  <div id="test">
    <div class="my_all"></div>
  </div>
</template>
<script>
export default {
  name:"test",
  data(){
    return{
      isShow:false,
      Cartl:null,
    }
  },
}
</script>
<style lang="css">
*{
  margin:0;
  padding: 0;
}
</style>
<style lang="css">
.my_all{
  margin:0 auto;
  width:200px;
  height:200px;
  overflow: hidden;
  background: red;
  z-index: 2;
}
</style>
<template>
<router-view>
  <footer class="user_footer">
    <div class="copyRight">Copyright © 2019 DJI All Rights Reserved.</div>
    <div class="serve">
      <a href="">隐私政策</a>
      <a href="">使用条款</a>
      <a href="">网站地图</a>
    </div>
    <div class="help">如果您有任何关于Dji账户的问题，请<a href="">点击此处</a></div>
    <div class="copyRight">
      <a href="">粤ICP备12022215号-11</a>
    </div>
  </footer>
</router-view>
</template>
<script>
export default {
  name:'user_footer',
  data(){
    return{

    }
  }
}
</script>

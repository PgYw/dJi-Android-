<template>
  <div class="loading"></div>
</template>
<script>
export default {
  name:'Loading',
  data() {
    return {
      
    }
  },
}
</script>
<style scoped lang="css">
.loading {
  position: fixed;
  left: 0;
  top: 0;
  background: #fff url('../../assets/loading.gif') center center no-repeat;
  background-size: 100px 100px;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
</style>
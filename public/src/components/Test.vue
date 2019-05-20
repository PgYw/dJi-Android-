<template>
  <div id="test">
    <div class="test">
      <button @click="get()">加入</button>
      <div class="yellow" ref="yellow">
      </div>
      <div class="green" ref="green">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"test",
  data(){
    return{
      a_top:250,
      timer:"",
      a_right:250,
    }
  },
  methods: {
    get:function(){
      this.a_top-=5;
      this.a_right-=5;
      if(this.a_right<=20){
        clearInterval(this.timer)
      }
      this.$refs.green.style.top=this.a_top+"px"
      this.$refs.green.style.right=this.a_right+"px"
    }
  },
  mounted() {
    this.timer=setInterval(this.get,25)
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
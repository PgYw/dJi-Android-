<template>
  <div id="reg">
    <div class="value">
      <div class="reg">
        <div class="padding">
          <div class="reg_way">
            <span class="active" v-on:click="phone($event)">手机注册</span>
            <span class="no_active" v-on:click="email($event)">邮箱注册</span>
          </div>
          <div class="phone" ref="phone">
            <div class="phone_tel">
              <button disabled class="btn">+86</button>
              <input type="text" placeholder="请输入手机号*" ref="phone" v-model="getPhone">
              <i class="clearInput" ref="clearInput" @click="clear()"></i>
              <div class="msg_err">
                <span ref="phone_err"></span>
              </div>
            </div>
            <div class="phone_yzm">
              <input type="text" placeholder="请输入验证码*" ref="yzm" v-model="getYzmd">
              <i class="clearYzm" ref="clearYzm" @click="clear()"></i>
              <button class="goCode" ref="goCode" @click="goCode()">发送验证码</button>
              <div class="msg_err">
                <span ref="yzm_err"></span>
              </div>
            </div>
            <div class="next_button">
              <button class="goNext">下一步</button>
            </div>
            <div class="login">
              <router-link to="/Login">立即登录</router-link>
            </div>
          </div>
          <div class="email" ref="email">
            <div >8329ehj3ke</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"reg",
  data() {
    return{
      getPhone:"",
      getYzmd:"",
      isReg:[],
    }
  },
  mounted() {
    this.getTel();
  },
  methods: {
    getTel(){
      if(this.getPhone.length>=1){
        this.$refs.clearInput.style="display:block"
      }
      if(this.getYzmd.length>=1){
        this.$refs.clearYzm.style="display:block"
      }
    },
    clear(){
      if(this.getPhone!=""){
        this.getPhone="";
        this.$refs.clearInput.style="display:none"
        this.$refs.phone_err.innerHTML="手机号不能为空"
        this.$refs.phone.style="border: 1px solid #f04848;"
      }
      if(this.getYzmd!=""){
        this.getYzmd=""
        this.$refs.clearYzm.style="display:none"
        this.$refs.yzm_err.innerHTML="验证码不能为空"
        this.$refs.yzm.style="border: 1px solid #f04848;"
      }
    },
    goCode(){
      var num=60;
      this.$refs.goCode.innerHTML="重新发送("+num+"s)";
      this.$refs.goCode.disabled=true;
      let click=window.setInterval(()=>{
        num--;
        this.$refs.goCode.innerHTML="重新发送("+num+"s)"
        if(num==0){
          clearInterval(click);
          this.$refs.goCode.innerHTML="发送验证码";
          this.$refs.goCode.disabled=false;
        }
      },1000)
    },
    phone(event){
      event.preventDefault();
      var el=event.currentTarget.parentNode.children;
      this.$refs.phone.style="display:block"
      this.$refs.email.style="display:none"
      for(var i=0;i<el.length;i++){
        el[i].className="no_active"
      }
      event.currentTarget.className="active"
    },
    email(event){
      event.preventDefault();
      var el=event.currentTarget.parentNode.children;
      this.$refs.phone.style="display:none"
      this.$refs.email.style="display:block"
      for(var i=0;i<el.length;i++){
        el[i].className="no_active"
      }
      event.currentTarget.className="active"
    },
  },
  watch: {
    getPhone:function(){
      if(this.getPhone.length>=1){
        var num=new Number(this.getPhone);
        this.$refs.clearInput.style="display:block";
        if(num.toString()!="NaN"&&(/^0?1[3|4|5|6|7|8][0-9]\d{8}$/).test(this.getPhone)){
          this.$refs.phone_err.innerHTML=""
          this.$refs.phone.style="border: 1px solid #e6e6e6;"
          this.isReg[0]=true;
        }else{
          this.$refs.phone_err.innerHTML="手机号格式错误"
          this.$refs.phone.style="border: 1px solid #f04848;"
          this.isReg[0]=false;
        }
      }else{
        this.$refs.clearInput.style="display:none"
        this.$refs.phone_err.innerHTML="手机号不能为空"
        this.$refs.phone.style="border: 1px solid #f04848;"
      }
    },
    getYzmd:function(){
      if(this.getYzmd.length>=1){
        this.$refs.clearYzm.style="display:block";
        if((/^[0-9a-zA-Z]{4}$/).test(this.getYzmd)){
          this.$refs.yzm_err.innerHTML=""
          this.$refs.yzm.style="border: 1px solid #e6e6e6;"
          this.isReg[0]=true;
        }else{
          this.$refs.yzm_err.innerHTML="验证码格式错误"
          this.$refs.yzm.style="border: 1px solid #f04848;"
          this.isReg[0]=false;
        }
      }else{
        this.$refs.clearYzm.style="display:none"
        this.$refs.yzm_err.innerHTML="验证码不能为空"
        this.$refs.yzm.style="border: 1px solid #f04848;"
      }
    }
  },
}
</script>
<style scoped>
*{
  padding: 0;
  margin:0;
}
html,body,#reg,.value{
  height:100%;
}
.value{
  text-align: center;
  margin:0 auto;
  max-width: 22.5rem;
}
.value>.reg{
  position: relative;
  top:6.7rem;
}
.value .reg_way{
  text-align: center;
}
.value .reg_way>span{
  cursor: pointer;
  font-size: .94rem;
  line-height: .14rem;
  margin: 0 1.18rem;
  padding: .09rem 0;
}
.active{
  color: #4c4c4c;
  border-bottom: 3px solid #44a8f2;
}
.no_active{
  color: #999;
  cursor: pointer;
}
.value .phone_tel .btn{
  width: 3.84rem;
  height: 2.4rem;
  color: #b3b3b3;
  border: none;
  margin: .06rem 0;
  border-right: 1px solid #e6e6e6;
  border-radius: 0;
  font-size: .14rem;
  border-color: #fff;
  background: #fff;
  border:1px solid #e6e6e6;
}
.value .padding{
  width:19.7rem;
  margin:0 auto;
}
.value .phone,.value .email{
  margin-top:1.4rem;
  transition: all 1.5s linear;
}
.value .phone>.phone_tel,.value .phone>.phone_yzm{
  margin-bottom:1rem;
  text-align: left;
  position: relative;
}
.value .phone_yzm input{
  width:10.7rem !important;
}
.value .phone_tel input,.value .phone_yzm>input{
  width:14.4rem;
  height: 2.2rem;
  border: 1px solid #e6e6e6;
  font-size: .14rem;
  line-height: 1.5;
  border-radius: 0;
  padding-left: .72rem;
  color: #4c4c4c;
  box-shadow: none;
  outline: none;
}
.value .phone_yzm>.goCode{
  text-align: center;
  margin-left: 1.05rem;
  color: #44a8f2;
  background: #fff;
  border-radius: 0.05rem;
  border: 1px solid #44a8f2;
  height: 2.4rem;
  width: 6.62rem;
  font-size: 0.92rem;
  outline: none;
}
.value .next_button>.goNext{
  width: 100%;
  height:2.80rem;
  background: #44a8f2;
  text-align: center;
  border-radius: 2px;
  color: #fff;
  border: 1px solid #ccc;
  font-size: .96rem;
  cursor: pointer;
  outline:none;
}
.value .login{
  padding-top:1.25rem;
}
.value .login>a{
  color:#44a8f2;
  text-decoration: none;
}
.value .phone_tel>.clearInput,.value .phone_yzm>.clearYzm{
  height:1rem;
  width:1rem;
  top: 1.3rem;
  display:none;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAACH1JREFUeAHtnU9oHFUcx3c3f6BJatIkQhIIgbTNoihIPQj+qdiDrVCh6qkXIZfiRezJi2cvnlJykVwCXnrSeihYPVRoVepBESq1m7aBEpoGKnZjkxaSNPX7nc4vvp2d2Xkz82bm7WYfvLy3M29+7/f77C+/mX3z5k2xYFF68uRJ161bt8rb29tl1MtQjXkS9X6Ue5WMauGB5GKxuIr6InIF9UqpVKrs37+f9U1ssyIV89QCAEuLi4uHHj9+/BbqR5DfgD69hnRaB+jLyBc7Ojp+nJyc/B31bUOyI4vJBfTNmzdf3tra+hCGnwTcZyNrHeMA9HUPfZ3t7Oz86sCBA7/FEJHokMxA37hx4xkYegp5Gvn5RFonPBjQryHPI88dPHjw34TitA5PHfTS0tLgo0ePTgPux8gDWlpl1Aigq8ize/bsmRkfH/8nzW5TA72ystK7urr6GQHDgL40jTAge43A+/v7Px8ZGVk3IK9ORCqgFxYW3gfgGeTxuh4t3gDYS8inp6amvjGtplHQuIKY2Nzc/BKAj5lWNEt5gH2hq6vrI1yp3DbVrzHQlUrlBJSaB2Sr4nBcUIBdxbHT5XL527gy1ONK6oc4dYDtvn79OsPEuVaBTA60hTa5tnXHYaMek8ij4cXDEHYeCr2iCm21Orz7V9h0HN79d1zbYns04zEA/9zqkAmWNiL/RJvjgo7l0fhl9wJ+2X2PTsfidtykxy3jl+VR/LL8M6r+kUG7kC+ho31RO2uR9vcB+3BU2JFCB/91XE/erZDpK/vIIGoY0fZonvgYk9HRVIt4ZlIzOAz7uu4JUsujAZiXN+fbkGu+G46V84pL69JPCzS8+QsIbOlLuBqEmh/IhGx0moeGDgg6AYHndITt1jYIIe+F/YJsCJoBH2MXfwB0S/ysTssR+HMdYyMvNRobaRg63AGiNuSQb4iOSFaNmgWCdoc6E4/C4dsuDA0NFVjalkzqBtjHyCzIRl/QHLTHgTNBB+lupyFjY2OF4eFhp7QJdhq6kRnZ+fHxBe3eGUk0aC+G9PU9vbnCktBtgJ2WbgA9TnZ+oOv+n3mPb319/TYax7795DVE7Xhtba2wvLzMgRp1c2b1DHRb6+3tnfDeg6zzaN5ITQKZxAYHBwviyV6CeXp2I8jUk7pR94Spz2VYI6bGozklALOEbsPbEl1phBlEDbL27Cx1Ql9VzJaaUKcy1Hg0AHPeRSLIhMiwwPBAmEEpS8/OErJrP+/OnFJt94KeVncmqdsCO2vIwgz217DcAc1pWthpdAZR3rDzgkzYZEmmAn4HNOfCyUaTZV6w84Qs/FSmDmjAKEGxk9LAdJk1bBsgkyGZki3rzh8MHh3ChlRndWYF2xbIhEumZLsDmvOT+SHtlDZsmyALS2EroeOI7Ei7TAu2jZDJEvY6bEuodCFzpn1myTRsWyETKNmScdGdPnA1M8pKRyYAmZChqJRKFdMTXizxwZxUpGsITerZzQCZGMiYoSM30FQiLuxmgezaWObJMFfQcWA3E2Tah1TuxJ9Jp5rzH/Fs3hzQGWLFmG+gxlmPDAYq8v+OSYYOPixpRRLYYaN+TQaZ4bGfoYNPpFqTdGAHKWuhJ4uqe60DTc3iwLYYMk2yE3RU2LjHmet9SOobkhzQIW3y3c0rjLDE/wDbE0MHVwmwLsklXKMTnyid5W0x6TNi+cBK0AI56DLPz0jLYdsHOg5kAW8x7Ae8s8JFRaxIOpB54gu7zrZlRpRAJWOGDq7cknvSgUzAd+7csWoqgya4RYKuaDZOrZkuZJlKpnOdbVkYqTB05Ao6KmT5tpsJNhlj5lIpN9BxITcbbDIuwjO68JzKfSgfPBwmlhksk0JWVTEpS5VrqL6O51v2MXRsIl82JFRLjGkwNocRsiVjngw50eOiFiEDjUxDFpVshS1sHdBcF04UTrNMC7LobCNsYeuM2EDBEh50WUGZ2myltCELbJZZ9qX2661Dj3tYn2kE5baEjm1APuttaOpz1obb4tlkSsjk6IBmhSscsjSdsoYs+tsAW2W6A5rLSALKNVHURJkXZNE9T9hkqS7NuQOaymHnvCiZtMwbsuifF2wvSy/oOTSoipJJytHR0cBpA5Sb5T0+XdjU2UQiQ+Q5VVYNaD5FhAazaoO49Wq1yqlQvodnCVkUCINNXamziUSG6hNZlFkDmhu4ICqK4Mep2EgjPXz40BnS9MLOA7KoGwSbOnL4lTobSGsuwxpRdaD5xKcpr/bCzhOyWO2FbRgyz3Oz3qdm2bfvLWZ3pdy/oFSi58HFuJ6ensLAwEDh7t27zpwN2Z5nCSAFxmSGC0OeTMhLWLH3Ob8Ve31BEwCXRMC3/XWeMJqtbwyHfhC0Um8gaBqJ4dPv4NWJ1+xoNmBx9IU3X8Bw6DtBx9bFaLUhl/aFADOnYlVwi9XJiKwamdUQtLtG0HQjAe19DoHpRuspsUVD0Gzgrn51hvV28iVwJmyFMB7VMEaLWMTpbpwcL6Fsr30nUAivWLyCk9+bKDeUzb7VUI/mUa6g46gu+ErZnRvJ4l0dyMSj5dHCkevgbWxs/ILPY7Jtl5bL3d3dr4bFZZWNlkfLARSMsysv93jXfLcmLmt8NApkgooEmgfgZV9X0dFhVJf5eZclLtQdee1oMooUOlSobhj5Adum1O0tXF9AuHg7qicLj8geLQeyQ5wIXkPmiwZaOsHGK7Q1LmTCie3RQpaXfu7Svp/IthYreZ38KUBvJLErMWjpnMsfoz4P8AOyrZlLgOXQg7EX3hgDTaiM2+1XOPm7l1HQ0gWHWOHZM8hGxrNFbtolvLg5Xkqmgmi/Zk+lYeBkWCuu/lP7xZFPmaQSOupxFwrtV6H6UUl5G1c45OJ7iIntl/umzNoRj5Nl+3XVWYD29gHwLfsC9v8A1YPXdzdGviUAAAAASUVORK5CYII=);
  background-size: 0.96rem 0.96rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;    
  position: absolute;
  transform: translateY(-50%);
  padding: .1rem;
}
.value .phone_tel>.clearInput{
  right: 1.3rem;
}
.value .phone_yzm>.clearYzm{
  right: 9.2rem;
}
.value .phone .msg_err{
  color: #f04848;
  font-size: .12rem;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  line-height: 1.8;
  text-align: left;
  margin-left: 1.10rem;
  margin: 0.55rem;
}
.value>.reg .email{
  display:none;
}
</style>
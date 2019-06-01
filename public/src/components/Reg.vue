<template>
  <div id="reg">
    <div class="reg">
      <div class="goOut" @click="goOut()">返回</div>
      <div class="reg">
        <div class="padding">
          <div class="reg_way">
            <span class="active" v-on:click="phone($event)">手机注册</span>
            <span class="no_active" v-on:click="email($event)">邮箱注册</span>
          </div>
          <div class="phone" ref="Phone">
            <div class="phone_tel">
              <button disabled class="btn">+86</button>
              <input type="text" placeholder="请输入手机号*" ref="phone" v-model="getPhone">
              <i class="clearInput" ref="clearInput" @click="clearPhone()"></i>
              <div class="msg_err">
                <span ref="phone_err"></span>
              </div>
            </div>
            <div class="phone_yzm">
              <input type="text" placeholder="请输入验证码*" ref="yzm" v-model="getYzm">
              <i class="clearYzm" ref="clearYzm" @click="clearYzm()"></i>
              <button class="goCode" ref="goCode" @click="goCode()">发送验证码</button>
              <div class="msg_err">
                <span ref="yzm_err"></span>
              </div>
            </div>
            <div class="phone_psword">
              <input type="text" placeholder="请输入密码*" ref="psword" v-model="getPsword">
              <i class="clearPsword" ref="clearPsword" @click="clearPsword()"></i>
              <div class="msg_err">
                <span ref="psword_err"></span>
              </div>
            </div>
            <div class="next_button">
              <button class="goNext" to="/nextPhone">下一步</button>
            </div>
            <div class="login">
              <router-link to="/Login">立即登录</router-link>
            </div>
          </div>
          <div class="email" ref="Email">
            <div class="one_email">
              <input type="text" placeholder="邮箱*" ref="email" v-model="getEmail">
              <i class="clearEmail" ref="clearEmail" @click="clearEmail()"></i>
              <div class="msg_err">
                <span ref="email_err"></span>
              </div>
            </div>
            <div class="two_phone">
              <button disabled class="btn">+86</button>
              <input type="text" placeholder="请输入手机号*" ref="phoned" v-model="getPhoned">
              <i class="clearPhoned" ref="clearPhoned" @click="clearPhoned()"></i>
              <div class="msg_err">
                <span ref="phoned_err"></span>
              </div>
            </div>
            <div class="three_yzm">
              <input type="text" placeholder="请输入验证码*" ref="yzmd" v-model="getYzmd">
              <i class="clearYzmd" ref="clearYzmd" @click="clearYzmd()"></i>
              <button class="goCode" ref="goCoded" @click="goCoded()">发送验证码</button>
              <div class="msg_err">
                <span ref="yzmd_err"></span>
              </div>
            </div>
            <div class="four_upwd">
              <input type="password" placeholder="密码*" ref="upwd" v-model="getUpwd">
              <i class="clearUpwd" ref="clearUpwd" @click="clearUpwd()"></i>
              <div class="msg_err">
                <span ref="upwd_err"></span>
              </div>
            </div>
            <div class="five_cpwd">
              <input type="password" placeholder="请再次输入密码*" ref="cpwd" v-model="getCpwd">
              <i class="clearCpwd" ref="clearCpwd" @click="clearCpwd()"></i>
              <div class="msg_err">
                <span ref="cpwd_err"></span>
              </div>
            </div>
            <div class="follow">
              <div class="one_text">
                <input type="checkbox" ref="checkOne" v-model="change[0]">
                <span>获取大疆最新产品、服务、软件升级等信息</span>
              </div>
              <div class="two_text">
                <input type="checkbox" ref="checkTwo" v-model="change[1]">
                <span>同意并愿意遵守大疆创新
                  <a href="">使用条款</a> 和 
                  <a href="">隐私政策</a>
                </span>
              </div>
              <button id="emailReg" ref="emailReg" disabled>注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foter></foter>
  </div>
</template>
<script>
import foter from "@/components/UserFooter.vue"
export default {
  name:"reg",
  components:{"foter":foter},
  data() {
    return{
      getPhone:"",
      getPhoned:"",
      getYzm:"",
      getPsword:"",
      getEmail:"",
      getYzmd:"",
      getUpwd:"",
      getCpwd:"",
      isReg:[],
      change:[],
    }
  },
  mounted() {
    if(this.getPhone.length>=1){
      this.$refs.clearInput.style="display:block"
    }
    if(this.getYzm.length>=1){
      this.$refs.clearYzm.style="display:block"
    }
    if(this.getPsword.length>=1){
      this.$refs.clearPsword.style="display:block"
    }
    if(this.getEmail.length>=1){
      this.$refs.clearEmail.style="display:block"
    }
    if(this.getYzmd.length>=1){
      this.$refs.clearYzmd.style="display:block"
    }
    if(this.getUpwd.length>=1){
      this.$refs.clearUpwd.style="display:block"
    }
    if(this.getCpwd.length>=1){
      this.$refs.clearCpwd.style="display:block"
    }
  },
  methods: {
    goOut(){
      if (window.history.length<=1) {
        this.$router.push({path:'/'})
        return false
      }else{
        this.$router.go(-1)
      }
    },
    // this.$options.methods.函数名字();在methods一个函数调用另外一个函数
    clearPhone(){
      if(this.getPhone!=""){
        this.getPhone=""
        this.$refs.clearInput.style="display:none"
        this.$refs.phone_err.innerHTML="手机号不能为空"
        this.$refs.phone.style="border: 1px solid #f04848;"
      }
    },
    clearYzm(){
      if(this.getYzm!=""){
        this.getYzm=""
        this.$refs.clearYzm.style="display:none"
        this.$refs.yzm_err.innerHTML="验证码不能为空"
        this.$refs.yzm.style="border: 1px solid #f04848;"
      }
    },
    clearPsword(){
      if(this.getPsword!=""){
        this.getPsword=""
        this.$refs.clearPsword.style="display:none"
        this.$refs.psword_err.innerHTML="密码不能为空"
        this.$refs.psword.style="border: 1px solid #f04848;"
      }
    },
    clearEmail(){
      if(this.getEmail!=""){
        this.getEmail=""
        this.$refs.clearEmail.style="display:none"
        this.$refs.email_err.innerHTML="邮箱不能为空"
        this.$refs.email.style="border: 1px solid #f04848;"
      }
    },
    clearPhoned(){
      if(this.getPhoned!=""){
        this.getPhoned=""
        this.$refs.clearPhoned.style="display:none"
        this.$refs.phoned_err.innerHTML="确认密码不能为空不能为空"
        this.$refs.phoned.style="border: 1px solid #f04848;"
      }
    },
    clearYzmd(){
      if(this.getYzmd!=""){
        this.getYzmd=""
        this.$refs.clearYzmd.style="display:none"
        this.$refs.yzmd_err.innerHTML="验证码不能为空"
        this.$refs.yzmd.style="border: 1px solid #f04848;"
      }
    },
    clearUpwd(){
      if(this.getUpwd!=""){
        this.getUpwd=""
        this.$refs.clearUpwd.style="display:none"
        this.$refs.upwd_err.innerHTML="密码不能为空"
        this.$refs.upwd.style="border: 1px solid #f04848;"
      }
    },
    clearCpwd(){
      if(this.getCpwd!=""){
        this.getCpwd=""
        this.$refs.clearCpwd.style="display:none"
        this.$refs.cpwd_err.innerHTML="确认密码不能为空不能为空"
        this.$refs.cpwd.style="border: 1px solid #f04848;"
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
    goCoded(){
      var num=60;
      this.$refs.goCoded.innerHTML="重新发送("+num+"s)";
      this.$refs.goCoded.disabled=true;
      let click=window.setInterval(()=>{
        num--;
        this.$refs.goCoded.innerHTML="重新发送("+num+"s)"
        if(num==0){
          clearInterval(click);
          this.$refs.goCoded.innerHTML="发送验证码";
          this.$refs.goCoded.disabled=false;
        }
      },1000)
    },
    phone(event){
      event.preventDefault();
      var el=event.currentTarget.parentNode.children;
      this.$refs.Phone.className="phone"
      this.$refs.Email.className="phone none"
      this.$refs.Email.style="opacity:0;height:0;"
      for(var i=0;i<el.length;i++){
        el[i].className="no_active"
      }
      event.currentTarget.className="active"
    },
    email(event){
      event.preventDefault();
      var el=event.currentTarget.parentNode.children;
      this.$refs.Email.className="email"
      this.$refs.Phone.className="email none"
      this.$refs.Email.style="opacity:1;height:auto;"
      for(var i=0;i<el.length;i++){
        el[i].className="no_active"
      }
      event.currentTarget.className="active"
    },
  },
  watch: {
    change(){
      if(this.change[0]&&this.change[1]){
        this.$refs.emailReg.style="opacity:1;-webkit-appearance:button;cursor: pointer;"
      }else{
        this.$refs.emailReg.style="opacity:0.6;cursor:not-allowed"
      }
    },
    getPhone(){
      if(this.getPhone.length>=1){
      var num=new Number(this.getPhone);
      this.$refs.clearInput.style="display:block";
        if(num.toString()!="NaN"&&(/^0?1[3|4|5|6|7|8][0-9]\d{8}$/).test(this.getPhone)){
          this.$axios.get("http://127.0.0.1:3000/login/phone?phone="+this.getPhone).then(res=>{
            if(res.data.code!=0){
              this.$refs.phone_err.innerHTML="该手机号已被注册!"
              this.$refs.phone.style="border: 1px solid #f04848;"
              this.isReg[0]=false;
            }
          })
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
    getYzm(){
      if(this.getYzm.length>=1){
      this.$refs.clearYzm.style="display:block";
      // (/^[0-9a-zA-Z]{4}$/).test(this.getYzm)
        if(this.getYzm=="ABCD"){
          this.$refs.yzm_err.innerHTML=""
          this.$refs.yzm.style="border: 1px solid #e6e6e6;"
          this.isReg[1]=true;
        }else{
          this.$refs.yzm_err.innerHTML="验证码格式错误"
          this.$refs.yzm.style="border: 1px solid #f04848;"
          this.isReg[1]=false;
        }
      }else{
        this.$refs.clearYzm.style="display:none"
        this.$refs.yzm_err.innerHTML="验证码不能为空"
        this.$refs.yzm.style="border: 1px solid #f04848;"
      }
    },
    getPsword(){
      if(this.getPsword.length>=1){
      this.$refs.clearPsword.style="display:block";
        if(!this.isReg[1]){
          this.$refs.psword_err.innerHTML="请先填写验证码!"
          this.$refs.psword.style="border: 1px solid #f04848;"
          this.isReg[3]=false;
        }else if((/^[0-9a-zA-Z]{6,20}$/).test(this.getPsword)){
          this.$refs.psword_err.innerHTML=""
          this.$refs.psword.style="border: 1px solid #e6e6e6;"
          this.isReg[3]=true;
        }else{
          this.$refs.psword_err.innerHTML="密码格式错误"
          this.$refs.psword.style="border: 1px solid #f04848;"
          this.isReg[3]=false;
        }
      }else{
        this.$refs.clearPsword.style="display:none"
        this.$refs.psword_err.innerHTML="密码不能为空"
        this.$refs.psword.style="border: 1px solid #f04848;"
      }
    },
    getEmail(){
      if(this.getEmail.length>=1){
      this.$refs.clearEmail.style="display:block";
        if((/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/).test(this.getEmail)){
          this.$axios.get("http://127.0.0.1:3000/login/email?email="+this.getEmail).then(res=>{
            if(res.data.code!=0){
              this.$refs.email_err.innerHTML="该邮箱已被注册!"
              this.$refs.email.style="border: 1px solid #f04848;"
              this.isReg[2]=false;
            }
          })
          this.$refs.email_err.innerHTML=""
          this.$refs.email.style="border: 1px solid #e6e6e6;"
          this.isReg[2]=true;
        }else{
          this.$refs.email_err.innerHTML="邮箱格式错误"
          this.$refs.email.style="border: 1px solid #f04848;"
          this.isReg[2]=false;
        }
      }else{
        this.$refs.clearEmail.style="display:none"
        this.$refs.email_err.innerHTML="邮箱不能为空"
        this.$refs.email.style="border: 1px solid #f04848;"
      }
    },
    getPhoned(){
      if(this.getPhoned.length>=1){
      var num=new Number(this.getPhoned);
      this.$refs.clearPhoned.style="display:block";
        if(num.toString()!="NaN"&&(/^0?1[3|4|5|6|7|8][0-9]\d{8}$/).test(this.getPhoned)){
          this.$axios.get("http://127.0.0.1:3000/login/phone?phone="+this.getPhoned).then(res=>{
            if(res.data.code!=0){
              this.$refs.phoned_err.innerHTML="该手机号已被注册!"
              this.$refs.phoned.style="border: 1px solid #f04848;"
              this.isReg[5]=false;
            }
          })
          this.$refs.phoned_err.innerHTML=""
          this.$refs.phoned.style="border: 1px solid #e6e6e6;"
          this.isReg[5]=true;
        }else{
          this.$refs.phoned_err.innerHTML="手机号格式错误"
          this.$refs.phoned.style="border: 1px solid #f04848;"
          this.isReg[5]=false;
        }
      }else{
        this.$refs.clearPhoned.style="display:none"
        this.$refs.phoned_err.innerHTML="手机号不能为空"
        this.$refs.phoned.style="border: 1px solid #f04848;"
      }
    },
    getYzmd(){
      if(this.getYzmd.length>=1){
      this.$refs.clearYzmd.style="display:block";
      // (/^[0-9a-zA-Z]{4}$/).test(this.getYzmd)
        if(this.getYzmd=="ABCD"){
          this.$refs.yzmd_err.innerHTML=""
          this.$refs.yzmd.style="border: 1px solid #e6e6e6;"
          this.isReg[1]=true;
        }else{
          this.$refs.yzmd_err.innerHTML="验证码格式错误"
          this.$refs.yzmd.style="border: 1px solid #f04848;"
          this.isReg[1]=false;
        }
      }else{
        this.$refs.clearYzmd.style="display:none"
        this.$refs.yzmd_err.innerHTML="验证码不能为空"
        this.$refs.yzmd.style="border: 1px solid #f04848;"
      }
    },
    getUpwd(){
      if(this.getUpwd.length>=1){
      this.$refs.clearUpwd.style="display:block";
        if(this.getCpwd!=this.getUpwd&&this.getCpwd!=""){
          this.$refs.upwd_err.innerHTML="两次密码输入不一致哦!"
          this.$refs.upwd.style="border: 1px solid #f04848;"
          this.$refs.cpwd.style="border: 1px solid #f04848;"
          this.isReg[3]=false;
        }else if((/^[0-9a-zA-Z]{6,20}$/).test(this.getUpwd)){
          this.$refs.upwd_err.innerHTML=""
          this.$refs.cpwd_err.innerHTML=""
          this.$refs.upwd.style="border: 1px solid #e6e6e6;"
          this.$refs.cpwd.style="border: 1px solid #e6e6e6;"
          this.isReg[3]=true;
        }else{
          this.$refs.upwd_err.innerHTML="密码格式错误"
          this.$refs.upwd.style="border: 1px solid #f04848;"
          this.isReg[3]=false;
        }
      }else{
        this.$refs.clearUpwd.style="display:none"
        this.$refs.upwd_err.innerHTML="密码不能为空"
        this.$refs.upwd.style="border: 1px solid #f04848;"
      }
    },
    getCpwd(){
      if(this.getCpwd.length>=1){
      this.$refs.clearCpwd.style="display:block";
        if((/^[0-9a-zA-Z]{6,20}$/).test(this.getCpwd)&&this.getCpwd==this.getUpwd){
          this.$refs.cpwd_err.innerHTML=""
          this.$refs.upwd_err.innerHTML=""
          this.$refs.cpwd.style="border: 1px solid #e6e6e6;"
          this.$refs.upwd.style="border: 1px solid #e6e6e6;"
          this.isReg[4]=true;
        }else if(this.getUpwd==""){
          this.$refs.cpwd_err.innerHTML="请先输入密码"
          this.$refs.upwd.style="border: 1px solid #f04848;"
          this.isReg[4]=false;
        }else if(this.getCpwd!=this.getUpwd){
          this.$refs.cpwd_err.innerHTML="两次密码输入不一致哦!"
          this.$refs.cpwd.style="border: 1px solid #f04848;"
          this.$refs.upwd.style="border: 1px solid #f04848;"
          this.isReg[4]=false;
        }else if(this.getCpwd==this.getUpwd){
          this.$refs.cpwd_err.innerHTML=""
          this.$refs.cpwd.style="border: 1px solid #e6e6e6;"
          this.$refs.upwd.style="border: 1px solid #e6e6e6;"
          this.isReg[4]=false;
        }else{
          this.$refs.cpwd_err.innerHTML="密码格式错误"
          this.$refs.cpwd.style="border: 1px solid #f04848;"
          this.isReg[4]=false;
        }
      }else{
        this.$refs.clearCpwd.style="display:none"
        this.$refs.cpwd_err.innerHTML="确认密码不能为空"
        this.$refs.cpwd.style="border: 1px solid #f04848;"
      }
    },
  },
}
</script>
<style lang="css">
*{
  padding:0;
  margin:0;
}
</style>
<style scoped lang="css">
html,body,#reg,.reg{
  height:100%;
}
.reg{
  text-align: center;
  margin:0 auto;
  max-width: 24rem;
  position: relative;
}
.reg>.reg{
  position: relative;
  top:6.7rem;
}
.goOut{
  width:60px;
  line-height: 30px;
  border-radius: 0.6rem;
  text-align: center;
  background-color: #f8f8f9;
  position: absolute;
  top:2rem;
}
.reg .reg_way{
  text-align: center;
}
.reg .reg_way>span{
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
.reg .phone_tel .btn{
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
.reg .padding{
  padding: 0 20px;
}
.reg .email{
  opacity:0;
  height:0;
}
.reg .phone,.reg .email{
  margin-top:1.4rem;
  transition: all 1.5s linear;
}
.reg .phone>.phone_tel,
.reg .phone>.phone_yzm,
.reg .phone>.phone_psword,
.reg .email>.one_email,
.reg .email>.two_phone,
.reg .email>.three_yzm,
.reg .email>.four_upwd,
.reg .email>.five_cpwd,
.reg .phone>.phone_psword{
  margin-bottom:1rem;
  text-align: left;
  position: relative;
}
.reg .phone>.phone_yzm input{
  width:10.7rem;
}
.reg .phone_tel input{
  width:14.4rem;
}
.reg>.reg .email>.phone_yzm>input{
  width:11.7rem !important;
}
.reg .phone_tel input,.reg .phone>.phone_yzm>input{
  height: 2.2rem;
  position: relative;
  border: 1px solid #e6e6e6;
  font-size: .14rem;
  line-height: 1.5;
  border-radius: 0;
  padding-left: .72rem;
  color:#979797;
  box-shadow: none;
  outline: none;
}
.reg .phone_yzm>.goCode{
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
.reg .next_button>.goNext{
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
.reg .login{
  padding-top:1.25rem;
}
.reg .login>a{
  color:#44a8f2;
  text-decoration: none;
}
.reg .phone_tel>.clearInput,.reg .phone_yzm>.clearYzm,.reg .phone_psword>.clearPsword{
  height:1rem;
  width:1rem;
  top: 1.3rem;
  display:none;
  background-image: url(data:image/png;base64,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);
  background-size: 0.96rem 0.96rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;    
  position: absolute;
  transform: translateY(-50%);
  padding: .1rem;
}
.reg .phone_tel>.clearInput{
  right: 1.3rem;
}
.reg .phone_yzm>.clearYzm{
  right: 9.2rem;
}
.reg .phone_psword>.clearPsword{
  right:1.3rem;
}
.reg .phone .msg_err{
  color: #f04848;
  font-size: .12rem;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  line-height: 1.8;
  text-align: left;
  margin-left: 1.10rem;
  margin: 0.55rem;
}
.reg>.reg .email input{
  width: 100%;
  height: 2.39rem;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.1rem;
  padding-right: 2.8rem;
  border: 1px solid #e6e6e6;
  font-size: .84rem;
  color: #979797;
  outline: none;
  box-sizing: border-box;
}
.reg>.reg .email>.follow{
  text-align: left;
}
.reg>.reg .follow>.one_text>input,.reg>.reg .follow>.two_text>input{
  width:1.02rem;
  height:1.12rem;
  position: relative;
}
.reg>.reg .follow>.one_text>span,.reg>.reg .follow .two_text>span{
  font-size: 0.82rem;
  color:#4c4c4c;
  position: absolute;
  line-height: 1.1rem;
  padding-left: 0.5rem;
}
.reg>.reg .follow .two_text>span>a{
  color:#4c4c4c;
  text-decoration:1px solid #4c4c4c;
}
#emailReg:disabled,[readonly=readonly]#emailReg {
  opacity: .6;
  cursor: not-allowed;
}
#emailReg{
  width: 100%;
  color: #fff;
  background: #44a8f2;
  border: 1px solid #44a8f2;
  text-transform: uppercase;
  text-align: center;
  border-radius: 2px;
  height: 2.76rem;
  font-size: 1.16rem;
  cursor: pointer;
  outline: none;
  margin-top: 1.2rem;
}
.reg>.reg .email>div>i{
  height:1rem;
  width:1rem;
  display: none;
  right: 1.2rem;
  top:1.2rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAAXNSR0IArs4c6QAACH1JREFUeAHtnU9oHFUcx3c3f6BJatIkQhIIgbTNoihIPQj+qdiDrVCh6qkXIZfiRezJi2cvnlJykVwCXnrSeihYPVRoVepBESq1m7aBEpoGKnZjkxaSNPX7nc4vvp2d2Xkz82bm7WYfvLy3M29+7/f77C+/mX3z5k2xYFF68uRJ161bt8rb29tl1MtQjXkS9X6Ue5WMauGB5GKxuIr6InIF9UqpVKrs37+f9U1ssyIV89QCAEuLi4uHHj9+/BbqR5DfgD69hnRaB+jLyBc7Ojp+nJyc/B31bUOyI4vJBfTNmzdf3tra+hCGnwTcZyNrHeMA9HUPfZ3t7Oz86sCBA7/FEJHokMxA37hx4xkYegp5Gvn5RFonPBjQryHPI88dPHjw34TitA5PHfTS0tLgo0ePTgPux8gDWlpl1Aigq8ize/bsmRkfH/8nzW5TA72ystK7urr6GQHDgL40jTAge43A+/v7Px8ZGVk3IK9ORCqgFxYW3gfgGeTxuh4t3gDYS8inp6amvjGtplHQuIKY2Nzc/BKAj5lWNEt5gH2hq6vrI1yp3DbVrzHQlUrlBJSaB2Sr4nBcUIBdxbHT5XL527gy1ONK6oc4dYDtvn79OsPEuVaBTA60hTa5tnXHYaMek8ij4cXDEHYeCr2iCm21Orz7V9h0HN79d1zbYns04zEA/9zqkAmWNiL/RJvjgo7l0fhl9wJ+2X2PTsfidtykxy3jl+VR/LL8M6r+kUG7kC+ho31RO2uR9vcB+3BU2JFCB/91XE/erZDpK/vIIGoY0fZonvgYk9HRVIt4ZlIzOAz7uu4JUsujAZiXN+fbkGu+G46V84pL69JPCzS8+QsIbOlLuBqEmh/IhGx0moeGDgg6AYHndITt1jYIIe+F/YJsCJoBH2MXfwB0S/ysTssR+HMdYyMvNRobaRg63AGiNuSQb4iOSFaNmgWCdoc6E4/C4dsuDA0NFVjalkzqBtjHyCzIRl/QHLTHgTNBB+lupyFjY2OF4eFhp7QJdhq6kRnZ+fHxBe3eGUk0aC+G9PU9vbnCktBtgJ2WbgA9TnZ+oOv+n3mPb319/TYax7795DVE7Xhtba2wvLzMgRp1c2b1DHRb6+3tnfDeg6zzaN5ITQKZxAYHBwviyV6CeXp2I8jUk7pR94Spz2VYI6bGozklALOEbsPbEl1phBlEDbL27Cx1Ql9VzJaaUKcy1Hg0AHPeRSLIhMiwwPBAmEEpS8/OErJrP+/OnFJt94KeVncmqdsCO2vIwgz217DcAc1pWthpdAZR3rDzgkzYZEmmAn4HNOfCyUaTZV6w84Qs/FSmDmjAKEGxk9LAdJk1bBsgkyGZki3rzh8MHh3ChlRndWYF2xbIhEumZLsDmvOT+SHtlDZsmyALS2EroeOI7Ei7TAu2jZDJEvY6bEuodCFzpn1myTRsWyETKNmScdGdPnA1M8pKRyYAmZChqJRKFdMTXizxwZxUpGsITerZzQCZGMiYoSM30FQiLuxmgezaWObJMFfQcWA3E2Tah1TuxJ9Jp5rzH/Fs3hzQGWLFmG+gxlmPDAYq8v+OSYYOPixpRRLYYaN+TQaZ4bGfoYNPpFqTdGAHKWuhJ4uqe60DTc3iwLYYMk2yE3RU2LjHmet9SOobkhzQIW3y3c0rjLDE/wDbE0MHVwmwLsklXKMTnyid5W0x6TNi+cBK0AI56DLPz0jLYdsHOg5kAW8x7Ae8s8JFRaxIOpB54gu7zrZlRpRAJWOGDq7cknvSgUzAd+7csWoqgya4RYKuaDZOrZkuZJlKpnOdbVkYqTB05Ao6KmT5tpsJNhlj5lIpN9BxITcbbDIuwjO68JzKfSgfPBwmlhksk0JWVTEpS5VrqL6O51v2MXRsIl82JFRLjGkwNocRsiVjngw50eOiFiEDjUxDFpVshS1sHdBcF04UTrNMC7LobCNsYeuM2EDBEh50WUGZ2myltCELbJZZ9qX2661Dj3tYn2kE5baEjm1APuttaOpz1obb4tlkSsjk6IBmhSscsjSdsoYs+tsAW2W6A5rLSALKNVHURJkXZNE9T9hkqS7NuQOaymHnvCiZtMwbsuifF2wvSy/oOTSoipJJytHR0cBpA5Sb5T0+XdjU2UQiQ+Q5VVYNaD5FhAazaoO49Wq1yqlQvodnCVkUCINNXamziUSG6hNZlFkDmhu4ICqK4Mep2EgjPXz40BnS9MLOA7KoGwSbOnL4lTobSGsuwxpRdaD5xKcpr/bCzhOyWO2FbRgyz3Oz3qdm2bfvLWZ3pdy/oFSi58HFuJ6ensLAwEDh7t27zpwN2Z5nCSAFxmSGC0OeTMhLWLH3Ob8Ve31BEwCXRMC3/XWeMJqtbwyHfhC0Um8gaBqJ4dPv4NWJ1+xoNmBx9IU3X8Bw6DtBx9bFaLUhl/aFADOnYlVwi9XJiKwamdUQtLtG0HQjAe19DoHpRuspsUVD0Gzgrn51hvV28iVwJmyFMB7VMEaLWMTpbpwcL6Fsr30nUAivWLyCk9+bKDeUzb7VUI/mUa6g46gu+ErZnRvJ4l0dyMSj5dHCkevgbWxs/ILPY7Jtl5bL3d3dr4bFZZWNlkfLARSMsysv93jXfLcmLmt8NApkgooEmgfgZV9X0dFhVJf5eZclLtQdee1oMooUOlSobhj5Adum1O0tXF9AuHg7qicLj8geLQeyQ5wIXkPmiwZaOsHGK7Q1LmTCie3RQpaXfu7Svp/IthYreZ38KUBvJLErMWjpnMsfoz4P8AOyrZlLgOXQg7EX3hgDTaiM2+1XOPm7l1HQ0gWHWOHZM8hGxrNFbtolvLg5Xkqmgmi/Zk+lYeBkWCuu/lP7xZFPmaQSOupxFwrtV6H6UUl5G1c45OJ7iIntl/umzNoRj5Nl+3XVWYD29gHwLfsC9v8A1YPXdzdGviUAAAAASUVORK5CYII=);
  background-size: 0.96rem 0.96rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;    
  position: absolute;
  transform: translateY(-50%);
  padding: .1rem;
}
.reg .email .msg_err{
  color: #f04848;
  font-size: .12rem;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  line-height: 1.8;
  text-align: left;
  margin-left:1.10rem;
  margin:0.55rem;
}
.reg .phone>.phone_psword>input{
  width: 100%;
  height: 2.39rem;
  position: relative;
  padding-left: .72rem;
  border: 1px solid #e6e6e6;
  font-size: .84rem;
  color: #979797;
  outline: none;
  box-sizing: border-box;
}
.reg .email>.three_yzm>button{
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
.reg .email>.three_yzm>input{
  width:11.7rem;
}
.reg .email>.three_yzm>i{
  right:9rem !important;
}
.reg .email>.two_phone>.btn{
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
.reg .email>.two_phone>input{
  width:15.4rem;
}
/* 动画 */
.none{
  opacity: 0;
  padding: 0;
  margin:0;
  height:0 !important;
}
</style>
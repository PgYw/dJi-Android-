<template>
  <div id="user">
    <div class="user">
      <div class="err_msg" v-if="err_msg!=''">{{err_msg}}</div>
      <div class="goOut" @click="goOut()" v-show="err_msg==''">返回</div>
      <div class="login" v-show="err_msg==''">
        <div class="from">
          <div class="login_title">登录</div>
          <div class="admin">
            <input type="text" ref="admin" id="admin" placeholder="邮箱/手机*" v-model="getAdmin"/>
            <i class="clearInput" ref="clearInput" @click="clear()"></i>
            <div class="msg_err">
              <span ref="admin_err"></span>
            </div>
          </div>
          <div class="upwd">
            <input type="password" ref="upwd" id="upwd" placeholder="密码*" v-model="getUpwd">
            <i class="upwdHidden" ref="upwdHidden" @click="Bg()"></i>
            <div class="msg_err">
              <span ref="upwd_err"></span>
            </div>
          </div>
          <div class="msg_err">
            <span ref="err"></span>
          </div>
          <button id="login" @click="Login()">登录</button>
          <div class="forget-passord">
            <a href="">忘记密码?</a>
          </div>
          <div class="reg">
            <router-link to="/Reg">注册Dji账号</router-link>
          </div>
        </div>
      </div>
    </div>
    <child v-if="err_msg==''"></child>
  </div>
</template>
<script>
import child from "@/components/UserFooter.vue"
export default {
  name:"user",
  components:{"child":child},
  data(){
    return{
      bg:true,
      getAdmin:"",
      getUpwd:"",
      isLogin:0,
      product_arr:[],
      err_msg:"",
      isLogin:"",
    }
  },
  mounted() {
    window.addEventListener("storage",function(){
      console.log(11111)
    })
    if(sessionStorage.getItem("userId")!=(undefined||null)){
      var num=5;
      this.err_msg="对不起，请您退出后再进入本页面进行登录("+num+"s)"
      var isLogin=setInterval(()=>{
        num--;
        this.err_msg="对不起，请您退出后再进入本页面进行登录("+num+"s)"
        if(num==0){
          clearInterval(isLogin)
          this.$router.push({path:'/Index'})
        }
      },1000)
    }else if(localStorage.getItem("product")!=(undefined||null)){
      var getVal=localStorage.getItem("product");
      var userId=sessionStorage.getItem("userId")
      getVal=JSON.parse(getVal)
      for(var i=0;i<getVal.length;i++){
        var product_obj={
          product_id:getVal.product_id,
          product_count:getVal.product_count
        }
        product_obj.product_id=getVal[i].product_id
        product_obj.product_count=getVal[i].product_count
        this.product_arr.push(product_obj)
      }
    }
    if(this.getAdmin.length>=1){
      this.$refs.clearInput.style="display:block"
    }
    if(this.getUpwd.length>=1){
      this.$refs.upwdHidden.style="display:block"
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
    Bg(){
      if(this.bg){
        this.$refs.upwdHidden.style.backgroundImage="url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTYgMTIiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMTUuODE1IDcuMjg2QzE0LjI1IDQuNDgzIDExLjMyOCAyLjYxIDggMi42MWMtMy4zMyAwLTYuMjUgMS44NzUtNy44MTUgNC42NzctLjI0Ny40NC0uMjQ3Ljk4NyAwIDEuNDI4QzEuNzUgMTEuNTE3IDQuNjcyIDEzLjM5MSA4IDEzLjM5MWMzLjMzIDAgNi4yNS0xLjg3NSA3LjgxNS00LjY3Ny4yNDctLjQ0LjI0Ny0uOTg3IDAtMS40Mjh6TTggMTEuOTg0Yy0yLjA4OCAwLTMuNzc4LTEuNzgyLTMuNzc4LTMuOTg0UzUuOTEyIDQuMDE2IDggNC4wMTYgMTEuNzc4IDUuNzk4IDExLjc3OCA4IDEwLjA4OCAxMS45ODQgOCAxMS45ODR6TTEwLjg4OSA4YzAgMS42ODMtMS4yOTQgMy4wNDctMi44ODkgMy4wNDctMS41OTUgMC0yLjg4OS0xLjM2NC0yLjg4OS0zLjA0NyAwLS41MTkuMTIzLTEuMDA3LjM0LTEuNDM1di4wMDFjMCAuNjkzLjUzMyAxLjI1NSAxLjE5IDEuMjU1LjY1NyAwIDEuMTktLjU2MiAxLjE5LTEuMjU1IDAtLjY5My0uNTMzLTEuMjU0LTEuMTktMS4yNTRINi42NEEyLjc1OCAyLjc1OCAwIDAgMSA4IDQuOTUzYzEuNTk1IDAgMi44ODkgMS4zNjQgMi44ODkgMy4wNDd6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMikiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjYSIvPjxnIGZpbGw9IiMzQjNFNDAiIG1hc2s9InVybCgjYikiPjxwYXRoIGQ9Ik0wIDBoMTZ2MTZIMHoiLz48L2c+PC9nPjwvc3ZnPg==)";
        this.bg=false;
        this.$refs.upwd.type="text";
      }else{
        this.$refs.upwdHidden.style.backgroundImage="url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNy45NjQgMTEuOTg0bC45MDUgMS4zNjNhOC44IDguOCAwIDAgMS0uODY5LjA0NGMtMy4zMjggMC02LjI1LTEuODc0LTcuODE1LTQuNjc3YTEuNDczIDEuNDczIDAgMCAxIDAtMS40MjggOS4yOTMgOS4yOTMgMCAwIDEgMi42NjctMy4wMDRsMS41ODUgMi4zODlBNC4xOCA0LjE4IDAgMCAwIDQuMjIyIDhjMCAyLjE5IDEuNjcgMy45NjMgMy43NDIgMy45ODR6bTcuODUxLTMuMjdhOS4yMTggOS4yMTggMCAwIDEtMy43NTQgMy42NzZsMS4xNTIgMS43MzVhLjcyOC43MjggMCAwIDEtLjE2NC45NzlsLS4zNjQuMjY5YS42NDUuNjQ1IDAgMCAxLS45MjktLjE3M0wyLjc4NyAxLjg3NWEuNzI4LjcyOCAwIDAgMSAuMTY0LS45NzlsLjM2NC0uMjY5QS42NDUuNjQ1IDAgMCAxIDQuMjQ0LjhMNS42NiAyLjkyN0E4LjcyIDguNzIgMCAwIDEgOCAyLjYxYzMuMzI4IDAgNi4yNSAxLjg3NCA3LjgxNSA0LjY3Ny4yNDcuNDQuMjQ3Ljk4NyAwIDEuNDI4ek0xMS43NzggOGMwLTIuMjAyLTEuNjktMy45ODQtMy43NzgtMy45ODRhMy42IDMuNiAwIDAgMC0xLjQxLjI4NmwuNTM3Ljc5M2EyLjc2IDIuNzYgMCAwIDEgMi4yMzMuMjE3Yy0uNjU3IDAtMS4xOS41NjEtMS4xOSAxLjI1NCAwIC42OTIuNTMyIDEuMjU1IDEuMTkgMS4yNTUuNjU2IDAgMS4xODktLjU2MiAxLjE4OS0xLjI1NWEzLjE4NSAzLjE4NSAwIDAgMS0uMjMgMy4yNWwuNTM3Ljc5M2MuNTc0LS42OTkuOTIyLTEuNjEuOTIyLTIuNjA5em0tNC41IDIuOTUxTDUuMTI1IDcuNzA2Yy0uMTQgMS41MzUuODE0IDIuODgyIDIuMTUzIDMuMjQ1eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjYSIvPjxnIGZpbGw9IiM5RkEzQTYiIG1hc2s9InVybCgjYikiPjxwYXRoIGQ9Ik0wIDBoMTZ2MTZIMHoiLz48L2c+PC9nPjwvc3ZnPg==)";
        this.bg=true;
        this.$refs.upwd.type="password";
      }
    },
    Login(){
      if(this.isLogin==2){
        this.$axios.post("http://127.0.0.1:3000/login/user",this.qs.stringify({
          admin:this.getAdmin,
          upwd:this.getUpwd,
          }))
          .then(res=>{
          if(res.data.code==1){
            sessionStorage.setItem("userId",res.data.user_id)
            var user_id=sessionStorage.getItem("userId")
            for(var i=0;i<this.product_arr.length;i++){
              this.product_arr[i].user_id=user_id;
              this.product_arr[i].product_isSelect=true;
            }
            for(var i=0;i<this.product_arr.length;i++){
              this.$axios.post("http://127.0.0.1:3000/cart/slCart",
              this.qs.stringify({user_id:user_id,
              product_id:this.product_arr[i].product_id}))
              .then(res=>{
                if(res.data.code==1){
                  var product_arr="";
                  product_arr=res.data.slCart[0]
                  for(var i=0;i<this.product_arr.length;i++){
                    if(this.product_arr[i].product_id==product_arr.product_id){
                      product_arr.product_count+=this.product_arr[i].product_count;
                      this.product_arr.splice(i,1)
                      this.$axios.post("http://127.0.0.1:3000/cart/upCart",
                      this.qs.stringify({user_id:user_id,
                      product_id:product_arr.product_id,
                      product_count:product_arr.product_count}))
                      .then(res=>{
                        if(res.data.code==1){
                          localStorage.removeItem("product")
                          return;
                        }else{
                          alert("对不起，参数错误")
                          return;
                        }
                      })
                    }
                  }
                }else{
                  this.$axios.post("http://127.0.0.1:3000/cart/addCart",
                  this.qs.stringify({product_arr:JSON.stringify(this.product_arr)}))
                  .then(res=>{
                    if(res.data.code==1){
                      localStorage.removeItem("product")
                    }else{
                      alert("对不起，参数错误")
                      return;
                    }
                  })
                  return;
                }
              })
            }
            this.$refs.err.innerHTML="";
            this.$router.push({path:'/Index'});
          }else{
            var num=5;
            this.$refs.err.innerHTML="账号或密码错误("+num+"s)"
            this.$refs.err.disabled=true;
            let click=window.setInterval(()=>{
              num--;
              this.$refs.err.innerHTML="账号或密码错误("+num+"s)"
              if(num==0){
                clearInterval(click);
                this.$refs.err.innerHTML="";
                this.$refs.err.disabled=false;
              }
            },1000)
          }
        })
      }
    },
    clear(){
      this.getAdmin="";
      this.$refs.clearInput.style="display:none"
      this.$refs.admin_err.innerHTML="邮箱/手机不能为空";
      this.$refs.admin.style="border: 1px solid #f04848;";
    }
  },
  watch: {
    getAdmin:function(){
      if(this.getAdmin.length>=1){
        var num=new Number(this.getAdmin);
        this.$refs.clearInput.style="display:block";
        if(num.toString()=="NaN"&&(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/).test(this.getAdmin)){
          this.$axios.post("http://127.0.0.1:3000/login/email",this.qs.stringify({email:this.getAdmin})).then(res=>{
            if(res.data.code!=1){
              this.$refs.admin_err.innerHTML="该邮箱未被注册!"
              this.$refs.admin.style="border: 1px solid #f04848;"
            }else{
              alert("对不起，参数错误")
              return;
            }
          })
          this.$refs.admin_err.innerHTML=""
          this.$refs.admin.style="border: 1px solid #e6e6e6;"
        }else if(num.toString()!="NaN"&&(/^0?1[3|4|5|6|7|8][0-9]\d{8}$/).test(this.getAdmin)){
           this.$axios.post("http://127.0.0.1:3000/login/phone",this.qs.stringify({phone:this.getAdmin})).then(res=>{ 
            if(res.data.code!=1){
              this.$refs.admin_err.innerHTML="该手机号未被注册!"
              this.$refs.admin.style="border: 1px solid #f04848;"
            }
          })
          this.$refs.admin_err.innerHTML=""
          this.$refs.admin.style="border: 1px solid #e6e6e6;"
          this.isLogin=1;
        }else if(num.toString()=="NaN"&&!((/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/).test(this.getAdmin))){
          this.$refs.admin_err.innerHTML="邮箱格式错误"
          this.$refs.admin.style="border: 1px solid #f04848;"
        }else if(num.toString()!="NaN"&&!((/^((13[0-9])|(15[^4])|(18[0,2,3,5-9])|(17[0-8])|(147))\\d{8}$/).test(this.getAdmin))){
          this.$refs.admin_err.innerHTML="手机号格式错误"
          this.$refs.admin.style="border: 1px solid #f04848;"
        }
      }else{
        this.$refs.clearInput.style="display:none"
        this.$refs.admin_err.innerHTML="邮箱/手机不能为空"
        this.$refs.admin.style="border: 1px solid #f04848;"
      }
    },
    getUpwd:function(){
      if(this.getUpwd.length>=1){
        this.$refs.upwdHidden.style="display:block"
        this.$refs.upwd_err.innerHTML=""
        this.$refs.upwd.style="border: 1px solid #e6e6e6;"
        this.isLogin=2;
      }else{
        this.$refs.upwdHidden.style="display:none"
        this.$refs.upwd_err.innerHTML="密码不允许为空"
        this.$refs.upwd.style="border: 1px solid #f04848;"
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
html,body,#user,.user{
  height:100%;
  border: 0.01rem solid white;
}
.user{
  text-align: center;
  margin:0 auto;
  max-width: 24rem;
  position: relative;
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
.login{
  position: relative;
  top:4rem;
}
.login>.from>.login_title{
  font-size: 1.08rem;
  color: #4c4c4c;
  font-weight: 600;
  margin:25px 0;
}
.login>.from{
  padding: 0 20px;
}
#admin,#upwd{
  width:100%;
  height: 2.39rem;
  padding-left: 1.1rem;
  padding-right: 2.8rem;
  border: 1px solid #e6e6e6;
  font-size: .84rem;
  color: #979797;
  outline: none;
  box-sizing: border-box;
}
#login{
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
}
.login .forget-passord{
  text-align: right;
  margin-top: 0.75rem;
}
.login .forget-passord>a{
  color:#44a8f2;
  font-size: 0.75rem;
  margin-top:0.24rem;
}
.login .reg{
  padding: 1.26rem 0;
}
.login .reg>a{
  color:#44a8f2;
  text-decoration:none;
}
.login>.from .clearInput,.login>.from .upwdHidden{
  height:1rem;
  width:1rem;
  display: none;
  right: 1.3rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;    
  position: absolute;
  transform: translateY(-50%);
  padding: .1rem;
}
.login>.from .clearInput{
  background-size: 0.96rem 0.96rem;
  background-image: url(data:image/png;base64,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);
  top: 1.2rem;
}
.login>.from .upwdHidden{
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNy45NjQgMTEuOTg0bC45MDUgMS4zNjNhOC44IDguOCAwIDAgMS0uODY5LjA0NGMtMy4zMjggMC02LjI1LTEuODc0LTcuODE1LTQuNjc3YTEuNDczIDEuNDczIDAgMCAxIDAtMS40MjggOS4yOTMgOS4yOTMgMCAwIDEgMi42NjctMy4wMDRsMS41ODUgMi4zODlBNC4xOCA0LjE4IDAgMCAwIDQuMjIyIDhjMCAyLjE5IDEuNjcgMy45NjMgMy43NDIgMy45ODR6bTcuODUxLTMuMjdhOS4yMTggOS4yMTggMCAwIDEtMy43NTQgMy42NzZsMS4xNTIgMS43MzVhLjcyOC43MjggMCAwIDEtLjE2NC45NzlsLS4zNjQuMjY5YS42NDUuNjQ1IDAgMCAxLS45MjktLjE3M0wyLjc4NyAxLjg3NWEuNzI4LjcyOCAwIDAgMSAuMTY0LS45NzlsLjM2NC0uMjY5QS42NDUuNjQ1IDAgMCAxIDQuMjQ0LjhMNS42NiAyLjkyN0E4LjcyIDguNzIgMCAwIDEgOCAyLjYxYzMuMzI4IDAgNi4yNSAxLjg3NCA3LjgxNSA0LjY3Ny4yNDcuNDQuMjQ3Ljk4NyAwIDEuNDI4ek0xMS43NzggOGMwLTIuMjAyLTEuNjktMy45ODQtMy43NzgtMy45ODRhMy42IDMuNiAwIDAgMC0xLjQxLjI4NmwuNTM3Ljc5M2EyLjc2IDIuNzYgMCAwIDEgMi4yMzMuMjE3Yy0uNjU3IDAtMS4xOS41NjEtMS4xOSAxLjI1NCAwIC42OTIuNTMyIDEuMjU1IDEuMTkgMS4yNTUuNjU2IDAgMS4xODktLjU2MiAxLjE4OS0xLjI1NWEzLjE4NSAzLjE4NSAwIDAgMS0uMjMgMy4yNWwuNTM3Ljc5M2MuNTc0LS42OTkuOTIyLTEuNjEuOTIyLTIuNjA5em0tNC41IDIuOTUxTDUuMTI1IDcuNzA2Yy0uMTQgMS41MzUuODE0IDIuODgyIDIuMTUzIDMuMjQ1eiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjYSIvPjxnIGZpbGw9IiM5RkEzQTYiIG1hc2s9InVybCgjYikiPjxwYXRoIGQ9Ik0wIDBoMTZ2MTZIMHoiLz48L2c+PC9nPjwvc3ZnPg==);
  background-size: 1.06rem 1.06rem;
  top: 1.3rem;
}
.login>.from .msg_err,.login>.from .msg_err{
  color: #f04848;
  font-size: .12rem;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  line-height: 1.8;
  text-align: left;
  margin-left:1.10rem;
  margin:0.55rem;
}
.login>.from .admin,.login>.from .upwd{
  margin-bottom:0.89rem;
  position: relative;
}
</style>

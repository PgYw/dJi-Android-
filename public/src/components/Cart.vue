<template>
  <div id="Cart">
    <div class="Cart">
      <transition name="fade">
        <loading v-if="!isLoading"></loading>
      </transition>
      <div class="header" ref="header">
        <i class="mint-toast-icon mintui mintui-back" @click="goOut()"></i>
        <span class="center">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="102" height="24" viewBox="0 0 102 24">
              <path fill="#3B3E40" fill-rule="evenodd" d="M974.618882,425.963018 L977.713886,413 L984.493896,413 L980.970891,427.74602 C980.29289,430.592024 978.178887,431.276025 976.223884,431.276025 L960.599863,431.276025 C958.87786,431.276025 957.436858,430.543024 958.217859,427.25602 L959.625861,421.375012 C960.337862,418.390007 962.554865,417.710007 964.157867,417.710007 L975.062883,417.710007 L974.183881,421.385012 L968.615874,421.385012 C967.797873,421.385012 967.348872,421.562012 967.120872,422.518013 L966.22087,426.275018 C965.90087,427.62002 966.370871,427.71402 967.357872,427.71402 L972.458879,427.71402 C973.39288,427.71402 974.214881,427.65402 974.618882,425.962018 L974.618882,425.963018 Z M993.013907,417.665006 L989.823903,431.234025 L996.410912,431.234025 L999.599916,417.665006 L993.013907,417.665006 Z M982.291893,428.860022 L984.976896,417.665006 L991.562905,417.665006 L988.493901,430.419024 C987.216899,435.762031 983.643894,437.000033 981.223891,437.000033 L971.985878,437.000033 L973.09088,432.401027 C973.09088,432.401027 978.004887,432.426027 978.178887,432.404027 C979.936889,432.257027 981.685892,431.400025 982.291893,428.860022 Z M1009.50793,430.278024 C1008.85354,429.868389 1008.33022,429.27983 1007.99993,428.582022 L1009.49093,427.75002 C1009.81493,428.282021 1010.15293,428.668022 1010.50493,428.909022 C1010.96293,429.229022 1011.51893,429.388023 1012.17293,429.388023 C1013.51894,429.388023 1014.19294,428.853022 1014.19294,427.78402 C1014.19294,427.31402 1014.02694,426.919019 1013.69794,426.600019 C1013.42394,426.348018 1012.93793,426.068018 1012.23993,425.760018 L1011.46893,425.416017 C1010.54193,425.000017 1009.86993,424.559016 1009.45793,424.089015 C1008.97793,423.540015 1008.73793,422.840014 1008.73793,421.989012 C1008.73793,421.122011 1009.04193,420.41101 1009.65093,419.857009 C1010.26493,419.297009 1011.05293,419.017008 1012.01393,419.017008 C1013.52694,419.017008 1014.62494,419.630009 1015.30594,420.856011 L1013.88194,421.738012 C1013.45194,420.976011 1012.82893,420.596011 1012.01393,420.596011 C1011.00793,420.596011 1010.50493,421.049011 1010.50493,421.956012 C1010.50493,422.656013 1011.06693,423.252014 1012.18893,423.745015 L1012.94393,424.089015 C1014.00394,424.559016 1014.76394,425.046017 1015.22294,425.550017 C1015.73694,426.138018 1015.99294,426.877019 1015.99294,427.76702 C1015.99294,428.769022 1015.63894,429.567023 1014.92894,430.160024 C1014.23094,430.720025 1013.32294,431.000025 1012.20593,431.000025 C1011.16193,431.000025 1010.26193,430.760025 1009.50793,430.278024 Z M1020.79495,420.755011 L1017.32494,420.755011 L1017.32494,419.151009 L1026.05695,419.151009 L1026.05695,420.755011 L1022.59695,420.755011 L1022.59695,430.850025 L1020.79495,430.850025 L1020.79495,420.755011 Z M1029.23196,429.321023 C1028.06496,428.173021 1027.48196,426.734019 1027.48196,425.004017 C1027.48196,423.269014 1028.06496,421.830012 1029.23196,420.688011 C1030.38996,419.563009 1031.81296,419.000008 1033.50596,419.000008 C1035.18697,419.000008 1036.60597,419.563009 1037.76197,420.688011 C1038.92997,421.830012 1039.51297,423.268014 1039.51297,425.004017 C1039.51297,426.734019 1038.92997,428.173021 1037.76297,429.321023 C1036.60497,430.440024 1035.18597,431.000025 1033.50496,431.000025 C1031.81196,431.000025 1030.38796,430.440024 1029.23096,429.320023 L1029.23196,429.321023 Z M1036.48897,428.111021 C1037.26497,427.28802 1037.65297,426.253018 1037.65297,425.004017 C1037.65297,423.750015 1037.26497,422.712013 1036.48897,421.889012 C1035.71197,421.049011 1034.71797,420.629011 1033.50596,420.629011 C1032.29296,420.629011 1031.29096,421.049011 1030.49796,421.889012 C1029.72096,422.712013 1029.33296,423.750015 1029.33296,425.004017 C1029.33296,426.253018 1029.72096,427.28802 1030.49796,428.111021 C1031.29096,428.951022 1032.29296,429.371023 1033.50596,429.371023 C1034.71797,429.371023 1035.71197,428.951022 1036.48897,428.111021 Z M1041.78397,419.151009 L1045.69698,419.151009 C1046.96498,419.151009 1047.97098,419.451009 1048.71398,420.05001 C1049.52899,420.693011 1049.93699,421.634012 1049.93699,422.871014 C1049.93699,424.556016 1049.14698,425.673018 1047.56598,426.221018 L1050.31399,430.849025 L1048.23598,430.849025 L1045.71398,426.516019 L1043.60198,426.516019 L1043.60198,430.849025 L1041.78397,430.849025 L1041.78397,419.150009 L1041.78397,419.151009 Z M1045.62998,424.987017 C1047.25598,424.987017 1048.06798,424.282016 1048.06798,422.871014 C1048.06798,421.461012 1047.25598,420.755011 1045.62998,420.755011 L1043.60198,420.755011 L1043.60198,424.987017 L1045.62998,424.987017 Z M1052.34999,419.151009 L1059.765,419.151009 L1059.765,420.755011 L1054.16799,420.755011 L1054.16799,424.190015 L1059.128,424.190015 L1059.128,425.760018 L1054.16799,425.760018 L1054.16799,429.253022 L1060,429.253022 L1060,430.849025 L1052.34999,430.849025 L1052.34999,419.150009 L1052.34999,419.151009 Z" transform="translate(-958 -413)"></path>
            </svg>
          </a>
        </span>
        <span class="cart">
          <i class="el-icon-search search"></i>
        </span>
      </div>
      <div class="myCart">
        <h2 v-if="product_arr.length<=0">购物车为空</h2>
        <h2 v-else-if="product_arr.length>0">我的购物车</h2>
        <div class="no-login">
          <p>登录之后将显示您之前加入的商品。
            <router-link to="/Login">立即登录></router-link>
          </p>
        </div>
        <div class="goDt" v-show="show">
          <span>商品总金额({{sum.length}}):</span>
          <h4>¥</h4>
          <h4>{{sum.sum}}</h4>
          <button @click="goDt()">去结算</button>
        </div>
        <div class="goSp" v-show="!show">
          <router-link to="/Index" class="goSp">继续购物></router-link>
        </div>
      </div>
      <div class="detail" v-for="(product,index) in product_arr" :key="product.product_id">
        <transition name="fade">
          <div :key="'one'+index">
            <div class="input">
              <input type="checkbox" 
              :checked="product.product_isSelect"
              @click="select(index,$event)" id="check">
            </div>
            <div class="img">
              <img v-lazy="product.product_img" alt="">
            </div>
            <div class="nc">
              <p>
              <router-link :to="{path:'/Detail',query:{productId:product.product_id}}">{{product.product_ify+" "+product.product_title}}</router-link>
              </p>
              <p class="pTime">发货时间:1个工作日内</p>
              <p>
                <span>¥</span><span>{{product.product_Oprice}}</span>
              </p>
              <div class="et">
                <button @click="Dt(index)">移除</button>
                <div class="Cell">
                  <button @click="Ep(index)" ref="ep" :disabled="product.product_count<=1">-</button>
                  <input ref="input" type="text" v-model="product.product_count" readonly/>
                  <button @click="Up(index)">+</button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="price_count" v-show="show">
        <div class="price">
          <span>商品总金额({{sum.length}}):</span>
          <p>
            <span>¥</span>
            <span id="product_price">{{sum.sum}}</span>
          </p>
        </div>
        <div class="postage">
          <span>邮费</span>
          <p>
            <span>包邮</span>
          </p>
        </div>
      </div>
      <div class="button" v-show="show">
        <button>去结算</button>
      </div>
      <div class="product_ln" v-show="show">
        <p>支持支付宝、微信、银联、顺丰到付、花呗和招行分期。</p>
        <p>
          <i class="el-icon-truck"></i>
          <span>邮寄时间:0 - 1 个工作日。</span>
        </p>
        <p>
          <i class="el-icon-coin"></i>
          <span>购买即可获得价值支付金额1%的DJI币返利 - 购买越多，返利越多。</span>
        </p>
        <p>
          <a href="">了解更多优惠详情</a>
        </p>
        <p>
          <i class="el-icon-check"></i>
          <span>您可以在结账的时候使用优惠券或者 DJI 币抵扣。</span>
        </p>
        <div class="help">
          <i class="el-icon-service"></i>需要帮助?
        </div>
      </div>
      <div class="select">
        <div class="select_text">
          <span>为您推荐</span>
        </div>
        <ul>
          <li v-for="(product_select,index) in product_selects" :key="product_select.id">
            <div class="product_img">
              <img :src="product_select.product_img" alt="">
            </div>
            <p class="product_nt">{{product_select.product_ify+" "+product_select.product_title}}</p>
            <p class="product_price">
              <span>¥</span>
              <span>{{product_select.product_Oprice}}</span>
            </p>
            <button @click="addCart(index)">加入购物车</button>
          </li>
        </ul>
      </div>
      <foter></foter>
    </div>
  </div>
</template>
<script>
import Loading from "@/components/common/Loading";
import foter from "@/components/IndexFooter";
import Vue from "vue";
export default {
  name:"cart",
  components:{Loading,foter},
  data() {
    // 第一个项目的响应式解决
    // 商品详情商品加入购物车动画
    // 点击登录成功加入本地数据到购物车的问题
    // 购物车循环的问题
    return {
      isLoading:false,
      Cartl:false,
      show:false,
      clear:"",
      ldTime:0,
      product_arr:[],
      product_selects:[],
      total:0,
    }
  },
  created() {
    window.addEventListener("storage",()=>{
      this.product_arr=this.getStorage().product_arr
    })
    this.clear=setInterval(this.loading,1000)
    this.product_arr=this.getStorage().product_arr
    this.$axios.get("http://127.0.0.1:3000/cart/productSelect").then(res=>{
      this.product_selects=res.data.productSelect;
    })
    if(sessionStorage.getItem("userId")!=(undefined||null)){
      var num=0;
      var cart_arr=[];
      var user_id=sessionStorage.getItem("userId")
      var getCart=setInterval(()=>{
        if(this.getStorage().product_arr.length>0){
          clearInterval(getCart)
          cart_arr=this.getStorage().product_arr;
          for(var i=0;i<cart_arr.length;i++){
            this.product_arr=[];
            this.$axios.post("http://127.0.0.1:3000/detail/product",
            this.qs.stringify({product_id:cart_arr[i].product_id}))
            .then(res=>{
              if(res.data.code==1){
                this.product_arr.push(res.data.product[0])
                this.product_arr[num]["product_count"]=cart_arr[num].product_count
                this.product_arr[num]["product_isSelect"]=cart_arr[num].product_isSelect
                this.product_arr[num]["product_isSelect"]==1?this.product_arr[num]["product_isSelect"]=true:this.product_arr[num]["product_isSelect"]=false
                num++;
              }else{
                alert("对不起，参数错误")
                return;
              }
            })
          }
        }
      },50)
    }else{
      this.product_arr=this.getStorage().product_arr;
    }
  },
  methods: {
    Up(index){
      var product_id=this.product_arr[index].product_id
      let obj=this.product_arr[index]
      obj.product_count++
      this.$set(this.product_arr, index, obj);
      if(sessionStorage.getItem("userId")!=(undefined||null)){
        this.setStorage(this.product_arr[index])
      }else{
       this.setStorage(this.product_arr)
      }
    },
    Ep(index){
      var product_id=this.product_arr[index].product_id
      if(this.product_arr[index].product_count<=1){
        return;
      }
      let obj=this.product_arr[index]
      obj.product_count--
      this.$set(this.product_arr, index, obj);
      if(sessionStorage.getItem("userId")!=(undefined||null)){
        this.setStorage(this.product_arr[index])
      }else{
        this.setStorage(this.product_arr)
      }
    },
    Dt(index){
      var product_id=this.product_arr[index].product_id
      if(sessionStorage.getItem("userId")!=(undefined||null)){
        this.dtCart(this.product_arr[index])
        this.product_arr.splice(index,1);
      }else{
        for(var i=0;i<this.product_arr.length;i++){
          if(this.product_arr[i].product_id==this.product_arr[index].product_id){
            this.product_arr.splice(index,1)
          }
        }
        this.dtCart(this.product_arr)
      }
    },
    select(index,e){
      e.target.checked?this.product_arr[index].product_isSelect=true:this.product_arr[index].product_isSelect=false
      let obj=this.product_arr[index]
      this.$set(this.product_arr, index, obj);
      if(sessionStorage.getItem("userId")!=(undefined||null)){
        this.isSelect(this.product_arr[index])
        this.$set(this.product_arr, index, obj);
      }else{
        this.isSelect(this.product_arr)
      }
    },
    addCart(index){
      var isAdd=false;
      var product_obj={
        product_isSelect:true,
        product_id:this.product_selects[index].product_id,
        product_img:this.product_selects[index].product_img,
        product_title:this.product_selects[index].product_ify+" "+this.product_selects[index].product_title,
        product_price:this.product_selects[index].product_Oprice,
        product_count:1
      }
      for(var i=0;i<this.product_arr.length;i++){
        if(this.product_arr[i].product_id==product_obj.product_id){
          this.product_arr[i].product_count++;
          this.product_arr[i].product_total*=this.product_arr[i].product_count
          isAdd=true;
        }
      }
      if(!isAdd){
        this.product_arr.push(product_obj)
      }
      this.setStorage(this.product_arr)
    },
    loading(){
      this.ldTime++;
      if(this.ldTime==2){
        this.isLoading=true
        clearInterval(this.clear);
      }
    },
    goOut(){
      if (window.history.length<=1) {
        this.$router.push({path:'/'})
        return false
      }else{
        this.$router.go(-1)
      }
    },
    goDt(){
      console.log("结算中.....")
    }
  },
  watch: {
    "product_arr":function(){
      if(this.product_arr.length>0){
        this.show=true;
      }else{
        this.show=false;
      }
    }
  },
  computed: {
    sum(){
      let sum=0,length=0;
      for(var i=0;i<this.product_arr.length;i++){
          length++;
        if(this.product_arr[i].product_isSelect){
          sum+=this.product_arr[i].product_Oprice*this.product_arr[i].product_count
        }
      }
      return {sum,length};
    },
  },
}
// 第一个项目的响应式解决
// 点击登录成功加入本地数据到购物车的问题
// 购物车加减的问题
// 购物车刷新页面push数据的问题
</script>
<style lang="css">
*{
  padding:0;
  margin:0;
}
a{
  text-decoration: none;
  color: #3B3E40;
  font-weight: 500;
}
</style>
<style scoped lang="css">
ul{
  list-style: none;
  background: #fff;
}
.Cart{
  background: #f7f9fa;
  max-width: 24rem;
  margin:0 auto;
}
body,#cart,.Cart{
  height:100%;
}
.header{
  height: 48px;
  width: 100%;
  z-index: 999;
  position: sticky;
  top:0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.4);
  box-sizing: border-box;
}
.header>.center{
  width:100%;
  text-align: center;
  position: absolute;
  padding: 0 80px;
  box-sizing:border-box;
}
.header>.cart{
  font-size: 23px;
  width:3rem;
}
.header .cart>.search {
  font-size: 23px;
  margin:0 8px;
  cursor: pointer;
}
.el-badge {
  vertical-align: inherit;
  cursor: pointer;
  margin:0 8px;
}
.cart>.item>a>i {
  font-size: 23px;
}
.mint-toast-icon{
  z-index: 999;
  font-size: 23px;
  line-height:3.12rem;
  display:inline-block;
  width:40px;
}
.myCart,
.detail,
.price_count,
.button,
.product_ln{
  padding:14px 16px;
  margin-bottom:20px;
  background: #fff;
}
.myCart>h2{
  color: #3b3e40;
  font-size: 24px;
  line-height: 32px;
  margin: 0;
  font-weight: 400;
}
.myCart>.no-login>p{
  margin:0.7rem 0;
  font-size: 14px;
  color: #6c7073;
}
.myCart>.no-login>p>a{
  font-size: 14px;
  line-height: 24px;
  color: #1897f2;
  text-decoration: none;
  display: inline!important;
  margin-left: 4px;
}
.myCart>.goDt{
  height:2rem;
  font-size: 14px;
  font-weight: 400;
  color: #6c7073;
  line-height: 2rem;
}
.myCart>.goSp{
  margin-top:24px;
  background:transparent;
  width:100%;
  text-align: center;
}
.myCart>.goSp>a{
  display: block;
  height:40px;
  border: 1px solid #d4d7d9;
  border-radius: 0.25rem;
  font-weight: 500;
  line-height: 40px;
  font-size: 14px;
}
.myCart>.goDt>button{
  float: right;
  height:2rem;
  width:4rem;
  background:#1897f2;
  color:#fff;
  border-radius: 0.25rem;
  border:1px solid #1897f2;
  outline: none;
}
.myCart>.goDt>span:last-child{
  font-weight: 500;
}
.myCart>.goDt>h4{
  display:inline-block;
}
.detail>div{
  display:flex;
}
.detail .input{
  width: 1.5rem;
  height:100%;
}
.detail .input>input:checked{
  height:1rem;
  position: relative;
  -webkit-appearance: none;
  line-height: normal;
  outline: none;
  border-radius: 0.25rem;
}
.detail .input>input:checked:before{
  content: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGU+c29saWQvY2hlY2s8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxkZWZzPjxwYXRoIGQ9Ik02LjcxNzE1NSwxMC44ODIxNjAyIEw0LjExNzE1MjQ2LDguMjY3MjA4NSBDMy45NjA5NDkxOCw4LjExMDEwNzExIDMuOTYwOTQ5MTgsNy44NTUzODUwNCA0LjExNzE1MjQ2LDcuNjk4MjY3OTMgTDQuNjgyODI0ODksNy4xMjkzMjczNiBDNC44MzkwMjgxNiw2Ljk3MjIxMDI1IDUuMDkyMzA5NjYsNi45NzIyMTAyNSA1LjI0ODUxMjk0LDcuMTI5MzI3MzYgTDYuOTk5OTk5MDIsOC44OTA4NjgyIEwxMC43NTE0ODcxLDUuMTE3ODI2MDUgQzEwLjkwNzY5MDMsNC45NjA3MjQ2NSAxMS4xNjA5NzE4LDQuOTYwNzI0NjUgMTEuMzE3MTc1MSw1LjExNzgyNjA1IEwxMS44ODI4NDc1LDUuNjg2NzY2NjIgQzEyLjAzOTA1MDgsNS44NDM4NjgwMSAxMi4wMzkwNTA4LDYuMDk4NTkwMDggMTEuODgyODQ3NSw2LjI1NTcwNzE5IEw3LjI4Mjg0MzA1LDEwLjg4MjE3NTkgQzcuMTI2NjI0MTUsMTEuMDM5Mjc3MyA2Ljg3MzM1ODI3LDExLjAzOTI3NzMgNi43MTcxNTUsMTAuODgyMTYwMiBaIiBpZD0icGF0aC0xIj48L3BhdGg+PC9kZWZzPjxnIGlkPSJzb2xpZC9jaGVjayIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPjx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+PC9tYXNrPjx1c2UgaWQ9ImNoZWNrIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPjxnIGlkPSJ3aGl0ZS8xMCIgbWFzaz0idXJsKCNtYXNrLTIpIiBmaWxsPSIjRkZGRkZGIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNC4wMDAwMDApIiBpZD0iYmFzZSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjgiIGhlaWdodD0iOCI+PC9yZWN0PjwvZz48L2c+PC9nPjwvc3ZnPg==);
  background-color: #1897f2;
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  transition: all .3s cubic-bezier(.23,1,.32,1)
}
.detail .input>input:checked:after{
  position: relative;
  content: "";
  border: .0625rem solid #1897f2;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 0.25rem;
  transition: border .3s cubic-bezier(.23,1,.32,1);
  box-sizing: content-box;
}
.detail .input>input:not(:checked){
  height:1rem;
  width:1rem;
  position: relative;
  -webkit-appearance: none;
  line-height: normal;
  outline: none;
  border:1px solid #9fa3a6;
  border-radius: 0.25rem;
}
.detail .input>input:not(:checked):before{
  content:"";
  background-color: transparent;
  position: absolute;
  width: 1rem;
  height: 1rem;
  transition: all .3s cubic-bezier(.23,1,.32,1)
}
.detail .input>input:not(:checked):after{
  content:"";
  width:14px;
  height:14px;
  position: relative;
}
.img{
  width:6rem;
  margin-right:1rem;
}
.img>img{
  width:100%;
  height:50%;
}
.nc{
  font-size: 14px;
  width:70%;
}
.nc>p:not(:first-child){
  margin:0.3rem 0;
}
.nc>.pTime{
  color: #9fa3a6;
  font-size: 12px;
}
.nc>.et{
  margin-top:1.5rem;
  color:#3B3E40;
  display:flex;
  justify-content: space-between;
}
.nc>.et>button{
  border:none;
  outline:none;
  background: #fff;
}
.et>.Cell{
  float:right;
}
.et>.Cell>input{
  width:3rem;
}
.et>.Cell>button{
  height:1.7rem;
  width:1.7rem;
  border-radius: 0.25rem;
  border: .0625rem solid #d4d7d9;
  outline: none;
  background-color: #fff;
}
.et>.Cell>button:first-child:active{
  border:1px solid #1897f2;
}
.et>.Cell>button:last-child:active,
.button>button:active,
.goDt>button:active,
.select>ul>li>button:active{
  background-image: linear-gradient(0deg,#1897f2,#42b7ff);
}
.et>.Cell>button:last-child{
  background:#1897f2;
}
.et>.Cell>button:disabled{
  background-color: #f0f1f2;
  color: #9fa3a6;
  cursor: not-allowed;
  background-image: none;
  border: .0625rem solid #d4d7d9;
}
.et>.Cell>input{
  vertical-align: middle;
  border: none;
  background: transparent;
  height: 24px;
  width:2rem;
  line-height: 24px;
  text-align: center;
  transition: .3s;
  outline:none;
}
.price_count{
  margin-bottom: 5px;
}
.price_count>.price,.price_count>.postage{
  margin:0.8rem 0;
  color:#3b3e40;
}
.price_count>.price>p,.price_count>.postage>p{
  float: right;
}
.button>button{
  width: 100%;
  height: 3rem;
  padding: 0 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  color: #fff;
  background:#1897f2;
  text-align: center;
  outline: none;
  border:none;
}
.product_ln{
  font-size: 12px;
  font-weight: 400;
  color:#3b3e40;
}
.product_ln>p{
  margin:8px 0;
}
.product_ln>p>i{
  font-size: 17px;
}
.product_ln>p>a{
  color:#1897f2;
}
.help{
  text-align: center;
}
.product_ln>.help{
  margin-top:15px;
  padding-top:15px;
  border-top: 1px solid #f0f1f2;
}
.select_text{
  padding:14px 16px;
}
.select{
  margin-bottom: 34px;
}
.select>ul::after{
  content:"";
  display:block;
  clear:both;
}
.select>ul>li{
  padding:15px 0;
  background: #fff;
  width:48%;
  text-align: center;
  float: left;
  margin-bottom: 15px;
}
.select>ul>li:nth-of-type(odd){
  margin-right:0.9rem;
}
.select li>.product_img>img{
  width:10rem;
  margin:0 auto;
}
.select li>.product_nt,.select li>.product_price{
  text-align: center;
  line-height: 16px;
  height: 18px;
  max-height: 48px;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 14px;
}
.select>ul>li>button{
  width:7rem;
  height: 2rem;
  font-size: 0.8rem;
  border-radius: .25rem;
  color: #fff;
  background:#1897f2;
  text-align: center;
  outline: none;
  border:none;
}
</style>
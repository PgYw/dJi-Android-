<template>
  <div id="detail">
    <div class="header" ref="header">
      <i class="mint-toast-icon mintui mintui-back" @click="goOut()"></i>
      <span class="center">
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="102" height="24" viewBox="0 0 102 24">
            <path fill="#3B3E40" fill-rule="evenodd" d="M974.618882,425.963018 L977.713886,413 L984.493896,413 L980.970891,427.74602 C980.29289,430.592024 978.178887,431.276025 976.223884,431.276025 L960.599863,431.276025 C958.87786,431.276025 957.436858,430.543024 958.217859,427.25602 L959.625861,421.375012 C960.337862,418.390007 962.554865,417.710007 964.157867,417.710007 L975.062883,417.710007 L974.183881,421.385012 L968.615874,421.385012 C967.797873,421.385012 967.348872,421.562012 967.120872,422.518013 L966.22087,426.275018 C965.90087,427.62002 966.370871,427.71402 967.357872,427.71402 L972.458879,427.71402 C973.39288,427.71402 974.214881,427.65402 974.618882,425.962018 L974.618882,425.963018 Z M993.013907,417.665006 L989.823903,431.234025 L996.410912,431.234025 L999.599916,417.665006 L993.013907,417.665006 Z M982.291893,428.860022 L984.976896,417.665006 L991.562905,417.665006 L988.493901,430.419024 C987.216899,435.762031 983.643894,437.000033 981.223891,437.000033 L971.985878,437.000033 L973.09088,432.401027 C973.09088,432.401027 978.004887,432.426027 978.178887,432.404027 C979.936889,432.257027 981.685892,431.400025 982.291893,428.860022 Z M1009.50793,430.278024 C1008.85354,429.868389 1008.33022,429.27983 1007.99993,428.582022 L1009.49093,427.75002 C1009.81493,428.282021 1010.15293,428.668022 1010.50493,428.909022 C1010.96293,429.229022 1011.51893,429.388023 1012.17293,429.388023 C1013.51894,429.388023 1014.19294,428.853022 1014.19294,427.78402 C1014.19294,427.31402 1014.02694,426.919019 1013.69794,426.600019 C1013.42394,426.348018 1012.93793,426.068018 1012.23993,425.760018 L1011.46893,425.416017 C1010.54193,425.000017 1009.86993,424.559016 1009.45793,424.089015 C1008.97793,423.540015 1008.73793,422.840014 1008.73793,421.989012 C1008.73793,421.122011 1009.04193,420.41101 1009.65093,419.857009 C1010.26493,419.297009 1011.05293,419.017008 1012.01393,419.017008 C1013.52694,419.017008 1014.62494,419.630009 1015.30594,420.856011 L1013.88194,421.738012 C1013.45194,420.976011 1012.82893,420.596011 1012.01393,420.596011 C1011.00793,420.596011 1010.50493,421.049011 1010.50493,421.956012 C1010.50493,422.656013 1011.06693,423.252014 1012.18893,423.745015 L1012.94393,424.089015 C1014.00394,424.559016 1014.76394,425.046017 1015.22294,425.550017 C1015.73694,426.138018 1015.99294,426.877019 1015.99294,427.76702 C1015.99294,428.769022 1015.63894,429.567023 1014.92894,430.160024 C1014.23094,430.720025 1013.32294,431.000025 1012.20593,431.000025 C1011.16193,431.000025 1010.26193,430.760025 1009.50793,430.278024 Z M1020.79495,420.755011 L1017.32494,420.755011 L1017.32494,419.151009 L1026.05695,419.151009 L1026.05695,420.755011 L1022.59695,420.755011 L1022.59695,430.850025 L1020.79495,430.850025 L1020.79495,420.755011 Z M1029.23196,429.321023 C1028.06496,428.173021 1027.48196,426.734019 1027.48196,425.004017 C1027.48196,423.269014 1028.06496,421.830012 1029.23196,420.688011 C1030.38996,419.563009 1031.81296,419.000008 1033.50596,419.000008 C1035.18697,419.000008 1036.60597,419.563009 1037.76197,420.688011 C1038.92997,421.830012 1039.51297,423.268014 1039.51297,425.004017 C1039.51297,426.734019 1038.92997,428.173021 1037.76297,429.321023 C1036.60497,430.440024 1035.18597,431.000025 1033.50496,431.000025 C1031.81196,431.000025 1030.38796,430.440024 1029.23096,429.320023 L1029.23196,429.321023 Z M1036.48897,428.111021 C1037.26497,427.28802 1037.65297,426.253018 1037.65297,425.004017 C1037.65297,423.750015 1037.26497,422.712013 1036.48897,421.889012 C1035.71197,421.049011 1034.71797,420.629011 1033.50596,420.629011 C1032.29296,420.629011 1031.29096,421.049011 1030.49796,421.889012 C1029.72096,422.712013 1029.33296,423.750015 1029.33296,425.004017 C1029.33296,426.253018 1029.72096,427.28802 1030.49796,428.111021 C1031.29096,428.951022 1032.29296,429.371023 1033.50596,429.371023 C1034.71797,429.371023 1035.71197,428.951022 1036.48897,428.111021 Z M1041.78397,419.151009 L1045.69698,419.151009 C1046.96498,419.151009 1047.97098,419.451009 1048.71398,420.05001 C1049.52899,420.693011 1049.93699,421.634012 1049.93699,422.871014 C1049.93699,424.556016 1049.14698,425.673018 1047.56598,426.221018 L1050.31399,430.849025 L1048.23598,430.849025 L1045.71398,426.516019 L1043.60198,426.516019 L1043.60198,430.849025 L1041.78397,430.849025 L1041.78397,419.150009 L1041.78397,419.151009 Z M1045.62998,424.987017 C1047.25598,424.987017 1048.06798,424.282016 1048.06798,422.871014 C1048.06798,421.461012 1047.25598,420.755011 1045.62998,420.755011 L1043.60198,420.755011 L1043.60198,424.987017 L1045.62998,424.987017 Z M1052.34999,419.151009 L1059.765,419.151009 L1059.765,420.755011 L1054.16799,420.755011 L1054.16799,424.190015 L1059.128,424.190015 L1059.128,425.760018 L1054.16799,425.760018 L1054.16799,429.253022 L1060,429.253022 L1060,430.849025 L1052.34999,430.849025 L1052.34999,419.150009 L1052.34999,419.151009 Z" transform="translate(-958 -413)"/>
          </svg>
        </a>
      </span>
      <span class="cart">
        <i class="el-icon-search search"></i>
        <el-badge :value="false" class="item"  type="primary">
          <i class="el-icon-shopping-cart-full"></i>
        </el-badge>
      </span>
    </div>
    <div class="detail">
      <div class="product_swipe">
        <div class="swipe_item">
          <mt-swipe :auto="0">
            <mt-swipe-item v-for="imgList in imgLists" :key="imgList.img_id">
              <img :src="imgList.img_url" alt=""/>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="product_title" v-if="product!=''">{{product[0].product_ify+" "+product[0].product_title}}</div>
      </div>
      <div class="mast_but" ref="mast_but">
        <div class="but_title">选择必备组件</div>
        <div class="product_child" v-for="relevancy_product in relevancy_products" :key="relevancy_product.id">
          <div class="child_img">
            <a href="">
              <img :src="relevancy_product.product_img" alt=""/>
            </a>
          </div>
          <div class="child_value">
            <div class="value_title">
              <a href="">
                <h6>{{relevancy_product.product_ify+" "+relevancy_product.product_title}}</h6>
              </a>
            </div>
            <div class="price">
              <span>¥</span>
              <span ref="relevany_price">{{relevancy_product.product_Oprice}}</span>
              <div class="Upprice">
                <button @click="Ep()" ref="ep">-</button>
                <input readonly type="text" ref="input">
                <button @click="Up()">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="account">
        <div class="price">
          <span>¥</span><span ref="product_price" v-if="product!=''">{{product[0].product_Oprice}}</span>
        </div>
        <div class="joinC">
          <button @click="get()">加入购物车</button>
          <div class="qiu" ref="qiu" :style="{bottom:b_bottom+'rem',right:b_right+'rem'}">8</div>
          <div class="product_ln">
            <p>邮费:包邮</p>
            <p>发货时间:订单付款后1个工作日内</p>
          </div>
          <p>
            <a href="">分期最低月付¥114.54起 详情 ></a>
          </p>
        </div>
      </div>
      <div class="tips">
        <div class="tips_title">温馨提示</div>
        <div class="present">
          <div class="present_value">
            <ul>
              <li>灵眸 Osmo 口袋云台相机目前仅适配 iPhone 和 采用 USB-C 接口的手机。</li>
              <li>
                <a href="">DJI Select 会员</a>购买此机型可享 OSMO Shield 5折及配件8折优惠！
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="product_xinxi">
        <div class="xinxi_title">商品信息</div>
        <div class="xinxi_title">
          <i class="el-icon-document"></i>
          <span>产品概览</span>
          <i class="el-icon-arrow-right"></i>
          <div class="product_synopsis">DJI 大疆迄今为止最小的三轴机械增稳云台相机。
            轻巧，便携，智能且配备独立屏幕，轻松拍摄，
            记录生活从此变得简单又好玩。</div>
        </div>
        <div class="xinxi_title">
          <i class="el-icon-notebook-2"></i>
          <span>包装清单</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="xinxi_title">
          <i class="el-icon-warning-outline"></i>
          <span>常见问题</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <child></child>
    </div>
    <div id="backTop" @click="backTop()">
      <i class="mint-toast-icon mintui mintui-back"></i>
    </div>
  </div>
</template>
<script>
import foter from "./IndexFooter.vue"
export default {
  name:'detail',
  components:{"child":foter},
  data(){
    return{
      imgLists:[],
      product:[],
      relevancy_products:[],
      product_arr:[],
      activeName:"1",
      b_bottom:5,
      b_right:10.8,
      num:0,
      product_nb:0,
    }
  },
  methods:{
    get:function(){
      if(!(window.localStorage&&(window.localStorage.setItem('a',123),window.localStorage.getItem('a')==123))){
        alert("您的电脑可能未开启本地存储")
      }else{
        // 父产品相关信息
        var product_id=this.product[0].product_id;
        var product_price=this.product[0].product_Oprice;
        var product_img=this.product[0].product_img;
        var product_ln=this.product[0].product_ify+" "+this.product[0].product_title
        this.product_nb++
        var product_obj={
          product_id:product_id,
          product_price:parseFloat(product_price).toFixed(2),
          product_img:product_img,
          product_ln:product_ln,
          product_nb:this.product_nb
        }
        if(this.product_arr.length>0){
          for(var i=0;i<this.product_arr.length;i++){
            if(this.$route.query.goodId==this.product_arr[i].product_id){
              this.product_arr[i].product_nb++;
              product_obj.product_price=parseFloat(product_price*this.product_arr[i].product_nb).toFixed(2);
              this.product_arr[i]=product_obj;
            }
          }
        }else{
          if(this.product_arr[0]==null){
            this.product_arr[0]=product_obj;
          }
        }
        console.log(this.product_arr)
        // 子产品相关信息
        if(this.product[0].relevancy_id!=null&&this.$refs.input[0].value!=0){
          var relevancy_id=this.relevancy_products[0].product_id;
          var relevancy_price=this.relevancy_products[0].product_Oprice
          var relevancy_img=this.relevancy_products[0].product_img
          var relevancy_nb=this.$refs.input[0].value
          var relevancy_ln=this.relevancy_products[0].product_ify+" "+this.relevancy_products[0].product_title
          var relevancy_obj={
            relevancy_id:relevancy_id,
            relevancy_price:parseFloat(relevancy_price).toFixed(2),
            relevancy_img:relevancy_img,
            relevancy_ln:relevancy_ln,
            relevancy_nb:parseInt(relevancy_nb)
          }
          for(var i=0;i<this.product_arr.length;i++){
            console.log(this.product_arr[i].relevancy_id)
            if(this.product_arr[i].relevancy_id){
              this.product_arr[i].relevancy_nb+=relevancy_nb
              relevancy_obj.relevancy_price=parseFloat(relevancy_obj.relevancy_price*this.product_arr[i].relevancy_nb).toFixed(2);
              this.product_arr[i]=relevancy_obj
              console.log(111)
              return;
            }else{
              this.product_arr[1]=relevancy_obj
              console.log(222)
              return;
            }
          }
        }
      }
      // 小球移动到购物车图标并且消失
      // this.$refs.qiu.style="display:block"
      // this.b_bottom+=1.8;
      // this.b_right-=0.5;
      // if(this.b_right<=1.3){
      //   this.$refs.qiu.style="display:none"
      // }
    },
    Up:function(){
      this.num++
      this.$refs.ep[0].style="display:inline-block"
      this.$refs.input[0].value=this.num
      var price=parseInt(this.num*this.$refs.relevany_price[0].innerHTML)+parseInt(this.product[0].product_Oprice)
      this.$refs.product_price.innerHTML=price;
    },
    Ep:function(){
      this.num--
      var price=parseInt(this.num*this.$refs.relevany_price[0].innerHTML)+parseInt(this.product[0].product_Oprice)
      this.$refs.product_price.innerHTML=price;
      if(this.num==0){
        this.$refs.ep[0].style="display:none"
        this.$refs.input[0].value="";
        return;
      }
      this.$refs.ep[0].style="display:inline-block"
      this.$refs.input[0].value=this.num
    },
    backTop:function(){
      var top=setInterval(function(){
        document.documentElement.scrollTop-=50;
        if(document.documentElement.scrollTop==0){
          clearInterval(top);
        }
      },30)
    },
    goOut:function(){
      this.$router.go(-1);
    }
  },
  mounted() {
    window.onscroll=function(){
      if(document.documentElement.scrollTop<=250){
        document.getElementById("backTop").style.display="none";
      }else{
        document.getElementById("backTop").style.display="block";
      }
    }
    this.$axios.get("http://127.0.0.1:3000/detail/imgList?product_id="+this.$route.query.goodId).then((res) => {
      this.imgLists=res.data.imgList;
    })
    this.$axios.get("http://127.0.0.1:3000/detail/goodList?product_id="+this.$route.query.goodId).then((res) => {
      this.product=res.data.product;
      if(res.data.product[0].relevancy_id!=null){
        this.$axios.get("http://127.0.0.1:3000/detail/relevancyList?product_id="+res.data.product[0].relevancy_id).then((ress) => {
          this.relevancy_products=ress.data.relevancyList;
          this.$refs.mast_but.style="display:block;"
        })
      }
    })
  },
  created() {
  },
}
</script>
<style lang="css">
*{
  margin:0;
  padding:0;
}
</style>
<style scoped lang="css">
html,body,#detail,.detail{
  width:100%;
  height:100%;
}
a{
  text-decoration: none;
  color: #3B3E40;
}
img{
  max-width: 100%;
}
ul{
  list-style: none;
}
.swipe_item{
  width:100%;
  margin-bottom:10px;
  height:14rem;
}
.swipe_item img{
  width:100%;
  height:100%;
}
.detail{
  max-width: 24rem;
  margin:0 auto;
  background: #f7f9fa;
}
.product_title{
  padding: 5px 16px 10px;
  overflow: hidden;
  background: #fff;
  text-align: center;
  font-size: 20px;
  line-height: 32px;
  color: #3b3e40;
  font-weight: 500;
  margin:7px 0;
}
.header {
  height: 48px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px 0 rgba(0,0,0,.4);
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.4);
}
.header>.center {
  position: absolute;
  height: 48px;
  line-height: 55px;
  width: 100%;
  left: 0;
  padding: 0 42px;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  max-width: 100%;
  z-index: -999;
}
.cart {
  float: right;
  padding-right: 20px;
  height: 100%;
}
.header .cart>.search {
  font-size: 25px;
  line-height: 48px;
  padding: 0 20px;
  cursor: pointer;
}
.el-badge {
  vertical-align: inherit;
  cursor: pointer;
}
.cart>.item>i {
  font-size: 25px;
}
.mint-toast-icon{
  line-height:3.12rem;
  display:inline-block;
  padding-left: 20px;
}
.mast_but{
  display:none;
}
.mast_but>.but_title,
.account>.price,.joinC,
.tips_title,
.present,
.present>.present_value,
.product_xinxi>.xinxi_title,
.el-collapse,
.product_xinxi>.xinxi_title>.product_synopsis
{
  line-height: 1.5;
  padding: .75rem 1rem .6875rem;
  font-size: 1rem;
  color: #3b3e40;
  border-bottom: .0625rem solid #f0f1f2;
  background: #fff;
}
.mast_but>.product_child{
  padding: 1rem 0;
  background: #fff;
}
.mast_but>.product_child::after{
  content:"";
  display:block;
  clear:both;
}
.mast_but>.product_child>.child_img{
  width: 48px;
  height: 48px;
  margin-right: 16px;
  margin-left:10px;
  float: left;
  line-height: 4.1rem;
}
.mast_but>.product_child>.child_value{
  float: left;
  width:75%;
}
.mast_but .child_value>.value_title{
  margin-bottom: 8px;
  padding-right: 80px;
}
.mast_but .child_value>.value_title a>h6{
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
}
.mast_but .child_value>.price{
  line-height: 16px;
  font-size: 12px;
  display: inline-block;
  width:100%;
}
.mast_but .child_value>.price>.Upprice{
  float: right;
}
.mast_but .child_value .Upprice>button:first-child{
  display: none;
  width: 2rem;
  height: 1.5rem;
  font-size: .75rem;
  line-height: 1.334;
  border:none;
  outline: none;
  border-radius: .25rem;
  background-color: #fff;
  border: .0625rem solid #d4d7d9;
}
.mast_but .child_value .Upprice>input:nth-child(2){
  height: 1.5rem;
  width: 2rem;
  display: inline-block;
  vertical-align: middle;
  border: none;
  outline: none;
  background: transparent;
  text-align: center;
}
.mast_but .child_value .Upprice>button:last-child{
  width: 2rem;
  height: 1.5rem;
  font-size: .75rem;
  line-height: 1.334;
  border: none;
  outline: none;
  border-radius: .25rem;
  border: .0625rem solid #d4d7d9;
  background-image: linear-gradient(0deg,#1897f2,#42b7ff);
}
.joinC>button{
  height: 3rem;
  width: 100%;
  border:none;
  text-align: center;
  padding: 0 1.5rem;
  font-size: 0.75rem;
  line-height: 1.5;  
  position: relative; 
  outline: none; 
  border-radius: .25rem;
  color: #fff;
  background-image: linear-gradient(0deg,#1897f2,#42b7ff);
}
.joinC p{
  margin:5px 0;
}
.product_ln>p{
  font-size: 0.75rem;
}
.joinC p>a{
  text-decoration: none;
  font-size: 0.75rem;
  color:#42b7ff;
}
.tips,.account,.product_xinxi{
  margin:1rem 0 0 0;
}
.present>.present_value{
  background: #e6f9ff;
  font-size: 12px;
}
.present>.present_value>ul>li{
  font-weight: 500;
}
.present ul>li>a{
  text-decoration: none;
  color:#42b7ff;
}
#backTop{
  display: none;
  z-index:999;
  height:40px;
  border-radius: 50%;
  border: 1px solid #d4d7d9;
  width:40px;
  background:#fff;
  position: fixed;
  right:20px;
  bottom:70px;
}
#backTop>i{
  line-height: 20px;
  transform: rotate(90deg);
  transition: all 2s linear;
  position: absolute;    
  top: 10px;
  left: 10px;
  padding: 0;
}
.xinxi_title>i:first-child{
  font-size: 1.6rem;
  margin-right:0.62rem;
}
.xinxi_title>i:nth-child(3){
  width:2rem;
  height:2rem;
  line-height: 2rem;
  float: right;
}
.product_xinxi>.xinxi_title>.product_synopsis{
  font-size: 0.85rem;
  color:#3B3E40;
}
.joinC>.qiu{
  border-radius: 0.89rem;
  position: absolute;
  display: none;
  width:2rem;
  height:2rem;
  text-align: center;
  line-height: 2rem;
  color:#fff;
  background:#42b7ff;
  z-index: 999;
}
</style>

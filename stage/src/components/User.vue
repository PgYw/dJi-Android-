<template>
  <div id="user">
    <div class="user">
      <div class="header">
        <span class="menu">
          <transition name="fade" mode="out-in">
            <button ref="menu" class="menuButton" @click.stop="menu()" v-if="!isShow1" key="one">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button ref="hidden" class="hiddenButton" @click.stop="hidden()" v-else-if="isShow1" key="two">
              <span></span>
              <span></span>
            </button>
          </transition>
        </span>
        <span class="center">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="102" height="24" viewBox="0 0 102 24">
              <path fill="#3B3E40" fill-rule="evenodd" d="M974.618882,425.963018 L977.713886,413 L984.493896,413 L980.970891,427.74602 C980.29289,430.592024 978.178887,431.276025 976.223884,431.276025 L960.599863,431.276025 C958.87786,431.276025 957.436858,430.543024 958.217859,427.25602 L959.625861,421.375012 C960.337862,418.390007 962.554865,417.710007 964.157867,417.710007 L975.062883,417.710007 L974.183881,421.385012 L968.615874,421.385012 C967.797873,421.385012 967.348872,421.562012 967.120872,422.518013 L966.22087,426.275018 C965.90087,427.62002 966.370871,427.71402 967.357872,427.71402 L972.458879,427.71402 C973.39288,427.71402 974.214881,427.65402 974.618882,425.962018 L974.618882,425.963018 Z M993.013907,417.665006 L989.823903,431.234025 L996.410912,431.234025 L999.599916,417.665006 L993.013907,417.665006 Z M982.291893,428.860022 L984.976896,417.665006 L991.562905,417.665006 L988.493901,430.419024 C987.216899,435.762031 983.643894,437.000033 981.223891,437.000033 L971.985878,437.000033 L973.09088,432.401027 C973.09088,432.401027 978.004887,432.426027 978.178887,432.404027 C979.936889,432.257027 981.685892,431.400025 982.291893,428.860022 Z M1009.50793,430.278024 C1008.85354,429.868389 1008.33022,429.27983 1007.99993,428.582022 L1009.49093,427.75002 C1009.81493,428.282021 1010.15293,428.668022 1010.50493,428.909022 C1010.96293,429.229022 1011.51893,429.388023 1012.17293,429.388023 C1013.51894,429.388023 1014.19294,428.853022 1014.19294,427.78402 C1014.19294,427.31402 1014.02694,426.919019 1013.69794,426.600019 C1013.42394,426.348018 1012.93793,426.068018 1012.23993,425.760018 L1011.46893,425.416017 C1010.54193,425.000017 1009.86993,424.559016 1009.45793,424.089015 C1008.97793,423.540015 1008.73793,422.840014 1008.73793,421.989012 C1008.73793,421.122011 1009.04193,420.41101 1009.65093,419.857009 C1010.26493,419.297009 1011.05293,419.017008 1012.01393,419.017008 C1013.52694,419.017008 1014.62494,419.630009 1015.30594,420.856011 L1013.88194,421.738012 C1013.45194,420.976011 1012.82893,420.596011 1012.01393,420.596011 C1011.00793,420.596011 1010.50493,421.049011 1010.50493,421.956012 C1010.50493,422.656013 1011.06693,423.252014 1012.18893,423.745015 L1012.94393,424.089015 C1014.00394,424.559016 1014.76394,425.046017 1015.22294,425.550017 C1015.73694,426.138018 1015.99294,426.877019 1015.99294,427.76702 C1015.99294,428.769022 1015.63894,429.567023 1014.92894,430.160024 C1014.23094,430.720025 1013.32294,431.000025 1012.20593,431.000025 C1011.16193,431.000025 1010.26193,430.760025 1009.50793,430.278024 Z M1020.79495,420.755011 L1017.32494,420.755011 L1017.32494,419.151009 L1026.05695,419.151009 L1026.05695,420.755011 L1022.59695,420.755011 L1022.59695,430.850025 L1020.79495,430.850025 L1020.79495,420.755011 Z M1029.23196,429.321023 C1028.06496,428.173021 1027.48196,426.734019 1027.48196,425.004017 C1027.48196,423.269014 1028.06496,421.830012 1029.23196,420.688011 C1030.38996,419.563009 1031.81296,419.000008 1033.50596,419.000008 C1035.18697,419.000008 1036.60597,419.563009 1037.76197,420.688011 C1038.92997,421.830012 1039.51297,423.268014 1039.51297,425.004017 C1039.51297,426.734019 1038.92997,428.173021 1037.76297,429.321023 C1036.60497,430.440024 1035.18597,431.000025 1033.50496,431.000025 C1031.81196,431.000025 1030.38796,430.440024 1029.23096,429.320023 L1029.23196,429.321023 Z M1036.48897,428.111021 C1037.26497,427.28802 1037.65297,426.253018 1037.65297,425.004017 C1037.65297,423.750015 1037.26497,422.712013 1036.48897,421.889012 C1035.71197,421.049011 1034.71797,420.629011 1033.50596,420.629011 C1032.29296,420.629011 1031.29096,421.049011 1030.49796,421.889012 C1029.72096,422.712013 1029.33296,423.750015 1029.33296,425.004017 C1029.33296,426.253018 1029.72096,427.28802 1030.49796,428.111021 C1031.29096,428.951022 1032.29296,429.371023 1033.50596,429.371023 C1034.71797,429.371023 1035.71197,428.951022 1036.48897,428.111021 Z M1041.78397,419.151009 L1045.69698,419.151009 C1046.96498,419.151009 1047.97098,419.451009 1048.71398,420.05001 C1049.52899,420.693011 1049.93699,421.634012 1049.93699,422.871014 C1049.93699,424.556016 1049.14698,425.673018 1047.56598,426.221018 L1050.31399,430.849025 L1048.23598,430.849025 L1045.71398,426.516019 L1043.60198,426.516019 L1043.60198,430.849025 L1041.78397,430.849025 L1041.78397,419.150009 L1041.78397,419.151009 Z M1045.62998,424.987017 C1047.25598,424.987017 1048.06798,424.282016 1048.06798,422.871014 C1048.06798,421.461012 1047.25598,420.755011 1045.62998,420.755011 L1043.60198,420.755011 L1043.60198,424.987017 L1045.62998,424.987017 Z M1052.34999,419.151009 L1059.765,419.151009 L1059.765,420.755011 L1054.16799,420.755011 L1054.16799,424.190015 L1059.128,424.190015 L1059.128,425.760018 L1054.16799,425.760018 L1054.16799,429.253022 L1060,429.253022 L1060,430.849025 L1052.34999,430.849025 L1052.34999,419.150009 L1052.34999,419.151009 Z" transform="translate(-958 -413)"/>
            </svg>
          </a>
        </span>
        <span class="cart">
          <el-badge :value="Cartl" class="item"  type="primary">
            <router-link to="/Cart">
              <i class="el-icon-shopping-cart-full"></i>
            </router-link>
          </el-badge>
        </span>
      </div>
      <div class="info">
        <div class="info_text">
          <div class="login_info">
            <div class="login_avatar">
              <img src="~@/assets/images/avatar.png" alt="">
            </div>
            <div class="login_name">258535***91@qq.com</div>
          </div>
          <transition name="fade" mode="out-in">
            <div ref="login_main" class="login_main" v-if="!isShow1" key="one">
              <ul>
                <li><a href="" class="main_a">我的账户</a></li>
                <li><a href="" class="main_a">我的订单</a></li>
                <li><a href="" class="main_a">我的Dji币</a></li>
                <li><a href="" class="main_a">我的优惠券</a></li>
              </ul>
                <button class="loginOut" @click="Out()">退出</button>
            </div>
            <div ref="nav_main" class="nav_main" v-else-if="isShow1" key="two">
              <ul>
                <li><router-link  to="/Index" class="nav_a">首页</router-link></li>
                <li><a href="" class="nav_a">Phantom</a></li>
                <li><a href="" class="nav_a">Inspire</a></li>
                <li><a href="" class="nav_a">Osmo</a></li>
                <li><a href="" class="nav_a">Ronin</a></li>
                <li><a href="" class="nav_a">行业应用</a></li>
                <li><a href="" class="nav_a">开发者类套件</a></li>
              </ul>
            </div>
          </transition>
          <footer ref="Cell" class="Cell">
            <h2>我们在此为您服务</h2>
            <div class="Cell_phone" ref="Cell_phone">
              <div class="title">
                <h3>中国大陆</h3>
                <a href="tel:110">+86110</a>
                <p>周一至周日 9:00-21:00 (北京时间)</p>
              </div>
              <div class="title">
                <h3>中国香港</h3>
                <a href="tel:110">+00852110</a>
                <p>周一至周五 11:00-18:00 (北京时间)</p>
              </div>
            </div>
            <ul>
              <li>
                <a href="">
                  <img src="~@/assets/images/user_email.png" alt="">
                  <p>邮箱</p>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="~@/assets/images/user_chat.png" alt="">
                  <p>在线咨询</p>
                </a>
              </li>
              <li @click="help_phone()">
                <img src="~@/assets/images/user_phone.png" alt="">
                <p>电话</p>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"user",
  data(){
    return{
      Cartl:0,
      isShow1:false,
      isShow2:false,
    }
  },
  methods: {
    // 二级菜单按钮图标
    menu(){
      this.isShow1=true;
    },
    hidden(){
      this.isShow1=false;
    },
    // 二级菜单客服帮助
    help_phone(){
      if(this.$refs.Cell_phone.style.display=="none"){
      this.$refs.Cell_phone.style="display:block";
      }else{
      this.$refs.Cell_phone.style="display:none";
      }
    },
    // 返回上一页
    Out(){
      sessionStorage.removeItem("userId");
      this.getStorage()
      this.$router.push("/Index")
    }
  },
  // 加载和设置一些所需数据
  mounted() {
    this.getStorage().then(arr=>{
      this.Cartl=arr.length;
    });
    var user_id=sessionStorage.getItem("userId")
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
.el-badge__content{
  top:10px !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
a {
  text-decoration: none;
  color: #3B3E40;
}
ul{
  list-style: none;
}
html,body,#user,.user{
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
  width:2.6rem;
}
.menu .menuButton {
    width: 40px;
    position: relative;
    z-index: 3;
    display: inline-block;
    vertical-align: super;
    border: 0;
    background: transparent;
    outline: none;
    -webkit-appearance: none;
    -webkit-transition: 1s all linear;
    transition: 1s all linear;
}
.menu .menuButton>span {
    display: block;
    line-height: 0;
    font-size: 0;
}
.menu .menuButton>span:nth-child(2) {
    padding: 5px 0;
}
.menu .menuButton>span::after {
    background-color: #303233;
    border-bottom-left-radius: 2px;
    border-top-right-radius: 2px;
    content: "";
    display: inline-block;
    height: 2px;
    transition: transform .4s ease .2s,-webkit-transform .4s ease .2s;
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    width: 20px;
}
.menu .hiddenButton{
  width: 40px;
  position: relative;
  z-index:3;
  vertical-align: super;
  border: 0;
  background: transparent;
  outline: none;
  -webkit-appearance: none;
  transition: 1s all linear;
}
.menu .hiddenButton>span{
  display: block;
  transition: all .4s ease;
  line-height: 0;
  font-size: 0;
}
.menu .hiddenButton>span:first-child{
  transform: translateY(2px);
}
.menu .hiddenButton>span:first-child::after{
  background-color: #303233;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 2px;
  content: "";
  display: inline-block;
  height: 2px;
  transition: transform .4s ease .2s,-webkit-transform .4s ease .2s;
  transform: rotate(45deg);
  width: 20px;
}
.menu .hiddenButton>span:nth-child(2){
  transform: translateY(-5px);
  padding:5px 0;
}
.menu .hiddenButton>span:nth-child(2)::after{
  background-color: #303233;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 2px;
  content: "";
  display: inline-block;
  height: 2px;
  transition: transform .4s ease .2s,-webkit-transform .4s ease .2s;
  transform: rotate(-45deg);
  width: 20px;
}
.info{
  max-width: 30rem;
  margin: 0 auto;
  background: #F7F8F9;
}
.info_text>.login_info{
  padding: 1.12rem 1.12rem;
  overflow: hidden;
}
.info .login_avatar{
  width:40px;
  height:40px;
  margin-left:1.12rem;
  float: left;
}
.info .login_avatar>img{
  width:100%;
  height:100%;
}
.info .login_name{
  float: left;
  color:#7F8084;
  font-weight: 400;
  font-size: 14px;
}
.info_text>.login_main,
.info_text>.nav_main,
.info_text .Cell{
  background: #fff;
  padding:0 1.12rem;
}
.login_main>ul>li:not(:last-child){
  border-bottom: 1px solid #ececec;
}
.login_main>ul .main_a{
  display: block;
  width: 100%;
  height: 100%;
  padding: 14px 0;
  font-size: 13px;
  border: none;
  text-transform: uppercase;
  color: #707473;
  text-decoration: none;
  font-weight: normal;
}
.login_main .loginOut{
  width: 100%;
  background: #fff;
  text-align: center;
  outline: none;
  margin-top: 2.12rem;
  border: 1px solid #4a4a4a;
  border-radius: 1.12rem;
  height: 2.5rem;
  line-height: 2.5rem;
  color: #7F8084;
  font-size: 0.92rem;
}
.login_main .loginOut:active{
  background: #ebeef5;
}
.info_text>.nav_main>ul{
  margin-bottom: 1.2rem;
}
.info_text>.nav_main>ul>li{
  list-style: none;
  padding: 17px 0;
  border-bottom: 1px solid #f7f8f9;
}
.info_text>.nav_main li>a{
  display: block;
  font-size: 14px;
  color: #999;
  text-transform: uppercase;
  text-decoration: none;
}
.info_text .Cell{
  display: none;
}
.info_text .Cell>ul{
  display:table;
  width:100%;
  padding: 1.1rem 0;
}
.info_text .Cell>ul::after{
  content:"";
  display:block;
  clear: both;
}
.info_text .Cell li{
  width:33.33%;
  height:2.5rem;
  display:table-cell;
  text-align: center;
  border-bottom: none;
}
.info_text .Cell li img{
  width:2.5rem;
  height:1.6rem;
}
.info_text .Cell li p{
  font-size: 12px;
  color: #707473;
  padding-top: 10px;
  text-transform: uppercase;
}
.info_text .Cell>h2{
  overflow: hidden;
  padding-bottom: 7px;
  color: #4a4a4a;
  font-size: 16px;
  font-weight: 400;
  padding-top: 1rem;
}
.info_text .Cell>.Cell_phone{
  padding: 15px 0;
  display: none;
  text-align: center;
  background: #F7F8F9;
}
.info_text .Cell>.Cell_phone h3{
  padding: 5px 0;
  text-transform: uppercase;
  color: #44a8f2;
  font-size: 14px;
  font-weight: normal;
}
.info_text .Cell>.Cell_phone a{
  color: #707473;
  font-size: 14px;
  font-weight: 400;
  text-decoration: 1px solid #707473;
}
.info_text .Cell>.Cell_phone p{
  color: #707473;
  font-size: 14px;
  font-weight: 400;
}
</style>

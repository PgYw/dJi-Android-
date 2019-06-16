<template>
  <div class="main">
    <transition name="fade">
      <div class="downloadApp" v-if="!show">
        <button>
          <i class="shanchu" @click="show=true,dwShow=1"></i>
        </button>
        <span class="logo">
          <img src="http://localhost:8080/static/images/djiapp.png" alt>
        </span>
        <span class="text">
          <div>大疆商城 APP</div>
          <div>随时获取优惠信息！</div>
        </span>
        <span class="button">立即下载</span>
      </div>
    </transition>
    <div class="header">
      <span class="menu">
        <transition name="fade" mode="out-in">
          <button ref="show" class="menuButton" v-if="!isShow" @click.stop="menu()" key="one">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button
            ref="hidden"
            class="hiddenButton"
            v-else-if="isShow"
            @click.stop="menu()"
            key="two"
          >
            <span></span>
            <span></span>
          </button>
        </transition>
      </span>
      <span class="center">
        <a href>
          <svg xmlns="http://www.w3.org/2000/svg" width="102" height="24" viewBox="0 0 102 24">
            <path
              fill="#3B3E40"
              fill-rule="evenodd"
              d="M974.618882,425.963018 L977.713886,413 L984.493896,413 L980.970891,427.74602 C980.29289,430.592024 978.178887,431.276025 976.223884,431.276025 L960.599863,431.276025 C958.87786,431.276025 957.436858,430.543024 958.217859,427.25602 L959.625861,421.375012 C960.337862,418.390007 962.554865,417.710007 964.157867,417.710007 L975.062883,417.710007 L974.183881,421.385012 L968.615874,421.385012 C967.797873,421.385012 967.348872,421.562012 967.120872,422.518013 L966.22087,426.275018 C965.90087,427.62002 966.370871,427.71402 967.357872,427.71402 L972.458879,427.71402 C973.39288,427.71402 974.214881,427.65402 974.618882,425.962018 L974.618882,425.963018 Z M993.013907,417.665006 L989.823903,431.234025 L996.410912,431.234025 L999.599916,417.665006 L993.013907,417.665006 Z M982.291893,428.860022 L984.976896,417.665006 L991.562905,417.665006 L988.493901,430.419024 C987.216899,435.762031 983.643894,437.000033 981.223891,437.000033 L971.985878,437.000033 L973.09088,432.401027 C973.09088,432.401027 978.004887,432.426027 978.178887,432.404027 C979.936889,432.257027 981.685892,431.400025 982.291893,428.860022 Z M1009.50793,430.278024 C1008.85354,429.868389 1008.33022,429.27983 1007.99993,428.582022 L1009.49093,427.75002 C1009.81493,428.282021 1010.15293,428.668022 1010.50493,428.909022 C1010.96293,429.229022 1011.51893,429.388023 1012.17293,429.388023 C1013.51894,429.388023 1014.19294,428.853022 1014.19294,427.78402 C1014.19294,427.31402 1014.02694,426.919019 1013.69794,426.600019 C1013.42394,426.348018 1012.93793,426.068018 1012.23993,425.760018 L1011.46893,425.416017 C1010.54193,425.000017 1009.86993,424.559016 1009.45793,424.089015 C1008.97793,423.540015 1008.73793,422.840014 1008.73793,421.989012 C1008.73793,421.122011 1009.04193,420.41101 1009.65093,419.857009 C1010.26493,419.297009 1011.05293,419.017008 1012.01393,419.017008 C1013.52694,419.017008 1014.62494,419.630009 1015.30594,420.856011 L1013.88194,421.738012 C1013.45194,420.976011 1012.82893,420.596011 1012.01393,420.596011 C1011.00793,420.596011 1010.50493,421.049011 1010.50493,421.956012 C1010.50493,422.656013 1011.06693,423.252014 1012.18893,423.745015 L1012.94393,424.089015 C1014.00394,424.559016 1014.76394,425.046017 1015.22294,425.550017 C1015.73694,426.138018 1015.99294,426.877019 1015.99294,427.76702 C1015.99294,428.769022 1015.63894,429.567023 1014.92894,430.160024 C1014.23094,430.720025 1013.32294,431.000025 1012.20593,431.000025 C1011.16193,431.000025 1010.26193,430.760025 1009.50793,430.278024 Z M1020.79495,420.755011 L1017.32494,420.755011 L1017.32494,419.151009 L1026.05695,419.151009 L1026.05695,420.755011 L1022.59695,420.755011 L1022.59695,430.850025 L1020.79495,430.850025 L1020.79495,420.755011 Z M1029.23196,429.321023 C1028.06496,428.173021 1027.48196,426.734019 1027.48196,425.004017 C1027.48196,423.269014 1028.06496,421.830012 1029.23196,420.688011 C1030.38996,419.563009 1031.81296,419.000008 1033.50596,419.000008 C1035.18697,419.000008 1036.60597,419.563009 1037.76197,420.688011 C1038.92997,421.830012 1039.51297,423.268014 1039.51297,425.004017 C1039.51297,426.734019 1038.92997,428.173021 1037.76297,429.321023 C1036.60497,430.440024 1035.18597,431.000025 1033.50496,431.000025 C1031.81196,431.000025 1030.38796,430.440024 1029.23096,429.320023 L1029.23196,429.321023 Z M1036.48897,428.111021 C1037.26497,427.28802 1037.65297,426.253018 1037.65297,425.004017 C1037.65297,423.750015 1037.26497,422.712013 1036.48897,421.889012 C1035.71197,421.049011 1034.71797,420.629011 1033.50596,420.629011 C1032.29296,420.629011 1031.29096,421.049011 1030.49796,421.889012 C1029.72096,422.712013 1029.33296,423.750015 1029.33296,425.004017 C1029.33296,426.253018 1029.72096,427.28802 1030.49796,428.111021 C1031.29096,428.951022 1032.29296,429.371023 1033.50596,429.371023 C1034.71797,429.371023 1035.71197,428.951022 1036.48897,428.111021 Z M1041.78397,419.151009 L1045.69698,419.151009 C1046.96498,419.151009 1047.97098,419.451009 1048.71398,420.05001 C1049.52899,420.693011 1049.93699,421.634012 1049.93699,422.871014 C1049.93699,424.556016 1049.14698,425.673018 1047.56598,426.221018 L1050.31399,430.849025 L1048.23598,430.849025 L1045.71398,426.516019 L1043.60198,426.516019 L1043.60198,430.849025 L1041.78397,430.849025 L1041.78397,419.150009 L1041.78397,419.151009 Z M1045.62998,424.987017 C1047.25598,424.987017 1048.06798,424.282016 1048.06798,422.871014 C1048.06798,421.461012 1047.25598,420.755011 1045.62998,420.755011 L1043.60198,420.755011 L1043.60198,424.987017 L1045.62998,424.987017 Z M1052.34999,419.151009 L1059.765,419.151009 L1059.765,420.755011 L1054.16799,420.755011 L1054.16799,424.190015 L1059.128,424.190015 L1059.128,425.760018 L1054.16799,425.760018 L1054.16799,429.253022 L1060,429.253022 L1060,430.849025 L1052.34999,430.849025 L1052.34999,419.150009 L1052.34999,419.151009 Z"
              transform="translate(-958 -413)"
            ></path>
          </svg>
        </a>
      </span>
      <transition name="fade" mode="out-in">
        <span class="cart" v-if="!isShow">
          <i class="el-icon-search search"></i>
          <el-badge :value="Cartl" class="item" type="primary">
            <router-link to="/Cart">
              <i class="el-icon-shopping-cart-full"></i>
            </router-link>
          </el-badge>
        </span>
      </transition>
    </div>
    <transition name="fade" model="out-in">
      <div class="body" v-show="!isShow">
        <div class="index_swipe">
          <mt-swipe :auto="5500">
            <mt-swipe-item v-for="banner in banners" :key="banner.banner_id">
              <a :href="banner.banner_href">
                <div class="productLn">
                  <h2>{{banner.banner_productLnTop}}</h2>
                  <span>{{banner.banner_productLnBottom}}</span>
                </div>
                <img v-lazy="banner.banner_img" alt>
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="index_one">
          <div class="productTe">
            <h3>{{product_ifys[0]}}</h3>
          </div>
          <div class="products">
            <ul>
              <li v-for="one_product in one_products" :key="one_product.product_id">
                <router-link
                  :to="{path:'/Detail',query:{productId:one_product.product_id}}"
                  class="products"
                >
                  <div class="product_img">
                    <img v-lazy="one_product.product_img" :alt="one_product.product_title">
                  </div>
                  <div class="product_ln">
                    <div class="ln_notice">{{one_product.product_ify+" "+one_product.product_title}}</div>
                    <div class="ln_price">{{"¥"+one_product.product_Oprice}}</div>
                  </div>
                </router-link>
              </li>
            </ul>
            <a href class="Osmo">更多 {{product_ifys[0]}} 产品></a>
          </div>
        </div>
        <div class="index_two">
          <div class="productTe">
            <h3>{{product_ifys[1]}}</h3>
          </div>
          <div class="products">
            <ul>
              <li v-for="two_product in two_products" :key="two_product.product_id">
                <router-link
                  :to="{path:'/Detail',query: {productId: two_product.product_id}}"
                  class="products"
                >
                  <div class="product_img">
                    <img v-lazy="two_product.product_img" :alt="two_product.product_title">
                  </div>
                  <div class="product_ln">
                    <div class="ln_notice">{{two_product.product_ify+" "+two_product.product_title}}</div>
                    <div class="ln_price">{{"¥"+two_product.product_Oprice}}</div>
                  </div>
                </router-link>
              </li>
            </ul>
            <a href class="Osmo">更多 {{product_ifys[1]}} 产品></a>
          </div>
        </div>
        <div class="index_shaky" v-for="shaky in shakys" :key="shaky.shaky_id">
          <a href>
            <div class="shaky_title">{{shaky.shaky_title}}</div>
            <img v-lazy="shaky.shaky_imgUrl" style="width:100%;height:100%;" alt>
          </a>
        </div>
        <div class="index_three">
          <div class="productTe">
            <h3>{{product_ifys[2]}}</h3>
          </div>
          <div class="products">
            <ul>
              <li v-for="three_product in three_products" :key="three_product.product_id">
                <router-link
                  :to="{path:'/Detail',query: {productId: three_product.product_id}}"
                  class="products"
                >
                  <div class="product_img">
                    <img v-lazy="three_product.product_img" :alt="three_product.product_title">
                  </div>
                  <div class="product_ln">
                    <div
                      class="ln_notice"
                    >{{three_product.product_ify+" "+three_product.product_title}}</div>
                    <div class="ln_price">{{"¥"+three_product.product_Oprice}}</div>
                  </div>
                </router-link>
              </li>
            </ul>
            <a href class="Osmo">更多 {{product_ifys[2]}} 产品></a>
          </div>
        </div>
        <div class="index_favourable">
          <div class="productTe">
            <h3>优惠</h3>
          </div>
          <a href v-for="favourable in favourables" :key="favourable.favourable_id">
            <div class="favourable_title">{{favourable.favourable_title}}</div>
            <img v-lazy="favourable.favourable_imgUrl" style="width:100%;height:100%;" alt>
          </a>
        </div>
        <div id="backTop" @click="backTop()">
          <i class="mint-toast-icon mintui mintui-back"></i>
        </div>
        <foter :products_ify="products_ify"></foter>
      </div>
    </transition>
    <transition name="fade" model="out-in">
      <div class="reclassify" ref="reclassify" v-if="isShow">
        <div class="padding">
          <div class="user">
            <router-link :to="isLogin.route" ref="login">{{isLogin.text}}</router-link>
          </div>
          <div class="product_ify">
            <div class="ify_title">商品分类</div>
            <ul>
              <li v-for="product in products_ify" :key="product.product_id">
                <a href>
                  <img v-lazy="product.product_img" class="product_img" alt>
                  <p>{{product.product_ify}}</p>
                </a>
              </li>
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="其他" name="1">
                  <ul>
                    <li v-for="product in products_ify" :key="product.product_id">
                      <a href>
                        <img v-lazy="product.product_img" class="product_img" alt>
                        <p>{{product.product_ify}}</p>
                      </a>
                    </li>
                  </ul>
                </el-collapse-item>
              </el-collapse>
            </ul>
          </div>
          <div>
            <div class="ify_title">优惠</div>
            <ul>
              <li v-for="product in products_ify" :key="product.product_id">
                <a href>
                  <p>{{product.product_ify}}</p>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div class="ify_title">指南</div>
            <ul>
              <li>
                <a href>
                  <p>购机指南</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <footer class="nav_footer">
          <div class="footer_title">服务与支持</div>
          <div class="footer_ln">
            <h3>中国大陆</h3>
            <a href="tel:4007000303" class="tel">4007000303</a>
            <p>周一至周日 9:00-21:00 (北京时间)</p>
          </div>
          <ul class="help_list">
            <li>
              <img src="http://localhost:8080/static/images/email.png" alt>
              <p>邮箱</p>
            </li>
            <li>
              <img src="http://localhost:8080/static/images/chat.png" alt>
              <p>在线交谈</p>
            </li>
            <li>
              <img src="http://localhost:8080/static/images/phone.png" alt>
              <p>电话</p>
            </li>
          </ul>
        </footer>
        <div class="Uparea">
          <a href>更改国家或者地区</a>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import foter from "@/components/IndexFooter";
export default {
  name: "app",
  components: { foter: foter },
  data() {
    return {
      show: false,
      isShow: false,
      dwShow: 0,
      banners: [],
      one_products: [],
      two_products: [],
      three_products: [],
      shakys: [],
      favourables: [],
      product_ifys: [],
      products_ify: [],
      activeName: "0",
      Cartl: false
    };
  },
  mounted() {
    this.getStorage()
    if (sessionStorage.getItem("userId") != (undefined || null)) {
      var getCart = setInterval(() => {
        if (this.getStorage().Cartl > 0&&this.getStorage().Cartl) {
          clearInterval(getCart);
          this.Cartl = this.getStorage().Cartl;
        }
      }, 350);
    }
    this.Cartl = this.getStorage().Cartl;
  },
  created() {
    this.$axios
      .all([
        this.$axios.get("http://127.0.0.1:3000/index/banner"),
        this.$axios.get("http://127.0.0.1:3000/index/one_product"),
        this.$axios.get("http://127.0.0.1:3000/index/two_product"),
        this.$axios.get("http://127.0.0.1:3000/index/shaky"),
        this.$axios.get("http://127.0.0.1:3000/index/three_product"),
        this.$axios.get("http://127.0.0.1:3000/index/favourable")
      ])
      .then(
        this.$axios.spread(
          (
            banner,
            one_products,
            two_products,
            shakys,
            three_products,
            favourable
          ) => {
            this.banners = banner.data;
            this.one_products = one_products.data;
            this.product_ifys.push(one_products.data[0].product_ify);
            this.two_products = two_products.data;
            this.product_ifys.push(two_products.data[0].product_ify);
            this.shakys = shakys.data;
            this.three_products = three_products.data;
            this.product_ifys.push(three_products.data[0].product_ify);
            this.favourables = favourable.data;
          }
        )
      );
    this.$axios.get("http://127.0.0.1:3000/index/products").then(res => {
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].relevancy_id != null) {
          var relevancy_id = res.data[i].relevancy_id;
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].product_id == relevancy_id) {
              res.data.splice(i, 1);
              this.products_ify = res.data;
            }
          }
        }
      }
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (document.documentElement.scrollTop <= 500) {
        document.getElementById("backTop").style.display = "none";
      } else {
        document.getElementById("backTop").style.display = "block";
      }
    },
    menu() {
      if (!this.isShow && this.show && this.dwShow == 1) {
        this.isShow = true;
      } else if (this.isShow && this.show && this.dwShow == 0) {
        this.isShow = false;
        this.show = false;
      } else if (this.isShow && this.show && this.dwShow == 1) {
        this.isShow = false;
      } else {
        this.isShow = true;
        this.show = true;
      }
    },
    backTop() {
      var top = setInterval(function() {
        document.documentElement.scrollTop -= 150;
        if (document.documentElement.scrollTop == 0) {
          clearInterval(top);
        }
      }, 30);
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    isLogin() {
      if (sessionStorage.getItem("userId") != undefined) {
        return { text: "我的账户", route: "/User" };
      } else {
        return { text: "登录", route: "/Login" };
      }
    }
  }
};
</script>

<style lang="css">
* {
  padding: 0;
  margin: 0;
}
</style>

<style scoped lang="css">
.el-collapse-item__content {
  padding: 0px;
}
/* 动画 */
.none {
  opacity: 0;
  padding: 0;
  margin: 0;
  height: 0 !important;
  transition: all 1.5s linear;
}
a {
  text-decoration: none;
  color: #3b3e40;
}
ul {
  list-style: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.el-collapse {
  padding: 0 16px;
}
.el-collapse-item__content > div > ul > li > a {
  font-size: 14px;
  color: #3b3e40;
  line-height: 30px;
}
.el-collapse-item__header,
.el-collapse-item__wrap {
  background: transparent;
}
.main {
  position: relative;
  background: #f7f9fa;
}
.downloadApp {
  padding: 0 16px;
  height: 55px;
  background: rgb(59, 62, 64);
}
.downloadApp button {
  float: left;
  color: #fff;
  padding: 16px 8px;
  border: none;
  background: none;
  outline: none;
}
.downloadApp .shanchu {
  font-style: normal;
  font-family: "quark-mobile";
  font-size: 16px;
  width: 16px;
  height: 16px;
  text-align: center;
}
.downloadApp .shanchu::after {
  content: "X";
}
.logo {
  float: left;
  line-height: 50px;
}
.logo > img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  border-radius: 10px;
}
.text {
  float: left;
  margin-left: 8px;
  padding: 10px 0;
  position: absolute;
  overflow: hidden;
  margin: 0 auto;
  margin-left: 5px;
}
.text div:first-child {
  font-size: 14px;
  color: #fff;
  line-height: 16px;
  font-weight: 500;
}
.text div:nth-child(2) {
  font-size: 12px;
  color: #9fa3a6;
  line-height: 16px;
}
.button {
  width: 75px;
  background: #1897f2;
  height: 2rem;
  float: right;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  line-height: 32px;
  padding: 3px 5px;
  position: absolute;
  top: 8px;
  right: 18px;
  cursor: pointer;
}
.header {
  height: 48px;
  width: 100%;
  z-index: 999;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}
.header > .center {
  width: 100%;
  text-align: center;
  position: absolute;
  padding: 0 80px;
  box-sizing: border-box;
}
.header > .cart {
  font-size: 23px;
  width: 5.6rem;
}
.header > .cart > i {
  margin: 0 8px;
}
.el-badge {
  vertical-align: inherit;
  cursor: pointer;
  margin: 0 8px;
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
.menu .menuButton > span {
  display: block;
  line-height: 0;
  font-size: 0;
}
.menu .menuButton > span:nth-child(2) {
  padding: 5px 0;
}
.menu .menuButton > span::after {
  background-color: #303233;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 2px;
  content: "";
  display: inline-block;
  height: 2px;
  transition: transform 0.4s ease 0.2s, -webkit-transform 0.4s ease 0.2s;
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  width: 20px;
}
.menu .hiddenButton {
  width: 40px;
  position: relative;
  z-index: 3;
  vertical-align: super;
  border: 0;
  background: transparent;
  outline: none;
  -webkit-appearance: none;
  transition: 1s all linear;
}
.menu .hiddenButton > span {
  display: block;
  transition: all 0.4s ease;
  line-height: 0;
  font-size: 0;
}
.menu .hiddenButton > span:first-child {
  transform: translateY(2px);
}
.menu .hiddenButton > span:first-child::after {
  background-color: #303233;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 2px;
  content: "";
  display: inline-block;
  height: 2px;
  transition: transform 0.4s ease 0.2s, -webkit-transform 0.4s ease 0.2s;
  transform: rotate(45deg);
  width: 20px;
}
.menu .hiddenButton > span:nth-child(2) {
  transform: translateY(-5px);
  padding: 5px 0;
}
.menu .hiddenButton > span:nth-child(2)::after {
  background-color: #303233;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 2px;
  content: "";
  display: inline-block;
  height: 2px;
  transition: transform 0.4s ease 0.2s, -webkit-transform 0.4s ease 0.2s;
  transform: rotate(-45deg);
  width: 20px;
}
.body {
  max-width: 24rem;
  margin: auto;
  overflow-x: hidden;
}
.mint-swipe {
  height: 320px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.index_swipe > .mint-swipe a > .productLn {
  position: absolute;
  width: 320px;
  left: 0;
  right: 0;
  bottom: 38px;
  margin: 0 auto;
  text-align: center;
}
.index_swipe > .mint-swipe a > .productLn > h2,
.index_swipe > .mint-swipe a > .productLn > span {
  color: #fff;
}
.index_one,
.index_two {
  border-bottom: none;
  background: transparent;
}
.productTe {
  padding: 1rem 1rem;
}
.productTe > h3 {
  font-weight: 500;
  color: #3b3e40;
}
.products > ul {
  list-style: none;
  overflow: hidden;
}
.products > ul::after,
.downloadApp {
  content: "";
  display: block;
  clear: both;
  transition: all 1.5s linear;
}
.products > ul > li {
  width: 50%;
  height: 241.5px;
  float: left;
  padding: 0 4px 8px 0;
  box-sizing: border-box;
}
.index_two ul > li:first-child,
.index_three ul > li:first-child {
  width: 100%;
}
.products li > a {
  display: block;
  text-align: center;
  background: #fff;
  position: relative;
  color: #3b3e40;
  min-height: 100%;
  width: 100%;
}
.products li > a > .product_img {
  width: 152px;
  position: relative;
  display: block;
  margin: auto;
  max-width: 240px;
}
.products li > a > .product_img > img {
  width: 100%;
  height: 100%;
}
.products li > a > .product_ln {
  padding: 0 16px 24px;
  text-align: center;
  overflow: hidden;
}
.products li > a > .product_ln > .ln_price {
  margin: 16px 0 0;
  font-size: 14px;
}
.products > .Osmo {
  display: block;
  background: #fff;
  text-align: center;
  height: 48px;
  line-height: 48px;
  color: #3b3e40;
}
.index_shaky .shaky_title,
.favourable_title {
  position: absolute;
  width: 205px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
}
.index_favourable {
  position: relative;
}
.index_shaky > a,
.index_favourable > a {
  color: #3b3e40;
  display: block;
  margin-top: 10px;
  position: relative;
}
#backTop {
  display: none;
  z-index: 999;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #d4d7d9;
  width: 40px;
  background: #fff;
  position: fixed;
  right: 20px;
  bottom: 70px;
}
#backTop > i {
  line-height: 40px;
  transform: rotate(90deg);
  transition: all 2s linear;
}
.index_footer {
  padding: 8px 16px 16px 16px;
}
.index_footer > div:first-child > a {
  font-size: 12px;
  margin-right: 16px;
  color: #3b3e40;
  height: 32px;
  line-height: 32px;
  display: inline-block;
}
.lang > a {
  width: 100%;
  font-size: 12px;
  color: #3b3e40;
  height: 32px;
  line-height: 32px;
  display: inline-block;
}
.lang > a > div > i {
  float: right;
  line-height: 32px;
}
.copyRight {
  font-size: 12px;
  line-height: 32px;
  color: #9fa3a6;
}
.el-collapse-item__content > div > ul > li {
  padding: 10px 0;
}
.padding {
  padding: 0 20px 20px;
  background-color: #fff;
}
.reclassify > .padding a {
  position: relative;
  display: block;
  opacity: 1;
  line-height: 44px;
  color: #333;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  font-size: 14px;
}
.reclassify > .padding a::after {
  content: "";
  position: absolute;
  right: 0;
  top: 10px;
  width: 24px;
  height: 24px;
  background: url(https://asset2.djicdn.com/assets/images/header/arrow-36dad273465fa755b72c37465a836692.svg)
    50% no-repeat;
  transform: rotate(-90deg);
}
.reclassify .padding ul .el-collapse {
  padding: 0;
}
.padding .ify_title {
  padding: 20px 0 15px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: #333;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
.padding .product_img {
  width: 70px;
  height: 44px;
  float: left;
  vertical-align: middle;
  margin-left: 5px;
  margin-right: 5px;
}
.padding > .product_ify ul > li:last-child > a {
  border-bottom: 0px solid transparent;
}
.body .el-collapse {
  line-height: 44px;
  color: #333;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  font-size: 14px;
}
.nav_footer {
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}
.nav_footer .footer_title {
  padding: 10px 20px 10px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: #333;
  background-color: #fff;
}
.nav_footer .footer_ln {
  display: none;
  color: #707473;
  padding: 15px 0;
  text-align: center;
  background-color: #f7f8f9;
}
.nav_footer .footer_ln .tel {
  direction: ltr;
  display: block;
  margin: 10px 0;
}
.nav_footer .footer_ln > h3 {
  color: blue;
}
.help_list {
  display: table;
  width: 100%;
}
.help_list > li:first-child {
  margin-left: 11.5px;
}
.help_list > li:not(:first-child) {
  margin-left: 23px;
}
.help_list > li {
  display: inline-table;
  text-align: center;
  font-size: 12px;
  border: 1px solid #ccc;
  color: #333;
  padding: 5px 0;
  width: 25%;
}
.help_list > li > img {
  width: 40px;
}
.Uparea {
  background: #fff;
  margin-top: 10px;
  font-size: 12px;
  height: 54px;
}
.Uparea > a {
  display: block;
  color: #44a8f2;
  line-height: 54px;
  text-align: center;
}
/* 动画类名 */
</style>
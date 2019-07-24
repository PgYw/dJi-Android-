<template>
  <div class="IndexFooter">
    <el-collapse accordion>
      <el-collapse-item title="产品分类">
        <div>
          <ul>
            <li v-for="product_ify in products_ify" :key="product_ify.id">
              <a href>{{product_ify.product_ify}}</a>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item title="帮助与支持">
        <div>
          <ul>
            <li>
              <a href>支付方式</a>
            </li>
            <li>
              <a href>发货与物流</a>
            </li>
            <li>
              <a href>Dji币介绍</a>
            </li>
            <li>
              <a href>订单帮助</a>
            </li>
            <li>
              <a href>退换货条款</a>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item title="账号" name="3">
        <div>
          <ul>
            <li>
              <a href>我的账号</a>
            </li>
            <li>
              <a href>我的订单</a>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
    <footer class="index_footer">
      <div>
        <a href>Dji.com</a>
        <a href>隐私政策</a>
        <a href>使用条款</a>
      </div>
      <div class="lang">
        <a href>
          <div>
            <span>中国大陆(简体中文/¥ CNY)</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </a>
      </div>
      <div class="copyRight">版权所有© 2019 大疆创新保留所有权利</div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "IndexFooter",
  data() {
    return {
      products_ify:[],
    }
  },
  created() {
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
  },
};
</script>
<style lang="css">
* {
  padding: 0;
  margin: 0;
}
.el-collapse-item__header,
.el-collapse-item__wrap {
  background-color: transparent;
}
</style>
<style scoped lang="css">
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.body .el-collapse {
  line-height: 44px;
  color: #333;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  font-size: 14px;
}
.el-collapse {
  padding: 0 16px;
}
.el-collapse-item__content {
  padding: 0px;
}
.el-collapse-item__content > div > ul > li {
  padding: 10px 0;
}
.el-collapse-item__content > div > ul > li > a {
  font-size: 14px;
  color: #3b3e40;
  line-height: 30px;
}
.index_footer {
  padding: 8px 16px 16px 16px;
}
.copyRight {
  font-size: 12px;
  line-height: 32px;
  color: #9fa3a6;
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
</style>

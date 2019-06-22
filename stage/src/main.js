import Vue from 'vue'
import App from './App'
// import VConsole from 'vconsole/dist/vconsole.min.js'
// let vconsole=new VConsole();
import ElementUI from 'element-ui';
import {Swipe,SwipeItem,Spinner} from 'mint-ui';
import 'mint-ui/lib/style.css'
import '@/components/common/common.css'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'
import qs from	'qs'
import {getStorage,setStorage,isSelect,dtCart} from './components/common/getStorage'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
Vue.prototype.$axios=axios;
Vue.prototype.qs=qs;
Vue.prototype.getStorage=getStorage
Vue.prototype.setStorage=setStorage
Vue.prototype.isSelect=isSelect
Vue.prototype.dtCart=dtCart
Vue.use(ElementUI);
Vue.component(Spinner.name, Spinner);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 跳转其它组件或者页面时显示顶部
router.beforeEach((to,from,next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})

import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import {Swipe,SwipeItem} from 'mint-ui';
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
Vue.prototype.$axios=axios;
Vue.use(ElementUI);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

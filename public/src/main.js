import Vue from 'vue'
import ElementUI from 'element-ui';
import {Swipe,SwipeItem} from 'mint-ui';
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css';
import Index from './components/Index'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios=axios;
Vue.use(ElementUI);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>'
})

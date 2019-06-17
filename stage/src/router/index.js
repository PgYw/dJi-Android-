import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Login from '@/components/Login.vue'
import User from '@/components/User.vue'
import Reg from '@/components/Reg.vue'
import Detail from '@/components/Detail.vue'
import Test from '@/components/Test.vue'
import Cart from '@/components/Cart.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {path:'*',component:Index},
    {path:'/Index',component:Index},
    {path:'/User',component:User},
    {path:'/Login',component:Login},
    {path:'/Reg',component:Reg},
    {path:'/Detail',component:Detail},
    {path:'/Test',component:Test},
    {path:'/Cart',component:Cart}
  ]
})

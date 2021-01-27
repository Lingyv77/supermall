import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home');
const Cart = () => import('../views/cart/Cart');
const Category = () => import('../views/category/Category');
const Profile = () => import('../views/profile/Profile');
const Detail = () => import('../views/detail/Detail')

//安装插件
Vue.use(Router);

//创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

//配置路由关系
const router = new Router({
  routes,
  mode: 'history'
})

//导出router
export default router; 
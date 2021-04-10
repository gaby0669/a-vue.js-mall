import Vue from "vue"
import VueRouter from "vue-router"

//懒加载
const Home = () => import("views/home/Home")
const Category = () => import("views/category/Category")
const Profile = () => import("views/profile/Profile")
const ShopCart = () => import("views/shopcart/ShopCart")
const Detail = () => import("views/detail/Detail")
const Login = () => import('views/login/Login')
const Register = () => import('views/register/Register')


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    //重定向
    redirect: "/home"
  },
  {
    path: "/home",
    // 指定的组件
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path : '/shopcart',
    component : ShopCart
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/login',
    component : Login
  },
  {
    path : '/register',
    component: Register
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

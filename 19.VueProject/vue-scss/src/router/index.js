import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/Contact.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUp.vue'
import NotfoundView from '../views/NotFound.vue'
import Profile from '../views/Profile.vue'
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: "*",
    name: 'notfound',
    component: NotfoundView
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    // beforeEnter: (to, from, next) => {
    //   if(localStorage.getItem("vueAuth")== "true"){
    //     next()
    //   }else{
    //       next("/login")
    //   }
    // },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active",
})

router.beforeEach((to,from,next)=>{
  if(to.path == "/profile" || to.path == "/"){
    if(localStorage.getItem("vueAuth")== "true"){
          next()
        }else{
          next("/login")
    }
  }
  next()
  console.log("I am global")
})

export default router

import Vue from 'vue'
//import firebase from 'firebase'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Vendedores from '../views/Vendedores.vue'
import FichaVendedor from '../views/FichaVendedor.vue'
import Registro from '../views/Registro.vue'
import Dashboard from '../views/Dashboard.vue'


Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this,location).catch(err=>err)
// }

const routes = [

   {
    path: '*',
    name: 'home',
    props: true,
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },

    {
    path: '/login',
    name: 'Login', 
    component: Login
     
  },
     
        {
    path: '/dashboard',
    name: 'Dashboard', 
    component: Dashboard,
    //  meta: {
    //   requiresAuth:true
    //  },
     
  }, 


  {
    path: '/vendedores',
    name: 'Vendedores',
    component: Vendedores,
   
  },
  
  {
    path: '/vendedores/ficha',
    name: 'FichaVendedor',
    component: FichaVendedor,
  
  },
   {
      path: '/registro',
      name: 'Registro',
    component: Registro    
  },
   
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// router.beforeEach((to,from,next) => {
//   const authenticatedUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   if (requiresAuth && !authenticatedUser) next('/login')
//   else next()
// });


export default router

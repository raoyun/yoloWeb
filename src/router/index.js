import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
import Personal from '../components/Personal'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    }
  ],
  mode: "history"
})

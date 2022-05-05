import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/Layout/Home'
import WorkSpace from '../components/page/WorkSpace'
import Project from '../components/page/Project'

Vue.use(Router)

export default new Router({
  mode: "history",
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
      path: '/',
      redirect: '/workspace'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/workspace',
          component: WorkSpace,
          meta: {title: '工作台'}
        },
        {
          path: '/project',
          component: Project
        },
      ]
    }
  ]
})

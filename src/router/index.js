import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/Layout/Home'
import WorkSpace from '../components/page/WorkSpace'
import Project from '../components/page/Project'
import ApiCase from '../components/page/ApiCase'
import TestPlan from "../components/page/TestPlan";
import TestSetting from "../components/page/TestSetting";
import Report from "../components/page/Report";
import Debug from "../components/page/Debug";

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
      meta: { title: '自述文件' },
      children: [
        {
          path: '/workspace',
          component: WorkSpace,
          meta: {title: '工作台'}
        },
        {
          path: '/project',
          component: Project,
          meta: {title: '项目管理'}
        },
        {
          path: '/apiCase',
          component: ApiCase,
          meta: {title: '接口用例'}
        },
        {
          path: '/testPlan',
          component: TestPlan,
          meta: {title: '测试计划'}
        },
        {
          path: '/testSetting',
          component: TestSetting,
          meta: {title: '测试配置'}
        },
        {
          path: '/report',
          component: Report,
          meta: {title: '测试报告'}
        },
        {
          path: '/debug',
          component: Debug,
          meta: {title: '调试页面'}
        },
      ]
    }
  ]
})

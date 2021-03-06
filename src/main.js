// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  const role = localStorage.getItem('yoloUserName');
  if (role) {
    next()
  } else {
    if (to.path === '/login' || to.path === '/register'){
      next()
    }else {
      next('/login')
    }
  }

});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

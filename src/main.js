import Vue from 'vue'
import App from './app/App.vue'
import router from './router'
import store from './vuex'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#52d0e9',
    secondary: '#7f8ce9',
    accent: '#a088c3',
    error: '#f16f51',
    info: '#52d0e9',
    success: '#78e080',
    warning: '#f7cd4a'
  },
  iconfont: 'md'
}
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

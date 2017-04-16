import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'
import Vuetify from 'vuetify'

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)

Vue.use(Vuetify)
require('vuetify/dist/vuetify.min.css')

Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

require('./filter')
/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')

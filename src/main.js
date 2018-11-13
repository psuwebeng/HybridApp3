// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import firebase from 'firebase'
import { firebaseConfig } from './firebaseConfigFile'
import { store } from './store'

import HelloWorld from './components/HelloWorld'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AllCartoon from './components/AllCartoon'
import About from './components/About'

Vue.use(VueMaterial)

Vue.config.productionTip = false

Vue.use(VueRouter)

firebase.initializeApp(firebaseConfig)

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/signup', component: SignUp },
  { path: '/login', component: Login },
  { path: '/all_cartoon', component: AllCartoon },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  render: h => h(App),
  created () {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    })
  }
})

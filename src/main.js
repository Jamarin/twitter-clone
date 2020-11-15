import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import VueRouter from 'vue-router'
import {router} from '@/router'

import store from '@/store'

import Moment from 'moment'
Moment.locale('es')
Vue.prototype.$moment = Moment

Vue.use(Buefy)
Vue.use(VueRouter)
window.event = new Vue;
Vue.config.productionTip = false

// Socket.IO
// import VueSocketIO from 'vue-socket.io'
// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'http://127.0.0.1:3000',
// }))

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')

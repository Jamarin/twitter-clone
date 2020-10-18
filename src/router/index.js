import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";

import store from '@/store'

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: Home, meta: {requiresAuth: true, requiresAnon: false }},
        {path: '/login', component: Login, meta: {requiresAuth: false, requiresAnon: true }},
        {path: '/register', component: Register, meta: {requiresAuth: false, requiresAnon: true }},
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters["user/isAuth"]) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else if(to.matched.some(record => record.meta.requiresAnon)) {
        if(store.getters["user/isAuth"]) {
            next({
                path: '/',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export {router};
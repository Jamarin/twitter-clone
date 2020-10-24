import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";

import store from '@/store'
import Profile from "@/views/Profile";

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', name: 'home', component: Home, meta: {requiresAuth: true, requiresAnon: false }},
        {path: '/profile/:username', name: 'profile', component: Profile, meta: {requiresAuth: true, requiresAnon: false }},
        {path: '/login', name: 'login', component: Login, meta: {requiresAuth: false, requiresAnon: true }},
        {path: '/register', name: 'register', component: Register, meta: {requiresAuth: false, requiresAnon: true }},
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
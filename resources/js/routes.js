import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Home from './components/main-content/Home.vue'
import Dashboard from './components/main-content/Dashboard.vue'
import Produto from './components/main-content/Produto.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: Login
    },{
        path: '/register',
        component: Register
    },{
        path: '/home',
        component: Home,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                components: {
                    content: Dashboard
                }
            },
            {
                path: 'dashboard',
                components:{
                    content: Dashboard
                }
            },
            {
                path: 'produto',
                components: {
                    content: Produto
                }
            }
        ]
    },{
        path: '*',
        redirect: '/home'
    }]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/')
    } else {
        next()
    }
})

export default router

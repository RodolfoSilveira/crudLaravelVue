import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'http://localhost:8000/api',
        })
        const token = localStorage.getItem('token')
        if(token){
            Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }
})

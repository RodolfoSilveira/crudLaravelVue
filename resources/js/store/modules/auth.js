import api from 'axios'

export default {
    state: {
        status: '',
        token: localStorage.getItem('token') || ''
    },
    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, token){
            state.status = 'success'
            state.token = token
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
            state.token = ''
        },
    },
    actions: {
        login({commit}, payload){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                api.post('http://localhost:8000/api/login', payload)
                .then(resp => {
                    const token = resp.data.access_token
                    localStorage.setItem('token', token)
                    api.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    commit('auth_success', token, payload)
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
            })
        },
        register({commit}, payload){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                api.post('http://localhost:8000/api/register', payload)
                .then(resp => {
                    const token = resp.data.access_token
                    localStorage.setItem('token', token)
                    api.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    commit('auth_success', token)
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error', err)
                    localStorage.removeItem('token')
                    reject(err)
                })
            })
        },
        logout({commit}){
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete api.defaults.headers.common['Authorization']
                resolve()
            })
        },
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
}

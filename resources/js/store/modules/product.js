import api from 'axios'

export default {
    state: {
        product: [],
        status: ''
    },
    mutations: {
        product_request(state){
            state.status = 'loading'
        },
        product_success(state, product){
            state.status = 'success'
            state.product = product
        },
        product_error(state){
            state.status = 'error'
        }
    },
    actions:{
        product({commit}){
            return new Promise((resolve, reject) => {
                commit('product_request')
                api.get('http://localhost:8000/api/product')
                .then( resp => {
                    const product = resp.data
                    commit('product_success', product)
                    resolve(resp)
                })
                .catch(err => {
                    commit('product_error')
                    reject(err)
                })
            })
        }
    },
    getters: {
        getProduct: state => {
            return state.product
        }
    }
}

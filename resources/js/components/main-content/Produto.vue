<template>
    <div class="container">
        <b-table striped hover :items="products" :fields="fields"></b-table>
        <hr/>
        <FormProduct/>
    </div>
</template>

<script>
import FormProduct from '../form/FormProduct.vue'

export default {
    components: {FormProduct},
    data(){
        return{
            fields: [
                {key: 'id', label: 'Código'},
                {key: 'name', label:'Nome'},
                {key: 'description', label:'Descrição'},
                {key: 'value', label: 'Preço'}
            ]
        }
    },
    computed: {
        products(){
            return this.$store.getters.getProduct
        }
    },
    created(){
        this.$store.dispatch('product')
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>

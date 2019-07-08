<template>
    <div class="contanier">
        <b-button @click="logout">
            Sair
        </b-button>
    </div>
</template>

<script>
export default {
    methods: {
        logout(){
            this.$store.dispatch('logout')
            .then(() => {
                this.$router.push('/')
            })
        }
    }
}
</script>

<style>

</style>

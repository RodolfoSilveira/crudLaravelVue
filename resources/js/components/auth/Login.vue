<template>
    <div class="wrapper">
        <div class="container">
            <b-form @submit.prevent="login" class="form">
                <b-form-group>
                    <b-form-input
                        type="email"
                        required
                        placeholder="E-mail"
                        v-model="email"
                    ></b-form-input>
                </b-form-group>

                <b-form-group>
                    <b-form-input
                        type="password"
                        required
                        placeholder="Senha"
                        v-model="password"
                    ></b-form-input>
                </b-form-group>

                <div class="btn-action">
                    <b-button type="submit" variant="primary">
                        Entrar
                    </b-button>
                    <b-button variant="warning">
                        <router-link to="/register">Cadastre-se</router-link>
                    </b-button>
                </div>
            </b-form>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login(){
            let email = this.email
            let password = this.password
            this.$store.dispatch('login', {email, password})
            .then(() => this.$router.push('/home'))
            .catch(err => console.log(err))
        }
    }
}
</script>

<style>
    .wrapper {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(93, 65, 87), rgb(168, 202, 186)) repeat scroll 0% 0%;
    }

    .form {
        max-width: 30%;
        margin: auto;
    }

    .btn-action {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>

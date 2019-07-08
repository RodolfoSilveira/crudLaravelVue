<template>
    <div class="menu">
        <div class="container">
            <nav class="d-flex justify-content-center align-items-center flex-column mt-5">
                <ul>
                    <router-link
                    tag="li" to="home/dashboard">Home</router-link>
                    <router-link
                    tag="li" to="home/produto">Produtos</router-link>
                </ul>
            </nav>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>

    .menu ul{
        list-style: none;
    }

    .menu ul li {
        margin: 5px !important;
        padding: 10px !important;
        color: #FFF !important;
        font-weight: bold !important;
        font-size: 12px !important;
    }

</style>

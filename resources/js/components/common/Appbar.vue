<template>
    <div class="appbar">
        <div class="container justify-content-between d-flex align-items-center">
            <h1 class="titulo">web development</h1>
            <Logout/>
        </div>
    </div>
</template>

<script>
import Logout from '../auth/Logout'

export default {
    components: {Logout}
}
</script>

<style>
    .appbar .titulo {
        font-size: 2em;
        text-align: center;
        margin-top: 15px;
    }

</style>

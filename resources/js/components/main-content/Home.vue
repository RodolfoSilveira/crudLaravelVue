<template>
    <div class="app">
        <Appbar/>
        <Menu/>
        <Content/>
    </div>
</template>

<script>
import Appbar from '../common/Appbar.vue'
import Menu from '../common/Menu.vue'
import Content from '../common/Content'

export default {
    components: {Appbar, Menu, Content}
}
</script>

<style>
    .app {
        display: grid;
        height: 100vh;
        grid-template-areas: "appbar appbar" "menu content";
        grid-template-rows: 70px 1fr;
        grid-template-columns: 200px 1fr;
    }

    .appbar {
        grid-area: appbar;
        background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(189, 195, 199), rgb(44, 62, 80)) repeat scroll 0% 0%;
        box-shadow: 2px 2px 2px rgba(0,0,0,.5);
    }

    .menu {
        grid-area: menu;
        background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(189, 195, 199), rgb(44, 62, 80)) repeat scroll 0% 0%;
        box-shadow: 2px 2px 2px rgba(0,0,0,.5);
    }

    .content {
        grid-area: content;
        background-color: #e9eff4;
        padding: 20px;
    }
</style>

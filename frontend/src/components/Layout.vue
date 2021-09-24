<template>
    <sidebar
        :visible="sidebarVisible"
        @hide-sidebar="hideSidebar"
        @show-sidebar="showSidebar"
    ></sidebar>
    <header></header>
    <main>
        <slot name="main"></slot>
    </main>
    <footer>@Copyright {{ copyrightYear }}</footer>
</template>

<script>
import Sidebar from './Sidebar';
import { defineComponent } from 'vue';

export default defineComponent({
    emits: ['show-sidebar', 'hide-sidebar'],
    components: {
        Sidebar,
    },
    props: {
        sidebarVisible: {
            requeire: true,
            type: Boolean,
        },
    },
    methods: {
        hideSidebar() {
            this.$emit('hide-sidebar');
        },
        showSidebar() {
            this.$emit('show-sidebar');
        },
    },
});
</script>

<style lang="scss" scoped>
header {
    height: 50px;
    box-shadow: 1px 0px 1px 1px #000;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
}
main {
    min-height: 100vh;
}
footer {
    text-align: center;
}
</style>

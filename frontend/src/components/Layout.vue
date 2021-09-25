<template>
    <sidebar
        :visible="sidebarVisible"
        @hide-sidebar="hideSidebar"
        @show-sidebar="showSidebar"
    ></sidebar>
    <Header @menu-click="menuClick" />
    <main>
        <slot name="main"></slot>
    </main>
    <footer>@Copyright {{ copyrightYear }}</footer>
</template>

<script>
import Header from './Header';
import Sidebar from './Sidebar';
import { defineComponent } from 'vue';

export default defineComponent({
    emits: ['show-sidebar', 'hide-sidebar'],
    components: {
        Header,
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
        menuClick() {
            this.$emit('menu-click');
        },
    },
});
</script>

<style lang="scss" scoped>
main {
    min-height: 100vh;
}
footer {
    text-align: center;
}
</style>

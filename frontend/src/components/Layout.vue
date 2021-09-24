<template>
    <header>
        <slot name="header"> </slot>
    </header>
    <main>
        <slot name="main"></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
    <sidebar
        :visible="sidebarVisible"
        @hide-sidebar="hideSidebar"
        @show-sidebar="showSidebar"
    ></sidebar>
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

<template>
    <layout
        :sidebarVisible="isSidebarVisible"
        @show-sidebar="showSidebar"
        @hide-sidebar="hideSidebar"
        @menu-click="menuClick"
    >
        <template v-slot:main>
            <router-view />
        </template>
    </layout>
</template>

<script>
import { defineComponent } from 'vue';
import Layout from '@/components/Layout';
export default defineComponent({
    components: {
        Layout,
    },
    data() {
        return {
            sidebarVisible: false,
        };
    },
    computed: {
        isSidebarVisible() {
            return this.sidebarVisible;
        },
    },
    methods: {
        hideSidebar() {
            this.sidebarVisible = false;
        },
        showSidebar() {
            this.sidebarVisible = true;
        },
        menuClick() {
            this.showSidebar();
        },
    },
});
</script>

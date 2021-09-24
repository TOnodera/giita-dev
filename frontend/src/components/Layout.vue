<template>
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot name="main"></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
    <sidebar v-model:visible="visibleSidebar"> Sidebar </sidebar>
</template>

<script>
import Sidebar from 'primevue/sidebar';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Sidebar,
    },
    data() {
        return {
            visibleSidebar: true,
        };
    },
});
</script>

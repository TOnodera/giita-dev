<template>
    <div>
        <sidebar :visible="visible" @update:visible="hide">
            <tree :value="sidebarConfig" selectionMode="single"></tree>
        </sidebar>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Sidebar from 'primevue/sidebar';
import Tree from 'primevue/tree';
import sidebarConfig from '@/config/sidebarConfig';

export default defineComponent({
    emits: ['show-sidebar', 'hide-sidebar'],
    components: {
        Sidebar,
        Tree,
    },
    props: {
        visible: {
            requeire: true,
            type: Boolean,
        },
    },
    data() {
        return {
            sidebarConfig: sidebarConfig.root,
        };
    },
    methods: {
        hide() {
            this.$emit('hide-sidebar');
        },
        show() {
            this.$emit('show-sidebar');
        },
    },
    computed: {
        isVisible() {
            return this.visible;
        },
    },
});
</script>

<style lang="scss" scoped>
Button {
    position: absolute;
    top: 5px;
    left: 5px;
}
</style>

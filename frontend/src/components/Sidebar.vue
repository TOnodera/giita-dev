<template>
    <div>
        <sidebar :visible="visible" @update:visible="hide">
            <tree :value="sidebarConfig" selectionMode="single"></tree>
        </sidebar>
        <Button
            icon="pi pi-bars"
            :class="{ 'display-none': isVisible }"
            class="p-button-rounded"
            @click="show"
        />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Sidebar from 'primevue/sidebar';
import Tree from 'primevue/tree';
import sidebarConfig from '@/config/sidebarConfig';
import Button from 'primevue/button';

export default defineComponent({
    emits: ['show-sidebar', 'hide-sidebar'],
    components: {
        Sidebar,
        Tree,
        Button,
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
    margin: 5px;
}
</style>

<template>
    <header>
        <Button
            icon="pi pi-bars"
            :class="{ 'display-none': isVisible }"
            class="p-button-rounded menu-button"
            @click="menuClick"
        />
    </header>
</template>

<script>
import { defineComponent } from 'vue';
import Button from 'primevue/button';

export default defineComponent({
    emits: ['menu-click'],
    components: {
        Button,
    },
    props: {
        visible: {
            requeire: true,
            type: Boolean,
        },
    },
    methods: {
        menuClick() {
            this.$emit('menu-click');
        },
    },
});
</script>

<style lang="scss" scoped>
$height: 50px;
$background_color: #fff;
header {
    height: $height;
    box-shadow: 1px 0px 1px 1px #000;
    position: absolute;
    top: 0;
    width: 100%;
    background-color: $background_color;
    .menu-button {
        margin-top: $height / 10;
        margin-left: $height / 10;
    }
}
</style>

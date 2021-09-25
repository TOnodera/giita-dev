<template><</template>

<script>
import { defineComponent } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
export default defineComponent({});
</script>

<style lang="scss" scoped>
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: calc(100vh - 50px);
    margin: 0 auto;
    .child {
        padding: 10px;
        text-align: center;
        .image-icon-wrapper {
            margin-top: 5px;
            i {
                font-size: 100px;
            }
        }
    }
}
.register-button {
    margin-top: 5px;
    width: 260px;
}
.card {
    min-width: 300px;
}
.card-height {
    height: 300px;
}
</style>

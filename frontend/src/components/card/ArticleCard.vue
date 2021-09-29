<template>
    <card>
        <template #header>
            <img class="article-image" :src="data.image" />
        </template>
        <template #title> {{ data.title }} </template>
        <template #content>{{ data.describe }}</template>
    </card>
</template>

<script>
import { defineComponent } from 'vue';
import Card from 'primevue/card';
export default defineComponent({
    components: {
        Card,
    },
    props: {
        data: {
            type: Object,
        },
    },
});
</script>

<style lang="scss">
.article-image {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
}
</style>

<template>
    <div class="p-mb-2 p-mt-2 article-card-wrapper">
        <h2 class="p-text-bold p-mb-2">{{ rssName }}</h2>
        <card
            class="p-mb-1 p-mt-1"
            v-for="(article, index) in articles"
            :key="index"
            @click="openPage(article.link)"
        >
            <template #subtitle>{{ article.title }}</template>
            <template #content>{{ article.description }}</template>
        </card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from 'primevue/card';
export default defineComponent({
    components: {
        Card,
    },
    props: {
        articles: {
            type: Array,
        },
        rssName: {
            type: String,
        },
    },
    methods: {
        openPage(url: string) {
            window.open(url, '_blank');
        },
    },
});
</script>

<style lang="scss">
.article-card-wrapper {
    cursor: pointer;
}
</style>

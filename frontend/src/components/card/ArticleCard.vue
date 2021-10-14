<template>
    <div class="p-mb-2 p-mt-2">
        <h2 class="p-text-bold p-mb-2">{{ rssName }}</h2>
        <card
            class="p-mb-1 p-mt-1"
            v-for="(article, index) in articles"
            :key="index"
        >
            <template #subtitle>{{ article.title }}</template>
            <template #content>{{ article.content }}</template>
        </card>
    </div>
</template>

<script>
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
});
</script>

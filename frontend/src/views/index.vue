<template>
    <div>
        <article-card
            v-for="(rss, index) in rsses"
            :key="index"
            :rssName="rss.rssName"
            :articles="rss.articles"
        ></article-card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from 'primevue/card';
import ArticleCard from '@/components/card/ArticleCard';
import axios, { AxiosAdapter } from 'axios';

//import Main from '@/domain/Main';
export default defineComponent({
    components: {
        ArticleCard,
    },
    data() {
        return {
            rsses: [],
        };
    },
    async mounted() {
        const response = await axios.get('http://localhost:8888/api/codezine');
        this.rsses.push({
            rssName: 'コードジーン',
            articles: response.data,
        });
        console.log(this.rsses);
    },
});
</script>

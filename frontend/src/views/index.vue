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

<script>
import { defineComponent } from 'vue';
import Card from 'primevue/card';
import ArticleCard from '@/components/card/ArticleCard';
//import Main from '@/domain/Main';
export default defineComponent({
    components: {
        ArticleCard,
    },
    data() {
        return {
            rsses: [
                {
                    rssName: 'codezine',
                    articles: [
                        {
                            title: 'タイトル1',
                            content: '内容1',
                        },
                        {
                            title: 'タイトル2',
                            content: '内容2',
                        },
                        {
                            title: 'タイトル3',
                            content: '内容3',
                        },
                    ],
                },
            ],
        };
    },
});
</script>

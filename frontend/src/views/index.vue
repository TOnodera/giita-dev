<template>
    <div class="p-grid">
        <div class="p-col-6 p-md-3" v-for="i in new Array(10)" v-bind:key="i">
            <article-card v-bind:data="testData" />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import ArticleCard from '@/components/card/ArticleCard';
export default defineComponent({
    components: {
        ArticleCard,
    },
    data() {
        return {
            testData: {
                title: '霧島さくら最高！！',
                headerImage:
                    'https://stat.ameba.jp/user_images/20200525/01/masatogame/2a/18/j/o0360064014763826839.jpg?caw=800',
                contentText: '？？？？',
            },
        };
    },
});
</script>

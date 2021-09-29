<template>
    <div class="p-grid">
        <div class="p-col-6 p-md-3" v-for="(v, i) in datas" v-bind:key="i">
            <article-card v-bind:data="v" />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import ArticleCard from '@/components/card/ArticleCard';
import Main from '@/domain/Main';
export default defineComponent({
    components: {
        ArticleCard,
    },
    data() {
        return {
            datas: [],
        };
    },
    mounted() {
        const main = new Main();
        this.datas = main.all();
    },
});
</script>

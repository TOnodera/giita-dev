<template>
    <div class="p-grid">
        <div class="p-col-12 p-md-6"><article-card /></div>
        <div class="p-col-12 p-md-6"><article-card /></div>
        <div class="p-col-12 p-md-6"><article-card /></div>
        <div class="p-col-12 p-md-6"><article-card /></div>
        <div class="p-col-12 p-md-6"><article-card /></div>
        <div class="p-col-12 p-md-6"><article-card /></div>
        <div class="p-col-12 p-md-6"><article-card /></div>
        <div class="p-col-12 p-md-6"><article-card /></div>
        <div class="p-col-12 p-md-6"><article-card /></div>
        <div class="p-col-12 p-md-6"><article-card /></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import ArticleCard from '@/components/card/ArticleCard';
export default defineComponent({
    components: {
        ArticleCard,
    },
});
</script>

<template>
    <div class="p-grid">
        <div v-for="(rss, index) in rsses" :key="index" class="p-lg-6 p-md-12">
            <h2 class="p-text-bold p-mb-2 rss-name">{{ rss.rssName }}</h2>
            <scroll-panel class="custombar">
                <article-card :articles="rss.articles"></article-card>
            </scroll-panel>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticleCard from '@/components/card/ArticleCard.vue';
import ApiClient from '@/domain/ApiClient';
import ScrollPanel from 'primevue/scrollpanel';

export default defineComponent({
    components: {
        ArticleCard,
        ScrollPanel,
    },
    data() {
        return {
            rsses: [] as any[],
        };
    },
    async mounted() {
        const api = new ApiClient();
        this.rsses = await api.get();
    },
});
</script>

<style lang="scss">
.rss-name {
    border-bottom: 1px solid #aaa;
    padding: 10px;
}

.custombar {
    height: 500px;
    .p-scrollpanel-wrapper {
        border-right: 9px solid var(--surface-b);
    }

    .p-scrollpanel-bar {
        background-color: var(--primary-color) !important;
        opacity: 1;
        transition: background-color 0.2s;

        &:hover {
            background-color: #007ad9;
        }
    }
}
</style>

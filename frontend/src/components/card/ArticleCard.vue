<template>
    <card>
        <template #header>
            <img
                class="article-image"
                src="https://www.shosen.co.jp/wp-content/uploads/2019/05/t9_190525kirishima_sakura02-830x623.jpg"
            />
        </template>
        <template #title> Advanced Card </template>
        <template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
        </template>
        <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button
                icon="pi pi-times"
                label="Cancel"
                class="p-button-secondary"
                style="margin-left: 0.5em"
            />
        </template>
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
        imgPath: String,
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

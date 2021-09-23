<template>
    <layout>
        <template v-slot:header></template>
        <template v-slot:footer></template>
    </layout>
</template>

<script>
import { defineComponent } from 'vue';
import Layout from '@/components/Layout';
export default defineComponent({
    components: {
        Layout,
    },
});
</script>

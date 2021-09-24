import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Primevue from 'primevue/config';
import 'primevue/resources/themes/nova/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@/assets/common.scss';

createApp(App).use(router).use(Primevue).mount('#app');

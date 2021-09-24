import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Primevue from 'primevue/config';

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

createApp(App).use(router).use(Primevue).mount('#app');

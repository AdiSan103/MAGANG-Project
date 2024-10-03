import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/css/tailwind.css'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark'
        }
    }
});
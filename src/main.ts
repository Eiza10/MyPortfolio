import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './store/i18n'

// Import unified styles
import './assets/styles/unified.scss'
// Import the theme store to initialize it
import './store/theme'

// Initialize language
document.documentElement.setAttribute('lang', i18n.currentLanguage())

// Create Vue app
const app = createApp(App)

app.config.globalProperties.$i18n = i18n

// Use router
app.use(router)

// Mount the app
app.mount('#app')

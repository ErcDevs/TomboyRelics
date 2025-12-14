import { createApp } from 'vue'
import './index.css'  // Tailwind
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { clerkPlugin } from '@clerk/vue'  // ADDED

const app = createApp(App)

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing VITE_CLERK_PUBLISHABLE_KEY – add to .env')
}

// ADDED: Register Clerk globally
app.use(clerkPlugin, { publishableKey: PUBLISHABLE_KEY })

app.use(createPinia())
app.use(router)
app.mount('#app')
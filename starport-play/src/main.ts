import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import StarportPlugin from 'vue-starport'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(StarportPlugin())

// console.log(app.component('KoKomi', KokomiStateVue))
// console.log(app.component('KoKomi'))
// app.config.performance = true
// console.log(app.config)

app.mount('#app')

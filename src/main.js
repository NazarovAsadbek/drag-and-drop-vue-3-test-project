import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.scss'
import globalMixins from  './mixins/global'

const app = createApp(App)
app.mixin(globalMixins)
app.use(router)

app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 单个引入 和 全部引入
// import KotButton from "@kot/components/Button"
// import KotCard from "@kot/components/Card"
import Kot from '@kot/components'


import "@kot/theme-chalk/src/index.scss"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Kot)
// app.use(KotButton)
// app.use(KotCard)

app.mount('#app')

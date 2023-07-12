// import './assets/main.scss'
// import './assets/style.scss'

import './sass/all.sass'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueClickAway from "vue3-click-away"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'



import App from './App.vue'
import router from './router'

library.add(faUserSecret)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(VueClickAway)

app.mount('#app')

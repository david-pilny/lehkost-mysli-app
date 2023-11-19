import { createApp } from 'vue'
import { VueFire } from 'vuefire'
import { firebaseApp } from './firebase.ts'

import './style.css'
import App from './App.vue'

createApp(App)
  .use(VueFire, {
    firebaseApp,
    modules: [],
  })
  .mount('#app')

import { createApp } from 'vue'
import { VueFire } from 'vuefire'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { firebaseApp } from './firebase.ts'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
})

// import './style.css'
import App from './App.vue'

createApp(App)
  .use(VueFire, {
    firebaseApp,
    modules: [],
  })
  .use(router)
  .use(vuetify)
  .mount('#app')

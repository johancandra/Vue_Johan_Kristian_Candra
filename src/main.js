import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

createApp(App).use(store).use(router).mount('#app')

export default store
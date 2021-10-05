import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './public.css'

axios.defaults.baseURL = 'http://127.0.0.1:8081/zhiye/api/'
const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  return config
})

axios.interceptors.response.use(config => {
  store.commit('setLoading', false)
  return config
})

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')

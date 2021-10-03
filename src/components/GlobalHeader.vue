<template>
<nav class="navbar navbar-light bg-light px-5">
  <router-link class="navbar-brand" to="/index">呆毛专栏</router-link>
  <ul class="navbar-nav flex-row" v-if="!user.isLogin">
    <li class="nav-item mx-1">
      <button class="btn btn-primary" type="submit" @click="toLoginPage">登录</button>
    </li>
    <li class="nav-item mx-1">
      <button class="btn btn-secondary" type="submit" @click="toRegisterPage">注册</button>
    </li>
  </ul>
  <ul class="navbar-nav flex-row" v-else>
    <li class="nav-item mx-1">
      <dropdown :title="`你好 ${user.username}`" >
        <dropdown-item>
          <router-link to="/post/create">编辑文章</router-link>
        </dropdown-item>
        <dropdown-item><router-link to="#">编辑资料</router-link></dropdown-item>
        <dropdown-item><div @click="handleLogout">退出登陆</div></dropdown-item>
      </dropdown>
    </li>
  </ul>
</nav>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { userProp } from '@/store/type'
import useCreateToast from '@/hooks/useCreateToast'

export default defineComponent({
  components: { Dropdown, DropdownItem },
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<userProp>,
      required: true
    }
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const toLoginPage = () => {
      router.push('/login')
    }
    const toRegisterPage = () => {
      router.push('/register')
    }
    const handleLogout = () => {
      store.commit('logout')
      useCreateToast('成功退出登录！', 'success')
    }
    return {
      toLoginPage,
      toRegisterPage,
      handleLogout
    }
  }
})
</script>

<style scoped>

</style>

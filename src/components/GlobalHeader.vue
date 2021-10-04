<template>
<header>
  <nav class="navbar">
    <div class="column-center">
      <div class="text-logo">之也</div>
      <ul class="nav column-center">
        <li class="c-item nav-active">
          <router-link to="/index">首页</router-link>
        </li>
        <li class="c-item column-center">
          <dropdown title="专栏" tag="div">
            <dropdown-item>
              <router-link class="dropdown-item" to="/post/create">创建专栏</router-link>
            </dropdown-item>
            <dropdown-item>
              <router-link class="dropdown-item" to="/post/create">新建文章</router-link>
            </dropdown-item>
            <dropdown-item>
              <a class="dropdown-item" href="#">编辑文章</a>
            </dropdown-item>
          </dropdown>
        </li>
        <li class="c-item">发现</li>
      </ul>
    </div>
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
            <div @click="handleLogout">退出登陆</div>
          </dropdown-item>
        </dropdown>
      </li>
    </ul>
  </nav>
</header>
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
      useCreateToast('成功退出登录！', 'success', 1000)
      router.replace('/index')
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
.navbar {
  width: 75em;
  margin: 0 auto;
  padding: 0;
}
.nav a{
  color: #212529;
  text-decoration: none;
}
.column-center > .c-item {
  padding: 0.8em 0;
  margin: 0 1.25em;
}
.column-center > .active {
  font-size: 16px;
  font-weight: 600;
}
.nav-active {
  font-size: 16px;
  font-weight: 600;
  border-bottom: 2px solid #007bff;
}
</style>

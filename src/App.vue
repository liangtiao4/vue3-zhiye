<template>
  <loader v-if="isLoading" />
  <global-header :user='user' v-if="!hidden" />
  <router-view />
  <global-footer v-if="!hidden" />
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref, onMounted } from 'vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import Loader from '@/components/Loader.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { GlobalState } from '@/store'

export default defineComponent({
  components: { GlobalHeader, Loader, GlobalFooter },
  name: 'App',
  setup () {
    const route = useRoute()
    const hidden = ref(false)
    watch(route, () => {
      // 判断是否隐藏头部和底部
      hidden.value = route.meta.hiddenGlobalHeaderAndFooter as boolean
    })
    const store = useStore<GlobalState>()
    const user = computed(() => store.state.userinfo)
    const isLoading = computed(() => store.state.isLoading)
    onMounted(() => {
      const token = localStorage.getItem('token')
      const isLogin = store.state.userinfo.isLogin
      if (token && !isLogin) {
        store.dispatch('asyncGetUser')
      }
    })
    return {
      user,
      hidden,
      isLoading
    }
  }
})
</script>

<style>

</style>

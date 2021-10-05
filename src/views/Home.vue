<template>
<div id="home">
  <home-item title="专题" icon="zhuanti">
    <topic-list />
  </home-item>
  <home-item title="专栏" icon="zhuanlan">
    <column-list :list='columnlist' />
  </home-item>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import HomeItem from '@/components/HomeItem.vue'
import TopicList from '@/components/TopicList.vue'
import ColumnList from '@/components/ColumnList.vue'
import { useStore } from 'vuex'
import { GlobalState } from '@/store'

export default defineComponent({
  components: { HomeItem, TopicList, ColumnList },
  name: 'Home',
  setup () {
    const store = useStore<GlobalState>()
    onMounted(() => {
      store.dispatch('asyncGetColumn')
    })
    const columnlist = computed(() => store.state.columnList)
    return {
      columnlist
    }
  }
})
</script>

<style>
#home {
  margin-top: 80px;
}
</style>

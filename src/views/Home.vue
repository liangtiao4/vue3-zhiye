<template>
  <div id="home">
    <column-list :list='columnlist' />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import ColumnList from '@/components/ColumnList.vue'
import { useStore } from 'vuex'
import { GlobalState } from '@/store'

export default defineComponent({
  components: { ColumnList },
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

</style>

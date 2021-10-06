<template>
<div id="column-detail">
  <div class="cd-title">
    <div class="cd-title-img">
      <img :src="columnItem.imgUrl" alt="这是图片">
    </div>
    <div class="cd-title-content">
      <h3>{{columnItem.title}}</h3>
      <p>{{columnItem.des}}</p>
    </div>
  </div>
  <div>
    <post-list :list='postList' />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import PostList from '@/components/PostList.vue'

export default defineComponent({
  name: 'ColumnDetail',
  components: { PostList },
  setup () {
    const route = useRoute()
    const store = useStore()
    const columnId = route.params.columnId
    onMounted(() => {
      store.dispatch('asyncGetColumnItem', columnId)
      store.dispatch('asyncGetPost', columnId)
    })
    const columnItem = computed(() => store.state.columnItem)
    const postList = computed(() => store.getters.getPostsByColumnid(columnId))
    return {
      route,
      columnItem,
      postList
    }
  }
})
</script>

<style scoped>
#column-detail {
  width: 70em;
  margin: 0 auto;
  padding-top: 80px;
}
.cd-title {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ccc;
}
.cd-title-img > img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-right: 20px;
  margin-bottom: 10px;
}
</style>

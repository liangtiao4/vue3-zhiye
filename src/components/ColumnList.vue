<template>
<ul class="row py-3">
  <li
    v-for="column in list"
    :key="column._id"
    class="mb-3 col-3"
  >
    <div class="column-card card">
      <div class="card-body">
        <img :src="column.imgUrl" :alt="column.title" class="column-img">
        <h5 class="card-title mt-2">{{column.title}}</h5>
        <p class="card-text des-text-2">{{column.des}}</p>
        <router-link
          :to="`/column/detail/${column._id}`"
          class="btn btn-outline-primary btn-sm mt-3"
        >进入专栏</router-link>
      </div>
    </div>
  </li>
</ul>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import { columnItem } from '@/store/type'

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<columnItem[]>,
      required: true
    }
  },
  setup () {
    const toColumnDetail = (id: number) => {
      console.log(id)
    }
    return {
      toColumnDetail
    }
  }
})
</script>

<style>
.column-card {
  max-width: 16em;
  min-height: 20em;
  text-align: center;
  margin: auto;
}
.column-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  user-select: none;
  -webkit-user-drag: none;
}
</style>

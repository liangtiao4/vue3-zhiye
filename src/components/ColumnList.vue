<template>
<ul class="row py-3">
  <li
    v-for="column in list"
    :key="column._id"
    class="col-4 mb-3"
  >
    <div class="card text-center m-auto" style="width: 20rem; height: 22rem">
      <div class="card-body">
        <img :src="column.imgUrl" :alt="column.title" class="pictrue">
        <h5 class="card-title">{{column.title}}</h5>
        <p class="card-text des-text-2">{{column.des}}</p>
        <router-link
          :to="`/column/detail/${column._id}`"
          class="btn btn-outline-primary btn-sm"
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
.pictrue {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  user-select: none;
  -webkit-user-drag: none;
}
</style>

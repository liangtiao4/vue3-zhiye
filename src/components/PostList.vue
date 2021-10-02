<template>
<div id="post-list" class="mt-3">
  <div class="card mb-3" v-for="l in list" :key='l.id'>
    <div class="d-flex no-gutters">
      <div class="mr-2" v-if="l.imgUrl" style="height: 16rem">
        <img :src="l.imgUrl" alt="">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{l.title}}</h5>
        <p class="card-text">{{l.content}}</p>
        <p class="card-text"><small class="text-muted">{{l.createTime}}</small></p>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { postItem } from '@/store/type'

export default defineComponent({
  name: 'PostList',
  props: {
    list: {
      type: Array as PropType<postItem[]>,
      required: true
    }
  }
})
</script>

<style>
.mr-2 > img {
  width: auto;
  height: 100%;
}
</style>

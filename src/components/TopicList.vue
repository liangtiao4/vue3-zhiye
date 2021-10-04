<template>
<ul class="topic">
  <li v-for="(item, i) in 3" :key="i">
    <div class="card mb-3">
      <img src="@/assets/imgs/2.jpg" class="card-img-top">
      <div class="card-body between-center">
        <div>
          <h5 class="text-h5">前端辣么多要学的</h5>
          <p class="text-grey">
            1小时前更新 · 10086人浏览
          </p>
        </div>
        <div class="btn btn-primary">关注专题</div>
      </div>
      <ul class="card-items">
        <li class="column-center mt-2" v-for="(item, i) in 3" :key="i">
          <label class="label label-grey">前端前端</label>
          <div class="ml-2">为什么前端精通Node.js的人这么少？</div>
        </li>
      </ul>
    </div>
  </li>
</ul>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>

<style>
.topic {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.topic > li {
  width: 33em;
}
.card-items {
  margin: 1.25em;
  margin-top: 0;
  padding-top: 1.25em;
  border-top: 1px solid #d3d3d3;
}
</style>

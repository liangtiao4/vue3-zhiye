<template>
<div class="item">
  <div class="item-title">
    <span :class="'iconfont icon icon-' + icon"></span>
    <p>
      <span v-if="icon === 'zhuanti'">最新</span>
      <span>{{title}}</span>
    </p>
  </div>
  <slot></slot>
  <div class="text-center my-3">
    <div class="more-btn">
      <div>查看更多{{title}}</div>
      <div class="iconfont icon-jiantouyou fs-12 ml-1"></div>
    </div>
  </div>

</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeItem',
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true }
  }
})
</script>

<style scoped>
.item{
  padding-left: 1em;
  padding-right: 1em;
}
.item-title {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: .5em;
  padding-left: .2em;
}
.item-title > .icon {
  font-size: 24px;
  color: #1E90FF;
  margin-right: 10px;
}
.more-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6em 1.2em;
  font-size: 16px;
  background: #fff;
  border-radius: 2em;
  cursor: pointer;
}
.more-btn:hover {
  color: #fff;
  background: #1E90FF;
}
</style>

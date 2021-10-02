<template>
<div class="toast" v-if="toasting">
  <div class="toast-header">
    <div class="square-color" :class="status"></div>
    <strong class="mr-3">呆毛提醒您</strong>
    <small>刚刚</small>
    <button class="ml-2 mb-1 close" @click="closeToast">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body">{{message}}</div>
</div>
</template>

<script lang='ts'>
import { defineComponent, ref, PropType } from 'vue'

type status = 'default' | 'success' | 'fail'

export default defineComponent({
  name: 'Toast',
  props: {
    message: {
      type: String,
      requried: true
    },
    status: {
      type: String as PropType<status>,
      default: 'default'
    }
  },
  setup () {
    const toasting = ref(true)
    const closeToast = () => {
      toasting.value = false
    }
    return {
      toasting,
      closeToast
    }
  }
})
</script>

<style scoped>
.toast {
  position: absolute;
  left: 50%;
  top: 10%;
  width: 300px;
  transform: translateX(-50%);
  z-index: 19;
  opacity: 1;
}
.toast>small{
  flex-basis: flex-end;
}
.square-color{
  width: 12px;
  height: 12px;
  margin-right: 5px;
}
.success{
  background: #28a745;
}
.fail{
  background: #dc3545;
}
.default{
  background: #6c757d;
}
</style>

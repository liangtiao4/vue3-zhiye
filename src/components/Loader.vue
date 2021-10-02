<template>
<Teleport to='#load'>
  <div class="loader">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</Teleport>
</template>

<script>
import { defineComponent, onUnmounted } from 'vue'
export default defineComponent({
  name: 'Loader',
  setup () {
    const node = document.createElement('div')
    node.id = 'load'
    document.body.appendChild(node)
    onUnmounted(() => {
      document.body.removeChild(node)
    })
  }
})
</script>

<style scoped>
.loader{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(1, 1, 1, .2);
  z-index: 99;
}
</style>

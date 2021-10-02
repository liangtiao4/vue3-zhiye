<template class="was-validated">
<form>
  <!-- 输入框插槽 -->
  <slot name="default"></slot>
  <!-- 表单插槽 -->
  <div class="submit-wrap"  @click.prevent="submitfrom">
    <slot name='submit'>
      <button class="btn btn-primary">
        按钮
      </button>
    </slot>
  </div>
</form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
type validateFuc = () => boolean
type Events = {
  validate: validateFuc
}
export const emitter = mitt<Events>()
export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, context) {
    let resultArr: validateFuc[] = []
    const submitfrom = (ev: PointerEvent) => {
      const target = ev.target as HTMLElement
      if (target.nodeName === 'BUTTON') {
        // 批量执行validateInput(),然后...
        const lastResult = resultArr.map(vFunc => vFunc()).every(item => item)
        context.emit('form-submit', lastResult)
      }
    }
    const callback = (test: validateFuc) => {
      resultArr.push(test)
    }
    emitter.on('validate', callback)
    onUnmounted(() => {
      emitter.off('validate', callback)
      resultArr = []
    })
    return {
      submitfrom
    }
  }
})
</script>

<style>

</style>

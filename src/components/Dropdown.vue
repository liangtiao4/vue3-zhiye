<template>
<div class="btn-group" ref="dropdowmRef">
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle"
    data-toggle="dropdown"
    aria-expanded="false"
    @click="toggleDropdown"
  >
    {{title}}
  </button>
  <ul class="dropdown-menu dropdown-menu-right" v-show="isOpen">
    <slot />
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'
export default defineComponent({
  name: 'dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    // 点击按钮切换dropdown
    const toggleDropdown = () => {
      isOpen.value = !isOpen.value
    }
    // 下拉框的element
    const dropdowmRef = ref(null)
    const isClickOutside = useClickOutside(dropdowmRef)
    watch(isClickOutside, () => {
      if (isClickOutside.value && isOpen.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggleDropdown,
      dropdowmRef
    }
  }
})
</script>

<style scoped>
.dropdown-menu{
  display: block;
  position: absolute !important;
}
</style>

<template>
<div class="btn-group" ref="dropdowmRef">
  <button
    type="button"
    class="btn btn-secondary dropdown-toggle"
    @click="toggleDropdown"
    v-if="tag === 'button'"
  >
    {{title}}
  </button>
  <div
    class="dropdown-toggle"
    @click="toggleDropdown"
    v-else
  >
    {{title}}
  </div>
  <ul class="dropdown-menu dropdown-menu-middle" v-show="isOpen">
    <slot />
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'
type TagType = 'button' | 'div'
export default defineComponent({
  name: 'dropdown',
  props: {
    title: {
      type: String,
      required: true
    },
    tag: {
      type: String as PropType<TagType>,
      default: 'button'
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
.dropdown-menu-middle {
  right: 50%;
  left: auto;
  transform: translateX(50%);
  text-align: center;
}
</style>

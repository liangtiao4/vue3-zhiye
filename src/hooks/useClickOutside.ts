import { ref, onMounted, onUnmounted, Ref } from 'vue'

const userClickOutside = (elRef : Ref<HTMLElement | null>): Ref<boolean> => {
  const isClickOutside = ref(false)
  const handler = (e: MouseEvent) => {
    const tag = e.target as HTMLElement
    if (elRef.value) {
      // 如果点击的是当前组件区域外且dropdowm打开
      // 并且点击的不是超链接
      if (elRef.value.contains(tag) && tag.nodeName !== 'A') {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutside
}
export default userClickOutside

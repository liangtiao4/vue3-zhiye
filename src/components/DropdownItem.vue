<template>
<li class="dropdown-item">
  <slot />
</li>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropdownItem'
})
</script>

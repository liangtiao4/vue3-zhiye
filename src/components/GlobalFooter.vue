<template>
<footer>
  <ul class="footer">
    <li class="footer-item">两条4</li>
    <li class="footer-item">
      <a href="#">github</a>
    </li>
    <li class="footer-item">Vue3</li>
    <li class="footer-item">TypeScript</li>
  </ul>
</footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GolbalFooter'
})
</script>

<style>
.footer {
  display: flex;
  align-items: center;
  margin: 2em auto;
}
.footer-item:not(:last-child)::after {
  content: '·';
  padding: 0 .4em;
}
</style>

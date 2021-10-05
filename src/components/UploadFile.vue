<template>
<div class="upload mb-3">
  <div class="uploadHome">
    点击上传图片
  </div>
  <input type="file" class="uploadInput" ref="uploadInput">
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UploadFile'
})
</script>

<style>
.uploadHome {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: #fff;
  background-color: #999;
}
.uploadInput {
  display: none;
}
</style>

<template>
<validate-form @form-submit="onSubmitClick">
  <validate-input
    type="text"
    title="标题"
    :rules="titleRules"
    v-model="titleVal"
  />
  <validate-input
    type="text"
    tag="textarea"
    rows="10"
    title="内容"
    :rules="contentRules"
    v-model="contentVal"
  />
  <template #submit>
    <button type="submit" class="btn btn-primary">Submit</button>
  </template>
</validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput, { RuleProp } from '@/components/ValidateInput.vue'
import { postItem } from '@/store/type'
import { useRouter } from 'vue-router'
import { requestCreatePost } from '@/http'

const titleRules: RuleProp[] = [
  { type: 'required', msg: '标题输入框不能为空' },
  { type: 'posttitle', msg: '标题长度不能少于6个字' }
]
const contentRules: RuleProp[] = [
  { type: 'required', msg: '文章内容输入框不能为空' },
  { type: 'postcontent', msg: '内容长度不能少于12个字' }
]

export default defineComponent({
  name: 'CreatePost',
  components: { ValidateForm, ValidateInput },
  setup () {
    const titleVal = ref('')
    const contentVal = ref('')
    const router = useRouter()
    const onSubmitClick = (result: boolean) => {
      const columnId = '2'
      const postItem: postItem = {
        title: titleVal.value,
        content: contentVal.value,
        columnId
      }
      if (result) {
        requestCreatePost(postItem).then(res => {
          if (res.data.code) {
            router.replace(`/column/detail/${columnId}`)
          }
        })
      }
    }
    return {
      titleRules,
      contentRules,
      titleVal,
      contentVal,
      onSubmitClick
    }
  }
})
</script>

<style>

</style>

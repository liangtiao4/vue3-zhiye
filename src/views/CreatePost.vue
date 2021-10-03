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
import ValidateInput from '@/components/ValidateInput.vue'
import { postItem } from '@/store/type'
import { useRouter } from 'vue-router'
import { requestCreatePost } from '@/http'
import { titleRules, contentRules } from '@/utils/validateRules'

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
        requestCreatePost(postItem).then(({ data }) => {
          console.log('data', data)
          if (data.code) {
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

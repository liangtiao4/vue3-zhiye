<template>
<div id="register" class="flex-center">
  <validate-form @form-submit="onSubmitClick" style="width: 26rem">
    <h3 class="title-h3">注册</h3>
    <validate-input
      type="email"
      title="输入邮箱"
      placeholder="请输入邮箱"
      :rules="emailRules"
      v-model="emailVal"
    />
    <validate-input
      type="password"
      title="输入密码"
      class="form-control"
      placeholder="请输入密码"
      :rules="passwordRules"
      v-model="passwordVal"
    />
    <validate-input
      type="password"
      title="确认密码"
      class="form-control"
      placeholder="请再次输入密码"
      :rules="passwordRules"
      v-model="passwordVal"
    />
    <template #submit>
      <button type="submit" class="btn btn-primary w-100">注册</button>
    </template>
  </validate-form>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput from '@/components/ValidateInput.vue'
import { emailRules, passwordRules } from '@/utils/validateRules'

export default defineComponent({
  name: 'Register',
  components: { ValidateForm, ValidateInput },
  setup () {
    const emailVal = ref('')
    const passwordVal = ref('')
    const surePasswordVal = ref('')
    return {
      emailRules,
      passwordRules,
      emailVal,
      passwordVal,
      surePasswordVal
    }
  }
})
</script>

<style scoped>
</style>

<template>
<div id="login" class="flex-center">
  <validate-form @form-submit="onSubmitClick" style="width: 26rem">
    <validate-input
      type="email"
      title="邮箱"
      placeholder="请输入邮箱"
      :rules="emailRules"
      v-model="emailVal"
    />
    <validate-input
      type="password"
      title="密码"
      class="form-control"
      placeholder="请输入密码"
      :rules="passwordRules"
      v-model="passwordVal"
    />
    <div class="column-center mb-2">
      <input type="checkbox" id="reme">
      <label class="ml-1 mb-0 flex-grow-1" for="reme">记住账号密码</label>
      <router-link to="/register">没有账号?</router-link>
    </div>
    <template #submit>
      <button type="submit" class="btn btn-primary w-100">登录</button>
    </template>
  </validate-form>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import useCreateToast from '@/hooks/useCreateToast'
import { emailRules, passwordRules } from '@/utils/validateRules'

export default defineComponent({
  name: 'Login',
  components: { ValidateInput, ValidateForm },
  setup () {
    const router = useRouter()
    const store = useStore()
    const emailVal = ref('')
    const passwordVal = ref('')
    const onSubmitClick = (result: boolean) => {
      // 判断输入内容是否通过验证
      if (result) {
        store.dispatch('loginAndGetUser', {
          email: emailVal.value,
          password: passwordVal.value
        }).then(({ code, msg }) => {
          if (code) {
            // 登录成功
            useCreateToast(`${msg} 2秒后跳转到主页。`, 'success')
            setTimeout(() => {
              router.replace('/index')
            }, 2000)
          } else {
            // 登录失败
            useCreateToast(msg, 'fail')
          }
        })
      }
    }
    return {
      emailRules,
      passwordRules,
      emailVal,
      passwordVal,
      onSubmitClick
    }
  }
})
</script>

<style scoped>
.flex-center {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url('http://127.0.0.1:8000/assets/login-bg.jpg'); */
  /* background-size: 100% 110%; */
}
</style>

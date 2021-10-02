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
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">记住账号密码</label>
    </div>
    <template #submit>
      <button type="submit" class="btn btn-primary">Submit</button>
    </template>
  </validate-form>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RuleProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import useCreateToast from '@/hooks/useCreateToast'

const emailRules: RuleProp[] = [
  { type: 'required', msg: '邮箱输入框不能为空' },
  { type: 'email', msg: '邮箱格式不合法' }
]
const passwordRules: RuleProp[] = [
  { type: 'required', msg: '密码输入框不能为空' }
  // { type: 'password', msg: '密码至少有六位，有大小写字母' }
]

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
        }).then(res => {
          console.log(res)
          const { msg, code } = res
          if (code) {
            // 登录成功
            useCreateToast(msg, 'success')
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
      emailVal,
      onSubmitClick,
      passwordRules,
      passwordVal
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
  background-image: url('http://127.0.0.1:8000/assets/login-bg.jpg');
  background-size: 100% 110%;
}
</style>

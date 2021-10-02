import { RuleProp } from '@/components/ValidateInput.vue'

export const emailRules: RuleProp[] = [
  { type: 'required', msg: '邮箱输入框不能为空' },
  { type: 'email', msg: '邮箱格式不合法' }
]
export const passwordRules: RuleProp[] = [
  { type: 'required', msg: '密码输入框不能为空' }
  // { type: 'password', msg: '密码至少有六位，大小写字母各两位' }
]

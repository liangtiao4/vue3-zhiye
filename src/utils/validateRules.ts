export interface RuleProp {
  type: 'required' | 'email' | 'password' | 'posttitle' | 'postcontent',
  msg: string
}

const emailRules: RuleProp[] = [
  { type: 'required', msg: '邮箱输入框不能为空' },
  { type: 'email', msg: '邮箱格式不合法' }
]
const passwordRules: RuleProp[] = [
  { type: 'required', msg: '密码输入框不能为空' }
  // { type: 'password', msg: '密码至少有六位，有大小写字母' }
]

const titleRules: RuleProp[] = [
  { type: 'required', msg: '标题输入框不能为空' },
  { type: 'posttitle', msg: '标题长度不能少于6个字' }
]
const contentRules: RuleProp[] = [
  { type: 'required', msg: '文章内容输入框不能为空' },
  { type: 'postcontent', msg: '内容长度不能少于12个字' }
]

export {
  emailRules,
  passwordRules,
  titleRules,
  contentRules
}

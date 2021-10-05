<template>
  <div class="mb-3">
    <h3 class="fs-18">{{title}}</h3>
    <input
      v-if="tag === 'input'"
      :class="{ 'form-control': true, 'is-invalid': isErr }"
      v-bind="$attrs"
      :value="val"
      @input="setModelVal"
      @blur="validateInput"
    />
    <textarea
      v-else
      :class="{ 'form-control': true, 'is-invalid': isErr }"
      v-bind="$attrs"
      :value="val"
      @input="setModelVal"
      @blur="validateInput"
    />
    <div class="err_tip" v-show="isErr">
      {{eMsg}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs, onMounted } from 'vue'
import { emitter } from './ValidateForm.vue'
export interface RuleProp {
  type: 'required' | 'email' | 'password' | 'posttitle' | 'postcontent',
  msg: string
}
type TagType = 'input' | 'textarea'

export default defineComponent({
  name: 'VaildateInput',
  props: {
    rules: {
      type: Array as PropType<RuleProp[]>,
      required: true
    },
    modelValue: String,
    title: String,
    tag: {
      type: String as PropType<TagType>,
      default: 'input'
    }
  },
  inheritAttrs: false,
  setup (props, context) {
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordReg = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])\S*$/
    const postTitleReg = /^\S*(?=\S{6,})\S*$/
    const postContentReg = /^\S*(?=\S{12,})\S*$/
    const inputRef = reactive({
      val: props.modelValue || '',
      isErr: false,
      eMsg: ''
    })
    const validateInput = () => {
      if (props.rules) {
        const allPass = props.rules.every((rule) => {
          inputRef.eMsg = rule.msg
          let passed = true
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            case 'password':
              passed = passwordReg.test(inputRef.val)
              break
            case 'posttitle':
              passed = postTitleReg.test(inputRef.val)
              break
            case 'postcontent':
              passed = postContentReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.isErr = !allPass
        return allPass
      } else {
        return true
      }
    }
    const setModelVal = (e: KeyboardEvent) => {
      const targetVal = (e.target as HTMLInputElement).value
      inputRef.val = targetVal
      context.emit('update:modelValue', targetVal)
    }
    onMounted(() => {
      emitter.emit('validate', validateInput)
    })
    return {
      ...toRefs(inputRef),
      validateInput,
      setModelVal
    }
  }
})
</script>

<style>
.err_tip{
  width: 100%;
  margin-top: .25rem;
  font-size: 80%;
  color: #dc3545;
}
</style>

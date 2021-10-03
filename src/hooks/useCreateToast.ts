import { createApp } from 'vue'
import Toast from '@/components/Toast.vue'

const useCreateToast = (message: string, status: string, timeout = 2000): void => {
  const toastComponent = createApp(Toast, {
    message,
    status
  })
  const node = document.createElement('div')
  document.body.appendChild(node)
  console.log('create fail')
  toastComponent.mount(node)
  setTimeout(() => {
    toastComponent.unmount()
    document.body.removeChild(node)
  }, timeout)
}

export default useCreateToast

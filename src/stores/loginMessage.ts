import { ref } from 'vue'
import { defineStore } from 'pinia'

const useLoginMessageStore = defineStore('counter', () => {
  const name = ref<string>('')
  const password = ref<string>('')
  const clearMessage = () => {
    name.value = ''
    password.value = ''
  }
  return { name, password, clearMessage }
})

export const loginMessageStore = useLoginMessageStore()
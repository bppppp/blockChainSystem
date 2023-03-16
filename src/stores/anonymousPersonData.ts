import { ref } from 'vue'
import { defineStore } from 'pinia'
import { anonymousPersonDatas } from '@/constData/constPersonData'
const buildanonymousPersonData = defineStore('anonymousPersonData', () => {
  const anonymousPersonData = ref<Array<Record<string,string>>>(anonymousPersonDatas)
  anonymousPersonData.value = anonymousPersonDatas
  console.log(anonymousPersonData.value)
  return { anonymousPersonData }
})

export const anonymousPersonData = buildanonymousPersonData()



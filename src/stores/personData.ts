import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { PersonData } from '../type/personDataType'
import { constPersonData } from '../constData/constPersonData'
const buildpersonData = defineStore('personData', () => {
  const personData = ref([...constPersonData])
  const addPersonData = (singlePersonData:Record<string,string>) => {
    personData.value.push(singlePersonData);
  }
  return { personData,addPersonData }
})

export const personData = buildpersonData()



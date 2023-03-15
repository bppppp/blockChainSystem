import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { PersonData } from '../type/personDataType'
import { constPersonData } from '../constData/constPersonData'
const buildpersonData = defineStore('personData', () => {
  const personData = ref<Array<PersonData>>([...constPersonData])
  const addPersonData = (singlePersonData:PersonData) => {
    personData.value.push(singlePersonData);
  }
  return { personData,addPersonData }
})

export const personData = buildpersonData()



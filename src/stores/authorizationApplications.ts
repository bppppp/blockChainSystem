import { ref } from 'vue'
import { defineStore } from 'pinia'
import {authorizationApplications} from '@/constData/authorizationApplication'
const useAuthorizationApplication = defineStore('authorizationApplication', () => {
  const authorizationApplication = ref<Array<Record<string,string>>>([])
  authorizationApplication.value.push(...authorizationApplications)
  const reacquireApplications = () => {
    authorizationApplication.value = [...authorizationApplications]
  }
  const deleteApplication = (index:number) => {
    authorizationApplication.value.splice(index,1)
  }
  return { authorizationApplication, reacquireApplications,deleteApplication }
})

export const authorizationApplication = useAuthorizationApplication()
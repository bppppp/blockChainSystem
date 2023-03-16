<script setup lang="ts">
import { defineExpose, ref } from 'vue';
import { addPagemessageTitle } from '@/constData/constPersonData'
import { personData } from '@/stores/personData'
import moment from 'moment';
const dialogVisible = ref(false)
const showAddMedicalDataPage = () => {
    dialogVisible.value = true
}
const initData = {
    name: '',
    sex: '',
    age: '',
    phoneNumber: '',
    id: '',
    province: '',
    city: '',
    address: '',
    malady: '',
    result: '',
    advice: '',
    remark: '',
    doctor: '',
    hospital: '',
    time: '',
    ppl: '0',
}as Record<string,string>
const newMedicalData = ref({...initData})
const comfirmAddMedicalData = () => {
    newMedicalData.value.time = moment().format('YYYY-MM-DD')
    personData.addPersonData(newMedicalData.value)
    console.log(personData.personData)
    newMedicalData.value = {...initData}
    dialogVisible.value = false
}
const closeAddMedicalData = () => {
    newMedicalData.value = {...initData}
    dialogVisible.value = false
}
defineExpose({showAddMedicalDataPage})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="新增医疗数据"
    width="800px"
  >
    <span className="add-data-box">
      <div v-for="(item,key) in addPagemessageTitle" className="add-data-tip mb-5">
        <span className="mr-10 add-data-title ">{{ item }}</span>
        <el-input v-model="newMedicalData[key]"  />
      </div>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeAddMedicalData">取消</el-button>
        <el-button type="primary" @click="comfirmAddMedicalData">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>

.add-data-box {
    display: flex;
    flex-wrap: wrap;
}
.add-data-tip {
    min-width: 300px;
    margin-left: 50px;
    overflow-wrap: normal;
    margin-top: 10px;
}
.mr-10 {
    margin-right: 10px;
}
.add-data-title {
    font-weight: 700;
}
.mb-5 {
    margin-bottom: 5px;
}
</style>
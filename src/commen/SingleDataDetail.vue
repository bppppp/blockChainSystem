<script setup lang="ts">
import { defineProps, defineExpose } from 'vue';
import { ref } from 'vue'
import {messageTitle} from '@/constData/constPersonData'
const dialogVisible = ref(false)
const props = defineProps(['singleDataDetail'])
const openDialog = () => {
  dialogVisible.value = true
}
defineExpose({openDialog})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="数据详情"
    width="800px"
  >
    <span className="single-data-detail-box">
      <div v-for="(item,key) in props.singleDataDetail" className="single-data-detail-tip">
        <span className="mr-10 single-data-detail-title">{{ messageTitle[key] }}:</span>
        <span>{{ item }}</span>
      </div>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.single-data-detail-box {
    display: flex;
    flex-wrap: wrap;
}
.single-data-detail-tip {
    min-width: 350px;
    margin-left: 50px;
    overflow-wrap: normal;
    margin-top: 10px;
}
.mr-10 {
    margin-right: 10px;
}
.single-data-detail-title {
    font-weight: 700;
}
</style>
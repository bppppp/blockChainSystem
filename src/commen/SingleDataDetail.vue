<script setup lang="ts">
import { defineProps, defineExpose } from 'vue';
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)
const props = defineProps(['singleDataDetail'])
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
console.log(props.singleDataDetail)
const openDialog = () => {
  dialogVisible.value = true
}
defineExpose({openDialog})
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="数据详情"
    width="50%"
    :before-close="handleClose"
  >
    <span>
      <el-descriptions :column="2">
        <el-descriptions-item v-for="(item,key) in props.singleDataDetail" :label="key">{{item}}</el-descriptions-item>
      </el-descriptions>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>
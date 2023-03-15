<script setup lang="ts">
import PathTitle from '@/commen/PathTitle.vue'
import router from '@/router'
import { ref } from "vue";
import { constPersonData } from '@/constData/constPersonData'
const pathArray:Array<string> = router.currentRoute.value.fullPath.split('/').slice(1)
const showSingleDateDetail = (index) => {

}
const singleDataDetail = ref({})
</script>

<template>
  <div className="dataHandle-box">
    <div className="path-title"><PathTitle :pathArray=pathArray></PathTitle></div>
    <div className="content-box">
        <el-table :data="constPersonData" border style="width: 100%">
            <el-table-column type="index" width="50" />
            <el-table-column prop="name" label="姓名" width="150" />
            <el-table-column prop="malady" label="病症名称" width="150" />
            <el-table-column prop="hospital" label="医院" width="150" />
            <el-table-column prop="doctor" label="医生" width="150" />
            <el-table-column label="数据详情" width="150">
                <template #default="scope">
                    <el-button
                    link
                    type="primary"
                    size="small"
                    @click.prevent="showSingleDateDetail(scope.$index)"
                    >
                    数据详情
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column prop="time" label="创建时间" width="150px" />
        </el-table>
    </div>
  </div>
</template>

<style scoped>
.path-title {
    height: 50px;
    /* background-color: #000; */
}
.dataHandle-box {
    height: 100%;
    width: 100%;
}
.content-box {
    box-sizing: border-box;
    margin: 50px;
    width: 950px;
}
</style>
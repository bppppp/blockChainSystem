<script setup lang="ts">
import PathTitle from '@/commen/PathTitle.vue'
import router from '@/router'
import { anonymousPersonData } from '@/stores/anonymousPersonData'

const pathArray: Array<string> = router.currentRoute.value.fullPath.split('/').slice(1)

console.log(anonymousPersonData.anonymousPersonData)
</script>

<template>
  <div className="dataHandle-box">
    <div className="path-title"><PathTitle :pathArray=pathArray></PathTitle></div>
    <div className="content-box">
        <el-table :data="anonymousPersonData.anonymousPersonData" border style="width: 100%">
            <el-table-column type="index" width="50" />
            <el-table-column prop="age" label="年龄" width="180" />
            <el-table-column prop="sex" label="性别" width="180" />
            <el-table-column prop="id" label="身份证" width="180" />
            <el-table-column prop="address" label="地址" width="180" />
            <el-table-column prop="malady" label="病症" width="180px" />
        </el-table>
        <div className="dataHandle-oagination">
            <el-pagination background layout="prev, pager, next" :total="anonymousPersonData.anonymousPersonData?.length" />
        </div>
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
.new-message-button {
    margin-bottom: 20px;
}
.content-box {
    box-sizing: border-box;
    margin: 50px;
    width: 950px;
    
}
.dataHandle-oagination {
    margin-top: 20px;
    float: right;
}
</style>
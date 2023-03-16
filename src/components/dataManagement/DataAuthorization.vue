<script setup lang="ts">
import PathTitle from '@/commen/PathTitle.vue'
import router from '@/router'
import { ref } from "vue";
import {authorizationApplication} from '@/stores/authorizationApplications'

const pathArray: Array<string> = router.currentRoute.value.fullPath.split('/').slice(1)



const reacquireApp = () => {
    authorizationApplication.reacquireApplications()
}
const agreeAuthorization = (index:number) => {
    const path = '/message/authorizationDetail/'+ authorizationApplication?.authorizationApplication[index]?.applicant
    router.push(path)
    authorizationApplication.deleteApplication(index)
}
const rejectAuthorization = (index:number) => {
    authorizationApplication.deleteApplication(index)
}
</script>

<template>
  <div className="dataHandle-box">
    <div className="path-title"><PathTitle :pathArray=pathArray></PathTitle></div>
    <div className="content-box">
        <div className="content-head">
            <div className="content-title" >您有以下待处理申请</div>
            <div className="content-reflash">
                <el-button type="primary" plain @click="reacquireApp">重新获取</el-button>
            </div>
        </div>
        <el-table :data="authorizationApplication.authorizationApplication" border style="width: 800px">
            <el-table-column type="index" width="50" />
            <el-table-column prop="applicant" label="申请人" width="150px" />
            <el-table-column prop="unit" label="所属单位" width="180px" />
            <el-table-column prop="time" label="创建时间" width="180px" />
            <el-table-column label="操作" width="240">
                <template #default="scope">
                    <el-button type="primary" @click="() => agreeAuthorization(scope.$index)">授权</el-button>
                    <el-button type="danger" @click="() => rejectAuthorization(scope.$index)">拒绝</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div className="dataHandle-oagination">
            <el-pagination background layout="prev, pager, next" :total="authorizationApplication.authorizationApplication?.length" />
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
.content-head {
    display: flex;
    justify-content: space-between;
}
.content-title {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 20px;
}
.content-reflash {
    margin-right: 150px;
}
.content-box {
    box-sizing: border-box;
    margin: 50px;
    width: 950px;
    
}
.dataHandle-oagination {
    margin-top: 20px;
    float: right;
    margin-right: 150px;
}
</style>
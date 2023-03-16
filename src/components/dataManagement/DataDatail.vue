<script setup lang="ts">
import PathTitle from '@/commen/PathTitle.vue'
import router from '@/router'
import { ref } from "vue";
import { personData } from '@/stores/personData'
import SingleDataDetail from '@/commen/SingleDataDetail.vue'
import { PPLLeve } from '@/constData/constPersonData'
const pathArray: Array<string> = router.currentRoute.value.fullPath.split('/').slice(1)
const singleDataDetail = ref({})
const singleDataDetailModel = ref()
const showSingleDateDetail = (index: number) => {
    singleDataDetail.value = personData.personData[index]
    singleDataDetailModel.value.openDialog()
}
const show = (scope:any) => {
    console.log(scope)
}
</script>

<template>
  <div className="dataHandle-box">
    <div className="path-title"><PathTitle :pathArray=pathArray></PathTitle></div>
    <div className="content-box">
        <el-table :data="personData.personData" border style="width: 100%">
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
            <el-table-column label="PPL等级" width="150">
                <template #default="scope">
                    <el-select  v-model="personData.personData[scope.$index].ppl" class="m-2" placeholder="Select" size="large">
                        <el-option
                            v-for="item in PPLLeve"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </template>
            </el-table-column>
        </el-table>
        <div className="dataHandle-oagination">
            <el-pagination background layout="prev, pager, next" :total="personData.personData.length" />
        </div>
    </div>
    <SingleDataDetail ref="singleDataDetailModel" :singleDataDetail="singleDataDetail"/>
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
    width: 1100px;
    
}
.dataHandle-oagination {
    margin-top: 20px;
    float: right;
}
</style>
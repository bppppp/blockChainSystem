<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from "vue";
import SingleDataDetail from '@/commen/SingleDataDetail.vue'
import { personData } from '@/stores/personData'
const route = useRoute()
const singleDataDettail = ref()
const value1 = ref()
const showPersonData = ref<Array<any>>([])
const filterPersonData = (totalArray:any) => {
    return totalArray.reduce((pre:Array<any> , cur:any) => {
        if(cur.name === route.params.name){
            return pre.concat(cur)
        }else {
            return pre
        }
    }, [])
}
const singleDataDetail = ref({})
// console.log(filterPersonData(personData.personData))
showPersonData.value.push(...filterPersonData(personData.personData))
const showSingleDateDetail = (index:number) => {
    singleDataDettail.value.openDialog()
    singleDataDetail.value = showPersonData.value[index]
}
const agreeArray = ref([])
console.log(showPersonData.value)
</script>

<template>
  <div className="dataHandle-box">
    <div className="content-box">
        <el-table :data="showPersonData" border style="width: 100%">
            <el-table-column type="index" width="50" />
            <el-table-column prop="malady" label="病症" width="150" />
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
            <el-table-column label="授权" width="150">
                <template #default="scope">
                    <el-switch v-model="agreeArray[scope.$index]"/>
                </template>
            </el-table-column>
        </el-table>
        <div className="dataHandle-oagination">
            <el-pagination background layout="prev, pager, next" :total="personData.personData.length" />
        </div>
    </div>
    <SingleDataDetail ref="singleDataDettail" :singleDataDetail="singleDataDetail"/>
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
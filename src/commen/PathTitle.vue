<script setup lang="ts">
import { defineProps } from 'vue';
import { pathNameMap,pathNameList } from '@/enum/pathEnum'


const props = defineProps({
    pathArray: {
        type: Array<string>,
        required: true,
    }
})
// const pathArray:Array<string> = ['message', 'dateHandle']
// const pathNameList = {
//     message:'首页', 
//     dateHandle:  '医疗数据处理',
//     dataManagement: '医疗数据管理',
//     dataAuthorization: '数据详情',
//     dataDetail: '数据授权',
//     dataShare:'医疗数据共享',
// }
</script>

<template>
  <div className="path-title-content">
    <div v-for="(item,index) in pathArray" key="index" className="path-title-content-item">
        <span className="ml-8">{{pathNameMap.get(item)}}</span>
        <span v-show="index !== pathArray.length-1" className="ml-8">></span>
    </div>
  </div>
</template>

<style scoped>
.path-title-content {
    height: 50px;
    /* background-color: #000; */
    display: flex;
}
.path-title-content-item {
    height: 50px;
    font-size: 20px;
    line-height: 50px;
}
.ml-8 {
    margin-left: 8px;
}
</style>
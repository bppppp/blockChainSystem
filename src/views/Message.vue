<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import router from '../router'
import {loginMessageStore} from '../stores/loginMessage'
const jump2CorrespondingPage = (pageName:string) => {
    router.push('/message/'+ pageName);
}
const back2Login = () => {
    loginMessageStore.clearMessage()
    router.push('/login')
}
</script>

<template>
  <header>
    <div className="message-head-title">
        <div className="message-head-title-content">基于区块链的医疗数据隐私保护和共享系统</div>
        <div className="message-head-title-back"><el-button @click="back2Login" class="message-head-title-back-button" type="success">退出</el-button></div>
    </div>
    <div className="message-body-content">
        <div className="message-left-menu">
            <el-row class="tac message-menu">
                <el-menu
                    active-text-color="#ffd04b"
                    background-color="#545c64"
                    class="el-menu-vertical-demo"
                    default-active="2"
                    text-color="#fff"
                >
                    <el-menu-item index="dateHandle" @click="() => jump2CorrespondingPage('dateHandle')">
                        <el-icon><icon-menu /></el-icon>
                        <span className="mr-8">医疗数据处理</span>
                    </el-menu-item>
                    <el-sub-menu index="dateManagement">
                        <template #title>
                            <el-icon><setting /></el-icon>
                            <span>医疗数据管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="dataDetail" @click="() => jump2CorrespondingPage('dataDetail')">数据详情</el-menu-item>
                            <el-menu-item index="dataAuthorization" @click="() => jump2CorrespondingPage('dataAuthorization')">数据授权</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-menu-item index="dateShare" @click="() => jump2CorrespondingPage('dateShare')">
                        <el-icon><document  /></el-icon>
                        <span className="mr-8">医疗数据共享</span>
                    </el-menu-item>
                </el-menu>
            </el-row>
        </div>
        <div className="message-right-content"><RouterView /></div>
    </div>
  </header>
</template>

<style scoped>
.message-head-title {
    height: 70px;
    background-color: #303133;
    display: flex;
}
.message-head-title-content {
    flex: 1;
    height: 100%;
    margin-left: 30px;
    line-height: 70px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
}
.message-head-title-back {
    width: 100px;
    height: 100%;
}
.message-head-title-back-button {
    margin-top: 18px;
    height: 34px;
    width: 80px;
    font-size: 20px;
}
.message-body-content{
    height: calc(100vh - 70px);
    /* background-color: green; */
    display: flex;
}
.message-left-menu {
    height: 100%;
    /* background-color: pink; */
}
.message-menu {
    height: 100%;
}
.message-right-content {
    flex: 1;
    /* background-color: yellow; */
}
.mr-8 {
    margin-right: 8px;
}
</style>

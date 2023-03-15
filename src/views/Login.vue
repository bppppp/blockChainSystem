<script setup lang="ts">
import {loginMessageStore} from '../stores/loginMessage'
import router from '../router'
const resetMessage = () => {
    loginMessageStore.clearMessage()
}
const jump2MessagePage = () => {
    router.push('/message/dataDetail')
}
</script>

<template>
    <div className="login-out">
        <div className="login-contain-box">
            <div className="login-title">基于区块链的医疗数据隐私保护与共享系统</div>
            <div className="login-message-box">
                <div className="login-message-content">
                    <div className="login-message-content-inner">
                        <div className="login-name">
                            <span className="login-name-title">用户名:</span>
                            <span className="login-name-box"><el-input v-model="loginMessageStore.name" placeholder="请输入用户名"></el-input></span>
                        </div>
                        <div className="login-password">
                            <span className="login-password-title">密码:</span>
                            <span className="login-password-box"><el-input v-model="loginMessageStore.password" placeholder="请输入密码"></el-input></span>
                        </div>
                        <div className="login-button-outbox">
                            <div className="login-button-innerbox">
                                <span><el-button type="primary" @click="jump2MessagePage">确认</el-button></span>
                                <span className="ml-20"><el-button @click="resetMessage">重置</el-button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-out {
    height: 100vh;
    width: 100vw;
}
.login-contain-box {
    height: 500px;
    width: 800px;
    position: absolute;
    background-color: #f5f5f5;
    left: 50%;
    top: 50%;
    margin-left: -400px;
    margin-top: -250px;
}
.login-title {
    height: 120px;
    width: 100%;
    line-height: 120px;
    text-align: center;
    font-weight: 700;
    font-size: 30px;
}
.login-message-box {
    width: 100%;
    height: 380px;
    position: relative;
}
.login-message-content {
    width: 600px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -300px;
    margin-top: -190px;

}
.login-message-content-inner {
    width: 400px;
    height: 200px;
    margin-left: 100px;
    margin-top: 80px;
}
.login-name {
    margin-bottom: 20px;
}
.login-name-title {
    display: inline-block;
    width: 70px;
}
.login-name-box {
    display: inline-block;
    width: 300px;
}
.login-password {
    margin-bottom: 20px;
}
.login-password-title {
    display: inline-block;
    width: 70px;
}
.login-password-box {
    display: inline-block;
    width: 300px;
}
.login-button-outbox {
    position: relative;
}
.login-button-innerbox {
    position: absolute;
    top: 10px;
    right: 30px;
}
.ml-20 {
    margin-left: 20px;
}
</style>

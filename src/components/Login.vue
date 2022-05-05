<template>
  <div class="login">
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
          <h3>接口自动化测试</h3>
          <el-form-item prop="username" label="用户名">
            <el-input v-model="user.username" placeholder="请输入用户名" prefix-icon="el-icon-user
"></el-input>
          </el-form-item>
          <el-form-item id="password" prop="password" label="密码">
            <el-input v-model="user.password" show-password placeholder="请输入密码" prefix-icon="el-icon-unlock"></el-input>
          </el-form-item>
          <router-link to="/register" >注册账号</router-link>
          <el-form-item>
            <el-button type="primary" icon="el-icon-upload" @click="doLogin()">登 录</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {loginRequest} from "../api/user";
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules:{
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  created() {},
  methods: {
    doLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          loginRequest(this.user).then(data => {
            if (data.data.msg === "登录成功") {
              localStorage.setItem("yoloToken", data.data.data.token);
              localStorage.setItem("yoloUserName", data.data.data.user.name);
              // 用户角色暂未设置
              this.$router.push({path: "/"});
            } else {
              alert("您输入的用户名或密码错误！");
            }
          });
          }
      });
    }
  }
};

</script>

<style scoped>
.login {
  width: 100%;
  height: 950px;
  background: url("../assets/img/login.png") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.login-wrap {
  width: 400px;
  height: 400px;
  margin: 200px auto;
  padding-top: 0px;
  line-height: 30px;
}
#password {
  margin-bottom: 5px;
}
h3 {
  color: #9c0bea;
  font-size: 24px;
  margin-left: 100px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}
a {
  text-decoration: none;
  color: #9c0bea;
  font-size: 15px;
  margin-left: 100px;
}
a:hover {
  color: #50f9ff;
}
.el-button {
  width: 80%;
  margin-left: -0px;
}
</style>

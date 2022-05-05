<template>
  <div class="login">
    <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
          <h3>接口自动化测试</h3>
          <el-form-item prop="username" label="用户名">
            <el-input v-model="user.username" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input v-model="user.email" placeholder="请输入邮箱" prefix-icon="el-icon-s-promotion
"></el-input>
          </el-form-item>
          <el-form-item prop="name" label="昵称">
            <el-input v-model="user.name" placeholder="请输入昵称" prefix-icon="el-icon-user-solid
"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="设置密码">
            <el-input v-model="user.password" show-password placeholder="请输入密码" prefix-icon="el-icon-unlock"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon @click="doRegister()">注册账号</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
import {registerRequest} from "../api/user";
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
        name: ""
      },
      rules:{
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮件', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  created() {

  },
  methods: {
    doRegister() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          registerRequest(this.user).then(data =>{
            if (data.data.msg === "注册成功") {
              alert("注册成功！");
              this.$router.push({ path: "/login" });
            } else {
              alert("注册失败！");
            }
          })
        }});
        }
      }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

h3 {
  color: #9c0bea;
  font-size: 24px;
  margin-left: 100px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}

.el-button {
  width: 80%;
  margin-left: 0px;
}
</style>

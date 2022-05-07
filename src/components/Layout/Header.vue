<template>

    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>调试页面</el-breadcrumb-item>
      </el-breadcrumb>

      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">你好！{{username}}<i class="el-icon-arrow-down el-icon--left"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user" command="quit">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting" command="quit">个人设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-close" command="quit">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>

</template>

<script>
export default {
  name: "Header",
  methods: {
    handleCommand(command){
      this.$message(`点击了${command}`)
    }
  },
  computed:{
    username() {
      let name = localStorage.getItem('yoloUserName');
      return name;
    }
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  top: 0px;
  left: 180px;
  right: 0px;
  bottom: 0px;
}
.el-dropdown{
  float: right;
  margin-right: 25px;
  margin-top: 20px;
  display: inline-block;
}
.el-dropdown-link{
  color: black;
  cursor: pointer; /* 鼠标放上去是手的形状 */
}
.el-breadcrumb{
  margin-left: 20px;
  margin-top: 20px;
  font-size: 15px;
  display: inline-block;
}
</style>

<template>

    <div class="header">

      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 首页</el-breadcrumb-item>
          <el-breadcrumb-item>API项目</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">你好！{{username}}<i class="el-icon-arrow-down el-icon--left"></i></span>
        <el-dropdown-menu slot="dropdown">
          <!-- icon是修改图标 ，command是点击后传给方法的值-->
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
/* 头部样式 */
.header {
  position: absolute;
  line-height: 30px;
  top: 0px;
  left: 180px;
  right: 0px;
  background-color: #ffffff;
}
.el-dropdown{
  float: right;
  margin-right: 15px;
}

.el-dropdown-link{
  color: black;
  cursor: pointer; /* 鼠标放上去是手的形状 */
}
.crumbs{
  margin: 20px 0px 0px 0px;
}
</style>

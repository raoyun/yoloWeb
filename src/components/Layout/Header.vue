<template>
  <div class="header">
    <a href="#/">
      <img class="logo" src="../../assets/img/EOS.png" width="30px" />
      <span class="company">Yolo接口测试平台</span>
    </a>
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
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #2e3b51;
}
/* logo */
.logo {
  vertical-align: middle; /* 居中 */
  padding: 0px 10px 0px 10px; /* 上右下左 */
}
/* 文字 */
.company {
  position: absolute;
  color: white;
  font-size: 25px;
}
/* 下拉菜单 */
.el-dropdown{
  float: right; /* 浮动在右边 */
  margin-right: 15px;
}
/* 系统管理 */
.el-dropdown-link{
  color: white;
  cursor: pointer; /* 鼠标放上去是手的形状 */
}
</style>

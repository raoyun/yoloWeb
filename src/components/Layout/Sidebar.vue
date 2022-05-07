<template>
  <div class="navbar">
    <div class="leftTop">
      <a href="#/">
        <img class="logo" src="../../assets/img/EOS.png" width="35px" />
        <span class="company">yolo</span>
      </a>
    </div>


    <el-menu :router='true' default-active="/workspace" class="el-menu-vertical-demo" background-color="#222d3b"
             text-color="#fff" active-text-color="#ffd04b">

      <el-menu-item index="/debug">
        <i class="el-icon-suitcase"></i>
        <span slot="title">调试页面</span>
      </el-menu-item>

      <el-menu-item index="/workspace">
        <i class="el-icon-suitcase"></i>
        <span slot="title">工作台</span>
      </el-menu-item>

      <el-menu-item index="/project">
        <i class="el-icon-menu"></i>
        <span slot="title">项目管理</span>
      </el-menu-item>

      <el-submenu index="/apiCase">
        <template slot="title">
          <i class="el-icon-set-up"></i>
          <span>接口测试</span>
        </template>
        <el-menu-item index="/apiCase">接口用例</el-menu-item>
        <el-menu-item index="/testPlan">测试计划</el-menu-item>
      </el-submenu>

      <el-menu-item index="/report">
        <i class="el-icon-document"></i>
        <span slot="title">测试报告</span>
      </el-menu-item>

      <el-menu-item index="/testSetting">
        <i class="el-icon-s-operation"></i>
        <span slot="title">测试配置</span>
      </el-menu-item>

      <el-menu-item index="/member/">
        <i class="el-icon-s-help"></i>
        <span slot="title">持续集成</span>
      </el-menu-item>

      <el-menu-item index="/member/">
        <i class="el-icon-s-check"></i>
        <span slot="title">精准测试</span>
      </el-menu-item>

      <el-menu-item index="/member/">
        <i class="el-icon-coin"></i>
        <span slot="title">数据工厂</span>
      </el-menu-item>

      <el-menu-item index="/member/">
        <i class="el-icon-cpu"></i>
        <span slot="title">实用工具</span>
      </el-menu-item>


    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>
/* 左侧样式 */
.navbar {
  position: absolute;
  width: 180px;
  top: 0px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  background-color: #222d3b;
}
/* 去掉右边框 */
.el-menu {
  border-right: none;
}
.logo {
  vertical-align: middle; /* 居中 */
  padding: 10px 10px 0px 15px; /* 上右下左 */
}
.company {
  position: absolute;
  color: white;
  font-size: 25px;
  padding: 10px 10px 0px 5px;
}
.leftTop{
  height: 55px;
}
</style>

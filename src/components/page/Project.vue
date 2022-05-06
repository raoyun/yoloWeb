<template>
  <div>


    <el-row>
      <el-button type="primary" @click="addProjectPopup" >创建项目</el-button>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Project",
  methods:{
    // 添加API测试项目
    addApiTestProject() {
      let req = JSON.parse(JSON.stringify(this.addApiProjectData));

      this.$refs.addApiProjectFormRef.validate((valid) => {
        // if (valid) { // 代表校验通过
        //   addApiProjectRequest(req).then(data => {
        //     console.log(data)
        //     if (true === data.data.success) {
        //       this.getApiProjectFun();
        //       this.addApiProjectdialogFormVisible = false;
        //       this.$message.info("创建项目成功")
        //     } else {
        //       this.$message.info("创建项目失败")
        //     }
        //   })
        // } else {  //校验失败
        //   return false;
        // }
      });
    },
  }
}
</script>

<style scoped>

</style>

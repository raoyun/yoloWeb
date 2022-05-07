<template>
  <div>
    <el-card class="box-card">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-input v-model="input" placeholder="请输入url"></el-input>
      <el-button type="primary">Send</el-button>

      <el-tabs v-model="activeName" @tab-click="handleClick">

        <el-tab-pane label="Params" name="params">
          <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="key" label="KEY" width="180"></el-table-column>
            <el-table-column prop="value" label="VALUE" width="180"></el-table-column>
            <el-table-column prop="description" label="DESCRIPTION"></el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="Headers" name="headers"></el-tab-pane>
        <el-tab-pane label="Body" name="body"></el-tab-pane>

      </el-tabs>





    </el-card>


  </div>
</template>

<script>
export default {
  name: "Debug",
  data(){
    return{
      input: '',
      options: [{
        value: 'GET',
        label: 'GET'
      }, {
        value: 'POST',
        label: 'POST'
      }, {
        value: 'PUT',
        label: 'PUT'
      }, {
        value: 'DELETE',
        label: 'DELETE'
      },],
      value: 'GET',
      activeName: 'params',
      tableData: [{
        key: '',
        value: '',
        description: ''
      }, {
        key: '',
        value: '',
        description: ''
      }, {
        key: '',
        value: '',
        description: ''
      }, {
        key: '',
        value: '',
        description: ''
      }]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
.box-card {
  height: 700px;
  width: 100%;
}
.el-select{
  width: 100px;
}
.el-input{
  width: 700px;
}

</style>

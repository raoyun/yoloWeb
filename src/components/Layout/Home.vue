<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <v-main></v-main>
  </div>
</template>

<script>
import vHeader from "./Header";
import vSidebar from "./Sidebar";
import vMain from "./Main";
export default {
  name: "Home",
  components: {
    vHeader, vSidebar, vMain
  }
}
</script>

<style scoped>

</style>

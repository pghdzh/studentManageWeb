<template>
  <div class="content">
    <topNav class="topNav" />
    <div class="mainArea">
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RouterView } from "vue-router";
import topNav from "./components/topNav.vue";
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  height: 100vh;
  .topNav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  .mainArea {
    width: 100%;
    margin-top: 60px;
  }
}
</style>

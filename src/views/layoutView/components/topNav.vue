<template>
  <div class="main">
    <el-row class="top-nav">
      <el-col :span="3" class="title">
        <div>颖姐收作业系统</div>
      </el-col>
      <el-col :span="6" class="nav">
        <div @click="routerFun(1)" :class="{ currentNav: currentNav == 1 }">
          交作业
        </div>
        <div @click="routerFun(2)" :class="{ currentNav: currentNav == 2 }">
          请假
        </div>
        <div @click="routerFun(3)" :class="{ currentNav: currentNav == 3 }">
          其他
        </div>
      </el-col>

      <el-col :span="2" class="user">
        <el-dropdown @command="handleCommand">
          <span class="user-name">用户名</span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="logout">退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown></el-col
      >
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const currentNav = ref(1);
const routerFun = (index: any) => {
  currentNav.value = index;
};
const handleCommand = (command: any) => {
  if (command == "logout") {
    router.push('/')
  }
};
</script>
<style scoped lang="scss">
.main {
  height: 60px;
  border-bottom: 1px solid #dcdfe6;
  background-color: #fff;
  width: 100%;

  .top-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;

    .title {
      font-size: 24px;
      height: 60px;
      line-height: 60px;
    }

    .nav {
      font-size: 15px;
      display: flex;
      justify-content: space-between;
      font-style: italic;
      font-size: 16px;
      div {
        cursor: pointer;
        border-bottom: 2px solid transparent;
        padding: 10px 0;
      }

      div:hover {
        color: #409eff;
        border-bottom: 2px solid #409eff;
      }

      .currentNav {
        color: #409eff;
        border-bottom: 2px solid #409eff;
      }
    }
    .user {
      cursor: pointer;
    }
  }
}
</style>

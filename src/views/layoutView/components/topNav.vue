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
          <span class="user-name">{{ studentInfo.fullName }}</span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="logout">退出登陆</el-dropdown-item>
              <el-dropdown-item command="editPass">修改密码</el-dropdown-item>
              <el-dropdown-item command="isThree"
                >{{ isThree ? "关闭" : "开启" }}动态背景</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown></el-col
      >
    </el-row>
    <el-dialog v-model="editDia" title="修改密码" width="500" center>
      <div style="width: 100%; display: flex; justify-content: center">
        <el-input
          v-model="newPass"
          style="width: 240px"
          placeholder="输入密码"
          maxlength="12"
        />
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="editDia = false">取消</el-button>
          <el-button type="primary" @click="editPassReq"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { editPass } from "@/api/modules/sutdent";
import { ElMessage } from "element-plus";
const router = useRouter();
const currentNav = ref(1);
const routerFun = (index: any) => {
  currentNav.value = index;
};

const editDia = ref(false);
const isThree = ref(false);
const handleCommand = (command: any) => {
  if (command == "logout") {
    router.push("/");
  }
  if (command == "editPass") {
    editDia.value = true;
  }
  if (command == "isThree") {
    isThree.value = !isThree.value;
    localStorage.setItem("isThree", String(isThree.value));
    window.location.reload(); // 刷新页面
  }
};
const newPass = ref("");
const editPassReq = async () => {
  let tem = {
    newPassword: newPass.value,
  };

  let res: any = await editPass(studentInfo.value.student_id, tem);
  if (res.code == 200) {
    ElMessage.success("修改密码成功，请重新登录");
    editDia.value = false;
    router.push("/");
  } else {
    ElMessage.error(res.message);
  }
};

const studentInfo = ref({ fullName: "", student_id: null });
onMounted(() => {
  let isThreeStr = localStorage.getItem("isThree");
  isThree.value = isThreeStr ? isThreeStr === "true" : false; // 如果没有值，默认为 false
  studentInfo.value = JSON.parse(localStorage.getItem("studentInfo"));
  console.log(studentInfo);
});
</script>
<style scoped lang="scss">
.main {
  height: 60px;
  border-bottom: 1px solid #dcdfe6;
  background-color: #fff;
  width: 100%;
  z-index: 10;
  .top-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
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

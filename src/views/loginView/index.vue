<template>
  <div class="content">
    <div class="night" v-if="isThree" ref="nightRef"></div>
    <div class="shell">
      <h2 class="title">登录</h2>
      <input type="text" placeholder="学号" v-model="student_number" />
      <input type="password" placeholder="密码" v-model="password" />
      <input type="submit" value="登录" @click="goHome" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { login } from "@/api/modules/sutdent";
import { ElMessage } from "element-plus";
import { onMounted, ref, watch, nextTick } from "vue";
import initNight from "./threeInit/initNight";

const router = useRouter();

const student_number = ref("");
const password = ref("");

const goHome = async () => {
  if (!student_number.value || !password.value) {
    ElMessage.error("请输入密码或者用户名");
    return;
  }
  let tem = {
    student_number: student_number.value,
    password: password.value,
  };
  let res: any = await login(tem);
  if (res.code == 200) {
    localStorage.setItem("studentInfo", JSON.stringify(res.data));
    ElMessage.success("登录成功");
    router.push({ path: "/home" });
  } else {
    ElMessage.error(res.message);
  }
};
const nightRef = ref();
const isThree = ref(false);
watch(isThree, async () => {
  if (isThree.value) {
    await nextTick(); // 等待 DOM 更新
    initNight(nightRef);
  }
});

onMounted(() => {
  let isThreeStr = localStorage.getItem("isThree");
  isThree.value = isThreeStr ? isThreeStr === "true" : false; // 如果没有值，默认为 false
});
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  .night {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .shell {
    width: 350px;
    padding: 40px;
    z-index: 11;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff49;
    border-radius: 50px;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.5) inset;
    .title {
      font-size: 40px;
      margin-top: 30px;
      color: #fff;
      text-shadow: 0 0 10px #ff9dff80;
      margin-bottom: 20px;
    }
    input {
      width: 100%;
      height: 50px;
      margin: 10px 0;
      box-sizing: border-box;
      color: #000;
      border: 5px solid transparent;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 100px;
      padding: 5px 20px 0 20px;
      transition: 0.3s;
      font-size: 18px;
      outline: none;
    }
    input:hover {
      background-color: rgba(255, 255, 255, 0);
      border: 5px solid #fff;
    }

    input::placeholder {
      color: #007bff;
    }
    input[type="submit"] {
      background-color: #007bff;
      cursor: pointer;
      letter-spacing: 3px;
      font-size: 20px;
      color: #fff;
      border: none;
      margin: 15px;
      padding: 10px;
    }
  }
}
</style>

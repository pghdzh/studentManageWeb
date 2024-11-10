<template>
  <div class="content">
    <div class="shell">
      <h2 class="title">登录</h2>
      <input type="text" placeholder="学号" />
      <input type="password" placeholder="密码" />
      <input type="submit" value="登录" @click="goHome" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push({ path: "/home" });
};
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  .shell {
    width: 350px;
    padding: 40px;

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
      color: #92a7eb;
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

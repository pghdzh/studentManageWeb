<template>
  <div class="doll">
    <div class="ear left"></div>
    <div class="ear right"></div>
    <div class="nose"></div>
    <div class="eye left"></div>
    <div class="eye right"></div>
    <div class="face"></div>
    <div class="apple"></div>
    <div class="rope"></div>
    <div class="clouds">
      <svg
        class="cloud"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="214.45997619628906"
        height="205.58551025390625"
        viewBox="0 0 214.45997619628906 205.58551025390625"
        fill="white"
      >
        <path
          d="M10.4197 125.086C-31.5858 45.0855 68.4197 -109.914 149.42 125.086L213.42 205.086C213.42 205.086 52.4251 205.085 10.4197 125.086Z"
          stroke="rgba(0, 0, 0, 1)"
          stroke-width="1"
        ></path>
      </svg>
      <svg
        class="cloud"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="214.45997619628906"
        height="205.58551025390625"
        viewBox="0 0 214.45997619628906 205.58551025390625"
        fill="white"
      >
        <path
          d="M10.4197 125.086C-31.5858 45.0855 68.4197 -109.914 149.42 125.086L213.42 205.086C213.42 205.086 52.4251 205.085 10.4197 125.086Z"
          stroke="rgba(0, 0, 0, 1)"
          stroke-width="1"
        ></path>
      </svg>
      <svg
        class="cloud"
        style="transform: scaleX(-1); margin-left: 200px"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="214.45997619628906"
        height="205.58551025390625"
        viewBox="0 0 214.45997619628906 205.58551025390625"
        fill="white"
      >
        <path
          d="M10.4197 125.086C-31.5858 45.0855 68.4197 -109.914 149.42 125.086L213.42 205.086C213.42 205.086 52.4251 205.085 10.4197 125.086Z"
          stroke="rgba(0, 0, 0, 1)"
          stroke-width="1"
        ></path>
      </svg>
      <svg
        class="cloud"
        style="transform: scaleX(-1)"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="214.45997619628906"
        height="205.58551025390625"
        viewBox="0 0 214.45997619628906 205.58551025390625"
        fill="white"
      >
        <path
          d="M10.4197 125.086C-31.5858 45.0855 68.4197 -109.914 149.42 125.086L213.42 205.086C213.42 205.086 52.4251 205.085 10.4197 125.086Z"
          stroke="rgba(0, 0, 0, 1)"
          stroke-width="1"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script lang='ts'  setup>
import { ref } from "vue";
</script>
<style scoped lang="scss">
.doll {
  position: relative;
  width: 260px;
  height: 250px;
  background: linear-gradient(145deg, #a0d8ff, #7ebfff);
  border-radius: 50% 50% 40% 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3),
    inset 0 -10px 20px rgba(0, 0, 0, 0.1);
  animation: float 3s ease-in-out infinite;
}

/* 耳朵 */
.ear {
  position: absolute;
  width: 80px;
  height: 100px;
  background: linear-gradient(145deg, #a0d8ff, #7ebfff);
  border-radius: 50%;
  top: -40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2),
    inset 0 -8px 15px rgba(0, 0, 0, 0.1);
}

.ear.left {
  left: -50px;
}

.ear.right {
  right: -50px;
}

/* 耳朵内部 */
.ear::before {
  content: "";
  position: absolute;
  width: 60px;
  height: 80px;
  background-color: #f6d9f1;
  border-radius: 50%;
  top: 10px;
  left: 10px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 鼻子 */
.nose {
  position: absolute;
  width: 30px;
  height: 60px;
  background: linear-gradient(145deg, white, #f0f0f0);
  border: 1px solid gainsboro;
  border-radius: 40%;
  bottom: 65px;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* 鼻子的小圆 */
.nose::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  top: 35px;
  left: -20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.nose::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  top: 35px;
  right: -20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 脸 */
.face {
  position: absolute;
  width: 180px;
  height: 120px;
  background-color: #fff;
  border-radius: 45%;
  top: 60px;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.3);
}

/* 眼睛 */
.eye {
  position: absolute;
  width: 22px;
  height: 22px;
  background-color: #1d2b9e;
  border-radius: 50%;
  top: 100px;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.3);
  z-index: 9;
}

.eye.left {
  left: 95px;
}

.eye.right {
  right: 95px;
}

/* 苹果 */
.apple {
  position: absolute;
  top: -50px;
  width: 50px;
  height: 50px;
  background: radial-gradient(circle at 30% 30%, #ff4f4f, #d43f3f);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  animation: bounce 2s ease-in-out infinite;
}

/* 苹果叶子 */
.apple::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 15px;
  background-color: #73c48f;
  border-radius: 50%;
  top: -10px;
  left: 15px;
  transform: rotate(-20deg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 绳子部分 */
.rope {
  position: absolute;
  bottom: 30px;
  width: 160px;
  height: 35px;
  background: linear-gradient(145deg, #d9a243, #b88735);
  border-radius: 20px;
  z-index: 1;
  box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.3);
}

.rope::before {
  content: "";
  position: absolute;
  width: 140px;
  height: 20px;
  background: linear-gradient(145deg, #f0c973, #b88735);
  top: 7px;
  left: 10px;
  border-radius: 10px;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.2);
}

.rope::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  background: radial-gradient(circle at 50% 50%, #d9a243, #b88735);
  border-radius: 50%;
  bottom: 3px;
  left: calc(50% - 15px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}
.clouds {
  position: absolute;
  bottom: -85px;
  display: flex;
  justify-content: space-between;

  /* 修改为100%以填充容器 */
  transform: scale(0.1);
}

/* 使每个云朵的装饰分开展示 */
.cloud:not(:last-child) {
  margin-right: 10px;
}

/* 动效 */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}
</style>

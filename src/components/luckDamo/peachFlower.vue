<template>
  <div class="doll">
    <div class="ear left"></div>
    <div class="ear right"></div>
    <div class="flower-container">
      <div class="bow"></div>
      <!-- 白色蝴蝶结 -->
      <div class="flower">
        <div class="center"></div>
        <!-- 花蕊 -->
      </div>
      <!-- 红色花朵 -->
    </div>
    <div class="face">
      <div class="eye left"></div>
      <div class="eye right"></div>
      <div class="nose-mouth"></div>
      <div class="faceRed left"></div>
      <div class="faceRed right"></div>
      <div class="hand left"></div>
      <div class="hand right"></div>
    </div>

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
<script lang='ts'  setup></script>
<style scoped lang="scss">
.doll {
  position: relative;
  width: 260px;
  height: 250px;
  background: linear-gradient(145deg, #ffc1d8, #ff92b7);
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
  background: linear-gradient(145deg, #ffc1d8, #ff92b7);
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
  background-color: #ffe6ef;
  border-radius: 50%;
  top: 10px;
  left: 10px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
}

.flower-container {
  position: absolute;
  left: -20px;
  top: -30px;
  width: 120px;
  height: 120px;
  margin: 50px auto;
  transform: scale(0.6);
}

/* 白色蝴蝶结 */
.bow {
  position: absolute;
  top: 20px;
  left: 30px;
  width: 60px;
  height: 30px;
  background-color: white;
  border-radius: 50% 50% 0 0;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  transform: rotate(-30deg);
}

.bow:before,
.bow:after {
  content: "";
  position: absolute;
  background-color: white;
  width: 60px;
  height: 30px;
  border-radius: 50% 50% 0 0;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.bow:before {
  top: -20px;
  left: -25px;
  transform: rotate(45deg);
}

.bow:after {
  top: -20px;
  left: 25px;
  transform: rotate(-45deg);
}

/* 红色花朵 */
.flower {
  position: absolute;
  top: 20px;
  left: 40px;
  width: 50px;
  height: 50px;
  background-color: #f05a5a;
  border-radius: 50%;
  transform: rotate(60deg);
}

.flower::before,
.flower::after {
  content: "";
  position: absolute;
  background-color: #f05a5a;
  border-radius: 50%;
}

/* 花瓣 */
.flower::before {
  width: 30px;
  height: 30px;
  top: -15px;
  left: 10px;
}

.flower::after {
  width: 30px;
  height: 30px;
  bottom: -15px;
  right: 10px;
}

/* 花蕊 */
.center {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
}

/* 调整蝴蝶结的阴影 */
.bow-shadow {
  position: absolute;
  top: 15px;
  left: 25px;
  width: 70px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
}

/* 脸部 */
.face {
  position: absolute;
  width: 180px;
  height: 120px;
  background: linear-gradient(145deg, #fff, #f7e6e6);
  border-radius: 45%;
  bottom: 70px;
  z-index: 1;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);

  /* 腮红 */
  .faceRed {
    position: absolute;
    width: 55px;
    height: 40px;
    border-radius: 50%;
    bottom: 20px;
    background: linear-gradient(145deg, #f7e6e6, #f3c5c5);
  }

  .faceRed.left {
    left: 0;
  }

  .faceRed.right {
    right: 0;
  }

  /* 眼睛 */
  .eye {
    position: absolute;
    width: 22px;
    height: 22px;
    background-color: #52cbd3;
    border-radius: 50%;
    top: 40px;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.3);
  }

  .eye.left {
    left: 35px;
  }

  .eye.right {
    right: 35px;
  }

  /* 鼻子和嘴巴 */
  .nose-mouth {
    position: absolute;
    width: 20px;
    height: 15px;
    background-color: #ff91a1;
    border-radius: 50%;
    top: 50px;
    z-index: 2;
    left: 80px;
  }

  .nose-mouth::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 15px;
    border-radius: 45%;
    border-bottom: 2px solid #ff91a1;
    top: 5px;
    left: 10px;
  }

  .nose-mouth::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 15px;
    border-radius: 45%;
    border-bottom: 2px solid #ff91a1;
    top: 5px;
    left: -10px;
  }

  /* 双手 */
  .hand {
    position: absolute;
    width: 30px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    bottom: 0px;
  }

  .hand.left {
    left: 35px;
  }

  .hand.right {
    right: 35px;
  }
}

/* 绳子部分 */
.rope {
  position: absolute;
  bottom: 35px;
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
</style>

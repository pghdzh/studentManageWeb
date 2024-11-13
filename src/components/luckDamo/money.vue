<template>

  <div class="doll">

    <div class="yuanbao"></div>

    <div class="ear left"></div>
    <div class="ear right"></div>
    <div class="yellow-patch"></div>
    <div class="face">
      <div class="eye left"></div>
      <div class="eye right"></div>
      <div class="nose-mouth"></div>
      <div class="faceRed left"></div>
      <div class="faceRed right"></div>
      <div class="hand left"></div>
      <div class="hand right"></div>
    </div>
    <div class="whisk left">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <div class="whisk right">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <div class="rope"></div>

    <div class="clouds">
      <svg class="cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        width="214.45997619628906" height="205.58551025390625" viewBox="0 0 214.45997619628906 205.58551025390625"
        fill="#EAB058">
        <path
          d="M10.4197 125.086C-31.5858 45.0855 68.4197 -109.914 149.42 125.086L213.42 205.086C213.42 205.086 52.4251 205.085 10.4197 125.086Z"
          stroke="rgba(0, 0, 0, 1)" stroke-width="1"></path>
      </svg>
      <svg class="cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        width="214.45997619628906" height="205.58551025390625" viewBox="0 0 214.45997619628906 205.58551025390625"
        fill="#EAB058">
        <path
          d="M10.4197 125.086C-31.5858 45.0855 68.4197 -109.914 149.42 125.086L213.42 205.086C213.42 205.086 52.4251 205.085 10.4197 125.086Z"
          stroke="rgba(0, 0, 0, 1)" stroke-width="1"></path>
      </svg>
      <svg class="cloud" style="transform: scaleX(-1); margin-left: 200px" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="214.45997619628906" height="205.58551025390625"
        viewBox="0 0 214.45997619628906 205.58551025390625" fill="#EAB058">
        <path
          d="M10.4197 125.086C-31.5858 45.0855 68.4197 -109.914 149.42 125.086L213.42 205.086C213.42 205.086 52.4251 205.085 10.4197 125.086Z"
          stroke="rgba(0, 0, 0, 1)" stroke-width="1"></path>
      </svg>
      <svg class="cloud" style="transform: scaleX(-1)" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" width="214.45997619628906" height="205.58551025390625"
        viewBox="0 0 214.45997619628906 205.58551025390625" fill="#EAB058">
        <path
          d="M10.4197 125.086C-31.5858 45.0855 68.4197 -109.914 149.42 125.086L213.42 205.086C213.42 205.086 52.4251 205.085 10.4197 125.086Z"
          stroke="rgba(0, 0, 0, 1)" stroke-width="1"></path>
      </svg>
    </div>
  </div>
</template>
<script lang='ts' setup></script>
<style scoped lang="scss">
.doll {
  position: relative;
  width: 260px;
  height: 250px;
  background-color: white;
  border-radius: 50% 50% 40% 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3),
    inset 0 -10px 20px rgba(0, 0, 0, 0.1);
  animation: float 3s ease-in-out infinite;
  z-index: 1;
 
}

.yuanbao {
  position: absolute;
  top: -40px;
  width: 80px;
  height: 40px;
  background: radial-gradient(circle at 50% 30%,
      #fff8d1,
      #ffd700 40%,
      #f0b800 60%,
      #d4a017);
  border-radius: 30% 30% 50% 50%;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2),
    inset 0 -4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1;
  animation: bounce 2s ease-in-out infinite;
}

.yuanbao::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  top: -15px;
  left: 25px;
  background: radial-gradient(circle at 50% 30%,
      #fff8d1,
      #ffd700 40%,
      #f0b800 60%,
      #d4a017);
  border-radius: 50%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2),
    inset 0 -2px 4px rgba(0, 0, 0, 0.2);
}

/* 耳朵 */
.ear {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50% 50% 30% 30%;

  top: -20px;

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2),
    inset 0 -8px 15px rgba(0, 0, 0, 0.1);
}

.ear.left {
  left: -60px;

  background-color: #fff;
}

.ear.right {
  right: -60px;

  background-color: #fecb78;
}

/* 耳朵内部 */
.ear::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #f2dcb3;
  border-radius: 50% 50% 30% 30%;

  top: 20px;
  left: 20px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
}

.yellow-patch {
  position: absolute;
  width: 40px;
  /* 调整大小以匹配图片 */
  height: 80px;
  background: #f0b800;
  /* 黄色填充色 */

  border-radius: 50%;
  /* 只让顶部两角圆弧，形成半圆形 */
  top: 10px;
  /* 调整位置 */
  right: 30px;
  transform: rotate(-45deg);
  /* 调整旋转角度 */
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
    width: 35px;
    height: 40px;
    border-radius: 50%;
    bottom: 40px;
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
    background-color: #64393A;
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
    height: 10px;
    background-color: #ff91a1;
    border-radius: 30% 30% 50% 50%;
    top: 50px;
    z-index: 2;
    left: 80px;
  }

  .nose-mouth::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 25px;
    border-radius: 50%;
    background: #FCC370;
    top: 10px;
    left: -20px;
    transform: rotate(-20deg);
  }

  .nose-mouth::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 25px;
    border-radius: 45%;
    background: #FCC370;
    top: 10px;
    left: 0px;
    transform: rotate(20deg);
  }

  /* 双手 */
  .hand {
    position: absolute;
    width: 40px;
    height: 30px;
    background-color: #fff;
    border-radius: 50% 50% 40% 40%;
    bottom: 0px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .hand.left {
    left: 35px;
  }

  .hand.right {
    right: 35px;
  }
}

.whisk {
  position: absolute;
  top: 100px;

  .line1 {
    width: 30px;
    height: 4px;
    border-radius: 0 50%;
    background-color: #ecb259;
    transform: rotate(15deg);
  }

  .line2 {
    width: 30px;
    height: 4px;
    border-radius: 0 50%;
    background-color: #ecb259;
    transform: rotate(5deg);
    margin-top: 20px;
  }

  .line3 {
    width: 30px;
    height: 4px;
    border-radius: 0 50%;
    background-color: #ecb259;
    transform: rotate(-15deg);
    margin-top: 20px;
  }
}

.whisk.left {
  left: 10px;
}

.whisk.right {
  right: 10px;
  transform: rotate(180deg);
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

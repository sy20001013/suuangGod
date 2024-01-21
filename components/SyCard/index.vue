<script setup>
import {ref} from 'vue'
import confetti from '@/node_modules/canvas-confetti'
const wonderful = (num) => {
    confetti({
        angle: num,
        spread:num%2+50,
        particleCount: num*2,
      });
  }
</script>
<template>
  <div class="sy_card">
    <div class="sy_card_mood">
      <img src="/assets/images/syk1.png" alt="" @click="wonderful('120')">
      <img src="/assets/images/syk2.png" alt="" @click="wonderful('100')">
      <img src="/assets/images/syk3.png" alt="" @click="wonderful('90')">
      <img src="/assets/images/syk4.png" alt="" @click="wonderful('70')">
      <img src="/assets/images/syk7.png" alt="" @click="wonderful('50')">
    </div>
  </div>
</template>



<style lang="less" scoped>
  .sy_card {
    display:flex;
    align-items: center;
    margin-top: 26px;
    padding:18px 35px;
    box-sizing: border-box;
    .sy_card_mood {
      display: flex;
      align-content: center;
      width: 100%;
      height: 219px;
      background: rgba(242,246,249,0.2);
      box-shadow: 0px 3px 25px 0px rgba(147,195,232,0.7);
      border-radius: 15px 15px 15px 15px;
      cursor: pointer;
      img {
        width: 249px;
        height: 100%;
        object-fit: contain;
      }
    }
  }
</style>
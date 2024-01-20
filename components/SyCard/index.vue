<template>
  <div class="sy_card">
    <div class="sy_card_mood">
      <img src="/assets/images/sycart.png" alt="">
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="less" scoped>
  .sy_card {
    display:flex;
    align-items: center;
    margin-top: 26px;
    padding:18px 35px;
    box-sizing: border-box;
    .sy_card_mood {
      width: 100%;
      height: 219px;
      background: rgba(242,246,249,0.3);
      box-shadow: 0px 3 25px 0px rgba(147,195,232,0.7);
      border-radius: 15px 15px 15px 15px;
      img {
        width: 229px;
        height: 100%;
        object-fit: contain;
      }
    }
  }
</style>
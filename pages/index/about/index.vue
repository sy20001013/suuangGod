<template>
  <div class="sy_about">
    <div class="about_img">
      <img src="/assets/images/sy_qd.png" alt="">
    </div>
    <div class="sy_about_title">
      敬请期待~关于
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="less" scoped>
.sy_about{
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .about_img {
   
    width: 400px;
    height: 400px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .sy_about_title {
    margin-left: 20px;
    color: #000000;
    font-size: 30px;
    font-weight: 800;
  }
} 
</style>
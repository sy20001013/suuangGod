<template>
  <div class="content_top">
    <div class="welcome">你好，AriefSenpai，欢迎来到Rekomendasiku</div>
    <div class="search">
      <input type="text" placeholder="搜索">
      <div class="search_icon"><img src="/assets/images/Vector.png" alt=""></div>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="less" scoped>
.content_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  box-shadow: 4px 0px 50px 0px rgba(172, 211, 241, 0.44);
  border-radius: 0px 0px 0px 0px;
  padding: 0 52px;
  box-sizing: border-box;
  .welcome  {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 372px;
    height: 38px;
    background: rgba(255,255,255,0.38);
    border-radius: 19px 19px 19px 19px;
    font-family: Roboto-Light;
  }
  .search {
    position: relative;
    width: 250px;
    height: 38px;
    background: rgba(255,255,255,0.38);
    box-shadow:  4px 0px 50px 0px rgba(172, 211, 241, 0.44);
    border-radius: 19px 19px 19px 19px;
    input {
      width: 100%;
      height: 100%;
      border:0;
      background: transparent;
      padding:0 30px 0 20px;
      box-sizing: border-box;
    }
    .search_icon {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      width: 15px;
      height: 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
<script setup>
  import { ref } from 'vue'
  const dotPosition = ref('right')
</script>
<template>
  <div class="sy_travels">
    <div class="sy_travels_cart">
      <div class="sy_travels_lbt">
       
        <a-carousel :dot-position="dotPosition" effect="fade" autoplay>
          <div class="sy_hostcart" v-for="item in 4" :key="item">
            <img src="/assets/images/lbt.jpg" alt="" v-if="item ==2 || item == 4">
            <img src="/assets/images/lbt2.jpg" alt="" v-else>
          </div>
        </a-carousel>
      </div>
      <!-- <div class="sy_character">
        <img src="/assets/images/sy_xiangs.png" alt="">
      </div> -->
    </div>
    <div class="sy_travels_bang">
      <img src="/assets/images/BANG!.png" alt="">
    </div>
    <div class="sy_travels_me">
      <div class="sy_me">认识我</div>
      <div class="sy_watch">
        <img src="/assets/images/sy_wx.jpg" alt="">
      </div>
    </div>
  </div>
</template>



<style lang="less" scoped>
.sy_travels {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 0 35px 20px 35px;
  .sy_travels_cart {
    display: flex;
    align-content: center;
    justify-content: space-between;
    width: 45%;
    height: 286px;
    background: rgba(242,246,249,0.3);
    box-shadow: 0px 3px 25px 0px rgba(147,195,232,0.7);
    border-radius: 15px 0px 0px 15px;
    padding: 20px;
    box-sizing: border-box;
    .sy_travels_lbt {
      width: 100%;
      height: 100%;
      border-radius:15px 0 15px 0px;
      overflow: hidden;
     .sy_hostcart {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
       
      }
     }
    }
    .sy_character {
      width: 10%;
      height: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .sy_travels_bang {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100%;
    img {
      width: 100%;
      height: 80%;
    }
  }
 .sy_travels_me {
    width: 20%;
    height: 286px;
    background: rgba(242,246,249,0.3);
    box-shadow: 0px 3px 25px 0px rgba(147,195,232,0.7);
    border-radius: 0px 15px 15px 0px;
    padding: 20px;
    box-sizing: border-box;
    .sy_me {
      font-size: 16px;
      color: #000000;
    }
    .sy_watch {
      margin-top: 10px;
      width: 100%;
      height: 90%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10%;
      }
    }
 }
 :deep(.slick-slide) {
  height: 246px;
  // background: #364d79;
  // overflow: hidden;
}
}
</style>
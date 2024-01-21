<script setup>
import {ref} from 'vue'
import confetti from '@/node_modules/canvas-confetti'

const arr = ref([
  {id:1,name:'Vue3',cart:''},
  {id:2,name:'React',cart:''},
  {id:3,name:'Nuxt3',cart:''},
  {id:4,name:'相册',cart:''},
  {id:5,name:'进度',cart:''},
  {id:6,name:'归档',cart:''}
])
  const wonderful = () => {
    confetti({
        angle: 90,
        spread:180,
        particleCount: 500,
      });
  }
</script>

<template>
  <div class="sy_home_nav">
      <div class="sy_nav_item" v-for="item in arr" :key="item.id">
        <div class="sy_avatar">
          <div class="sy_avatar_name">{{item.name}}</div>
          <img src="/assets/images/sy_zzf.jpg" alt="">
        </div>
        <div class="sy_name" @click="wonderful">{{item.name}}</div>
      </div>
    </div>
</template>



<style  lang="less" scoped>
.sy_home_nav {
    display: flex;
    align-items: center;
    width: 80vw;
    margin: 0 35px;
    overflow: hidden;
    // overflow-x: auto;
    // overflow-y: hidden;
    // &::-webkit-scrollbar {
    //   width: 10px !important;
    //   height: 3px;
    //   background: #FFFFFF;
    // }
    .sy_nav_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 25px;
      cursor: pointer;
     
      &:last-child {
        margin-right:  0;
      }
      .sy_avatar {
        position: relative;
        width: 84px;
        height: 84px;
        box-shadow: 0px 2px 11px 0px #C0DBF0;
        border: 5px solid #FFFFFF;
        border-radius: 50%;
        overflow: hidden;
        transition: all .9;
        
       
        .sy_avatar_name {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          font-size: 18px;
          color: #FFFFFF;
          font-weight: 600;
          background: rgba(0, 0, 0, .3);
          transition: all .3;
          &:hover{
            background: rgba(0, 0, 0, .5);
          }
       
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .sy_name {
        display: flex;
        align-content: center;
        justify-content: center;
        margin-top: 10px;
        padding: 3px 5px;
        background: rgba(255,255,255,0.8);
        border-radius: 11px 11px 11px 11px;
        font-size: 16px;
        color: #2B2B2B;
      }
    }
  }
</style>
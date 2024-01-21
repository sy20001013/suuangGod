<script setup>
import {ref} from 'vue'
const avatarList = ref([])
</script>

<template>
  <div class="sy_home">
   <SyNav></SyNav>
   <SyEveryday></SyEveryday>
   <SyCard></SyCard>
   <SyTravels></SyTravels>
  </div>
</template>
<!-- everyday -->

<style lang="less" scoped>
.sy_home {

  padding: 14px;
  box-sizing: border-box;
  
}
</style>
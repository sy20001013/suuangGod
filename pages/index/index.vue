<script setup>
const {data:res} = await useFetch('/api/channl')
console.log(res);
</script>
<template>
  <div class="suyang">
    <div class="suyang_page">
      <div class="navigation">
      </div>
      <div class="content">
          <div class="content_top"></div>
        </div>
    </div>
  </div>

</template>



<style lang="less" scoped>
.suyang {

  background-image: linear-gradient(
    270deg,
    rgba(225, 234, 255, 0.64) 0,
    rgba(245, 135, 255, 0.64) 100%
  );
  .suyang_page {
    display: flex;
    width: 100%;
 
    // margin: -5.894rem 0 0 -4.054rem;
    .navigation {
      width: 180px;
      height: 100vh;
      background: rgba(242,246,249,0.75);
      box-shadow: 4px 0px 50px 0px rgba(172,211,241,0.44);
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
    }
    .content {
      flex: 1;
      background: url('assets/images/Groupbg.png') 100% no-repeat;
      background-size: 100% 100%;
      
      .content_top {
        width: 100%;
        height: 80px;
        background: rgba(255,255,255,0.53);
        box-shadow: 0px 4px 33px 0px rgba(26,50,96,0.25);
        border-radius: 0px 0px 0px 0px;
        opacity: 1;
      }
    
    }
  }
 
  
}
</style>
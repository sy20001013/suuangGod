<script setup>
const {data:res} = await useFetch('/api/channl')
console.log(res);
</script>
<template>
  <div v-for="item in res" :key="item.id">{{ item.name }}</div>
</template>



<style scoped>

</style>
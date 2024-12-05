<script setup lang="ts">
import HomeTitle from '../components/HomeTitle.vue'
import ShowInfos from '../components/ShowInfos.vue';
</script>

<template>
  <main>
    <ShowInfos />
    <HomeTitle />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 20px;
}
</style>

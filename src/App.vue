<script setup lang="ts">
import { RouterView } from 'vue-router'
import content from './translations'
</script>

<template>
  <header>
    <div>{{ content.projectTitle }}</div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}
</style>

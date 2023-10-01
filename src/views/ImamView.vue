<script setup lang="ts">
import { ref } from 'vue'
import content from '../translations'
import { languages } from '../languages'

const selectedLanguagues = ref([])
</script>

<template>
  {{ content.imam.selectLanguages }}

  <div> Selected languages: {{ selectedLanguagues }}</div>
  <li v-for="language in languages" :key="language.key">
    <input type="checkbox" :id="language.key" :value="language.key" v-model="selectedLanguagues">
    <label :for="language.key">{{ language.title }}</label>
  </li>
</template>

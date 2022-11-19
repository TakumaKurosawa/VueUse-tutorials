<template>
  <router-link :to="linkTo" class="logo">
    <img :style="{ width, height }" alt="logo" src="@/assets/vueuse-logo.png" />
    <p>VueUse tutorials</p>
  </router-link>
</template>

<script lang="ts" setup>
defineProps<{
  width?: string;
  height?: string;
  linkTo: string;
}>();
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

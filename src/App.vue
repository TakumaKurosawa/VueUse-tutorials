<template>
  <header>
    <Logo height="50px" link-to="/" />
    <nav>
      <router-link to="/">Infinite Scroll</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'

import Logo from '@/components/Logo.vue'
</script>

<style scoped>
header {
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 8vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
}

nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
}

nav > * {
  margin-right: 1rem;
}

main {
  position: absolute;
  top: 8vh;
  left: 0;
  right: 0;
  bottom: 0;
  height: 92vh;
  overflow: hidden;
}
</style>

<template>
  <header>
    <Logo height="50px" link-to="/" />
    <nav>
      <router-link to="/">Home</router-link>
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
  height: 70px;
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
  padding: 1rem;
}
</style>

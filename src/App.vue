<template>
  <header>
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
import { RouterView } from "vue-router";
</script>

<style scoped>
header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  background-color: #f5f5f5;
  padding: 1rem;
}

nav > * {
  margin-right: 1rem;
}

main {
  padding: 1rem;
}
</style>

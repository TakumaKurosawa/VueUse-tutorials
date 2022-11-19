<template>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
  <h3>
    Counter: {{ count }}
    <a style="margin-right: 10px" @click="inc()">+</a>
    <a @click="dec()">-</a>
  </h3>
</template>

<script lang="ts" setup>
import { useCounter, useMouse } from "@vueuse/core";

const { x, y } = useMouse();
const { count, inc, dec } = useCounter();
</script>

<style scoped>
h3 {
  font-size: 1.2rem;
}
</style>

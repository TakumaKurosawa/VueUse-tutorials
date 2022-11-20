<template>
  <Slide :scroll-distance="10000" :slide-size="3">
    <template #slide-1>
      <div class="slideContent">
        <img alt="1" src="/slide-images/1.jpg" />
      </div>
    </template>
    <template #slide-2>
      <div class="slideContent">
        <img alt="2" src="/slide-images/2.jpg" />
      </div>
    </template>
    <template #slide-3>
      <div class="slideContent">
        <img alt="3" src="/slide-images/3.jpg" />
      </div>
    </template>
  </Slide>
</template>

<script lang="ts" setup>
import Slide from '@/components/Slide.vue'
</script>

<style scoped>
.slideContent {
  height: 100%;
  width: 100%;
}

.slideContent > * {
  width: 100%;
  height: 100%;
}
</style>

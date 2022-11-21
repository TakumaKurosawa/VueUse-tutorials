<template>
  <div class="bg-img">
    <img alt="background" src="/slide-images/1.jpg" />
  </div>
  <div ref="el" :style="style" class="draggableCard">
    ✊Drag me! I am at {{ x }}, {{ y }}
  </div>
</template>

<script lang="ts" setup>
import { useDraggable } from '@vueuse/core'
import { ref } from 'vue'

const el = ref<HTMLElement | null>(null)
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 400, y: 400 },
})
</script>

<style scoped>
.bg-img,
.bg-img > img {
  height: 100%;
  width: 100%;
}

.draggableCard {
  position: fixed;
  border: 1px solid #ccc;
  padding: 2rem;
  z-index: 1000;
  background-color: white;
}

.draggableCard:hover {
  cursor: move;
}
</style>

<template>
  <div ref="el" class="container">
    <div :style="{ height: `${scrollDistance}px` }">
      <div v-for="i in slideSize" :key="`slide-${i}`" class="content">
        <transition name="fade">
          <div v-show="i === getSlideNumber()">
            <slot :name="`slide-${i}`"></slot>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useScroll } from '@vueuse/core'
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    scrollDistance?: number
    slideSize: number
  }>(),
  {
    scrollDistance: 3000,
  }
)

const el = ref<HTMLElement | null>(null)

const { y } = useScroll(el)

const getSlideNumber = () =>
  Math.floor(y.value / (props.scrollDistance / props.slideSize)) + 1
</script>

<style scoped>
.container {
  overflow-y: scroll;
  height: 100%;
}

.content {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 92vh;
}

.content > * {
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-enter,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}
</style>

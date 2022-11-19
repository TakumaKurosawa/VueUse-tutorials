<template>
  <div :style="{ maxWidth }" class="card">
    <div class="card__header">
      <img :src="headerImageSrc" alt="cardHeaderImage" />
    </div>
    <div class="card__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    maxWidth?: string
    headerImageSrc: string
  }>(),
  {
    maxWidth: '200px',
  }
)
</script>

<style scoped>
.card {
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 1rem;
}

.card__header > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card__body {
  padding: 1rem;
}
</style>

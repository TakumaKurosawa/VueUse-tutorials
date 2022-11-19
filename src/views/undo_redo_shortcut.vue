<template>
  <div class="wrapper">
    <Card header-image-src="https://randomuser.me/api/portraits/men/78.jpg">
      <template #body>
        <strong>
          {{ user.name }}
        </strong>
        <p>{{ user.email }}</p>
        <span class="material-symbols-outlined">{{ user.gender }}</span>
      </template>
    </Card>
    <div class="editor">
      <div class="editor__inner">
        <label for="name">Name: </label>
        <input id="name" v-model="user.name" type="text" />
      </div>
      <div class="editor__inner">
        <label for="email">Email: </label>
        <input id="email" v-model="user.email" type="email" />
      </div>
      <div class="editor__inner">
        <label for="gender">Gender: </label>
        <select id="gender" v-model="user.gender">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
    </div>
    <div class="undoRedo">
      <button @click="undo()">
        <span class="material-symbols-outlined">undo</span>Undo
      </button>
      <button @click="redo()">
        <span class="material-symbols-outlined">redo</span>Redo
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onKeyStroke, useRefHistory } from '@vueuse/core'
import { ref } from 'vue'

import Card from '@/components/Card.vue'

type User = {
  name: string
  email: string
  gender: string
}

const user = ref<User>({
  email: '',
  gender: 'male',
  name: '',
})

const { undo, redo } = useRefHistory(user, { deep: true })

onKeyStroke(
  ['ArrowLeft'],
  (e: KeyboardEvent) => {
    if (e.metaKey && e.shiftKey) undo()
  },
  { eventName: 'keydown' }
)

onKeyStroke(
  ['ArrowRight'],
  (e: KeyboardEvent) => {
    if (e.metaKey && e.shiftKey) redo()
  },
  { eventName: 'keydown' }
)
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.editor {
  display: flex;
  flex-direction: column;
}

.editor__inner {
  display: flex;
  margin-bottom: 1rem;
}

.editor__inner > label {
  width: 60px;
}

.undoRedo {
  display: flex;
}

.undoRedo > button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #29efd2;
  border: none;
}

.undoRedo > button:first-child {
  margin-right: 1rem;
}
</style>

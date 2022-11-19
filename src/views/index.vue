<template>
  <div ref="el" class="wrapper">
    <div class="container">
      <Card
        v-for="user in users"
        :key="user.id"
        :header-image-src="user.picture.large"
      >
        <template #body>
          <strong>
            {{ user.name.title }}. {{ user.name.first }} {{ user.name.last }}
          </strong>
          <p>{{ user.email }}</p>
          <span class="material-symbols-outlined">{{ user.gender }}</span>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useInfiniteScroll } from '@vueuse/core'
import axios from 'axios'
import { onBeforeMount, ref } from 'vue'

import Card from '@/components/Card.vue'

type User = {
  id: string
  gender: string
  email: string
  name: {
    title: string
    first: string
    last: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
}

type UserApiResponse = {
  results: User[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}

const el = ref<HTMLElement>()
const page = ref(1)
const limit = ref(15)
const users = ref<User[]>([])

useInfiniteScroll(
  el,
  () => {
    page.value++
    fetchUsers()
  },
  { distance: 10 }
)

const fetchUsers = async () => {
  try {
    const res = await axios.get<UserApiResponse>(
      `https://randomuser.me/api?page=${page.value}&results=${limit.value}`
    )
    if (res.data) users.value.push(...res.data.results)
  } catch (e) {
    console.error(e)
  }
}

onBeforeMount(() => fetchUsers())
</script>

<style scoped>
.wrapper {
  height: 100%;
  overflow-y: scroll;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>

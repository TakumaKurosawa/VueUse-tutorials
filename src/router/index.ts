import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'InfiniteScroll',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/undo_redo',
      name: 'UndoRedo',
      component: () => import('../views/undo_redo.vue'),
    },
    {
      path: '/undo_redo_shortcut',
      name: 'UndoRedoShortcut',
      component: () => import('../views/undo_redo_shortcut.vue'),
    },
  ],
})

export default router

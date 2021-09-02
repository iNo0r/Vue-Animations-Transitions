import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const app = createApp(App);

app.component('base-modal', BaseModal);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AllUsers
    },
    {
      path: '/goals',
      component: CourseGoals
    }
  ]
});
app.use(router);
// to avoind intial animation at routing , check course 204
router.isReady().then(() => {
  app.mount('#app');
});

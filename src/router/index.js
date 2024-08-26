import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/HomePage.vue';
import QuestionPage from '../views/QuestionPage.vue';
import WritingPage from '../views/WritingPage.vue';
import ResultPage from '../views/ResultPage.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/question',
    name: 'QuestionPage',
    component: QuestionPage,
  },
  {
    path: '/writing',
    name: 'WritingPage',
    component: WritingPage,
  },
  {
    path: '/result',
    name: 'ResultPage',
    component: ResultPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

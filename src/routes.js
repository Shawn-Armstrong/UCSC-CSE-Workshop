import InitialView from './views/InitialView.vue';
import HomeView from './views/HomeView.vue';
import GitView from './views/GitView.vue';
import DevelopersView from './views/DevelopersView.vue';
import ContributeView from './views/ContributeView.vue';

export default [
  {
    path: '/',
    component: InitialView,
  },
  {
    path: '/HomeView',
    component: HomeView,
  },
  {
    path: '/GitView',
    component: GitView,
  },
  {
    path: '/DevelopersView',
    component: DevelopersView,
  },
  {
    path: '/ContributeView',
    component: ContributeView,
  },
];

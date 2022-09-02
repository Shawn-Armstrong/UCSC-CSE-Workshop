import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Routes from './routes.js';
import VideoBackground from 'vue-responsive-video-background-player';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

Vue.component('video-background', VideoBackground);

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
});

new Vue({
  vuetify,
  render: (h) => h(App),
  router: router,
}).$mount('#app');

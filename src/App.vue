<template>
  <v-app>
    <NavBar></NavBar>
    <transition name="slide-fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
    <FooterBar></FooterBar>
  </v-app>
</template>

<script>
import FooterBar from '@/components/Footer-Bar.vue';
import NavBar from '@/components/Nav-Bar.vue';

export default {
  name: 'App',
  icons: {
    iconfont: 'md',
  },
  components: {
    FooterBar,
    NavBar,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #2c3e50;
}
.slide-fade-enter-active {
  transition: all 2s ease;
  transition-delay: 0.25s;
}
.slide-fade-leave-active {
  transition: opacity 0.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
</style>

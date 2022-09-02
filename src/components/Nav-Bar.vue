<template>
  <v-app-bar app color="#003c6c" dark hide-on-scroll>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-show="$route.path != '/'"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          width="400"
          class="mr-16"
        >
          <b>Essential Subjects</b>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-btn v-show="$route.path != '/'" to="/" text>
      <span class="mr-2">Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn v-show="$route.path != '/'" to="/DevelopersView" text>
      <span class="mr-2">The Developers</span>
      <v-icon>mdi-account-group</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      items: [
        {
          title: 'Important student information',
          icon: 'mdi-school',
          route: '/',
        },
        {
          title: 'Setting up a development enviroment',
          icon: 'mdi-desktop-classic',
          route: '/',
        },
        {
          title: 'Command-line fundamentals',
          icon: 'mdi-file-code',
          route: '/',
        },
        {
          title: 'Version control using Git',
          icon: 'mdi-github',
          route: '/GitView',
        },
        { title: 'More to come!', icon: 'mdi-traffic-cone', route: '/' },
      ],
    };
  },
};
</script>

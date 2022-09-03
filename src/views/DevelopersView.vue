<template>
  <div>
    <v-container style="height: 10vh"></v-container>

    <v-container>
      <h4>
        Interested in contributing?<br /><br />
        <router-link to="/ContributeView">Start here</router-link>
      </h4>
      <br />
    </v-container>

    <v-container>
      <h1>Contributors</h1>

      <br /><br /><br />
      <v-row class="justify-center">
        <v-col mr-4 v-for="item in items" :key="item.id" col="4">
          <v-card class="mx-auto" max-width="200">
            <v-img
              max-width="400"
              max-height="400"
              class="white--text align-end"
              :src="item.src"
            >
            </v-img>

            <v-card-text class="text--primary">
              <div class="title">{{ item.name }}</div>

              <p>{{ item.title }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="height: 30vh"></v-container>
  </div>
</template>

<script>
export default {
  name: 'GitView',
  components: {},
  data() {
    return {
      items: [
        {
          id: 1,
          src: require('../assets/Shawn.jpeg'),
          name: 'Shawn Armstrong',
          title: 'Lead Developer',
        },
        {
          id: 2,
          src: require('../assets/Qian.jpg'),
          name: 'Qian Zhao',
          title: 'Organizer',
        },
        {
          id: 3,
          src: require('../assets/Shubham.jpeg'),
          name: 'Shubham Modi',
          title: 'Videographer',
        },
      ],
    };
  },
};
</script>

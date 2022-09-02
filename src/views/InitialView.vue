<template>
  <div>
    <v-container
      d-flex
      flex-column
      justify-center
      align-center
      style="height: 90vh"
      ><br /><br /><br />
      <v-img
        contain
        max-height="100px"
        max-width="auto"
        src="../assets/ucsc_logo.png"
      ></v-img>
      <v-container style="height: 5vh"></v-container>
      <video-background
        :src="require(`@/assets/intro2.mp4`)"
        style="max-height: 400px; height: 100vh"
      >
      </video-background>

      <br />
      <h1 style="color: #003c6c">Computer Science and Engineering Workshop</h1>
      <br />

      <v-btn to="/HomeView" color="primary" elevation="12" raised x-large
        ><v-icon>mdi-home</v-icon>&nbsp;&nbsp;Start</v-btn
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'InitialView',
  components: {},
};
</script>

<template>
  <div>
    <v-container style="height: 20vh"></v-container>
    <v-card class="mx-auto my-auto pa-6 myclass" max-width="650" outlined>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sJGs9svFXHo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
};
</script>

<style>
.myclass.v-sheet.v-card {
  border-width: 3px;
}

.v-list-field input {
  font-size: 1.2em;
}

.main_menu_title {
  font-size: 2rem !important;
}

.main_menu_item {
  font-size: 1.1rem !important;
}
</style>

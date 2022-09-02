<template>
  <div>
    <v-container style="height: 20vh"></v-container>
    <v-card class="mx-auto my-auto pa-6 myclass" max-width="650" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h2 mb-1">
            Introduction </v-list-item-title
          ><br />
          <v-list-item-subtitle
            ><iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hRMM7jEWsjc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
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

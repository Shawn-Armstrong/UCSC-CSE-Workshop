<template>
  <v-footer app bottom fixed style="width: 100%" padless color="#003c6c">
    <v-row justify="center" no-gutters>
      <v-col class="#003c6c lighten-2 py-2 text-right white--text" cols="12">
        <v-card-text class="py-2 pa-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>UCSC, CSE Workshop </strong>

          <v-btn
            href="https://github.com/Shawn-Armstrong/UCSC-CSE-Workshop"
            class="ml-5"
          >
            GitHub
          </v-btn>
        </v-card-text>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterBar',
};
</script>

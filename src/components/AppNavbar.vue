<script lang="ts" setup>
// import NavItems from './NavItems.vue'
</script>

<template>
  <v-toolbar app>
    <span class="hidden-sm-and-up">
      <!-- <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon> -->
      <v-toolbar-side-icon> </v-toolbar-side-icon>
    </span>
    <v-toolbar-title> Lehkost Mysli | Gabriela Lipková </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn> Access Bars </v-btn>
      <v-btn> Ženské kruhy </v-btn>
      <v-btn> O mně </v-btn>
      <v-btn> Příspěvky (ig) </v-btn>
      <v-btn> Kontakt </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts" setup>
import AppNavbar from '@components/AppNavbar.vue'
import Header from '@components/Header/Header.vue'
import AppLayout from '@layouts/AppLayout.vue'
</script>

<template>
  <AppLayout>
    <template v-slot:topbar>
      <AppNavbar />
    </template>

    <template v-slot:content>
      <Header />
    </template>
  </AppLayout>
</template>

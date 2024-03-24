<script setup>
import HeaderComponent from 'src/components/navBar/HeaderComponent.vue'
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderComponent />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

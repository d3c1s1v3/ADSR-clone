<script setup lang="ts">
import SiteHeader from "./components/SiteHeader.vue";
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  position: relative;
}
</style>

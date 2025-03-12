<script setup lang="ts">
import HeaderSearch from "./HeaderSearch.vue";
import HeaderCTA from "./HeaderCTA.vue";
import HeaderNavLinks from "./HeaderNavLinks.vue";
</script>

<template>
  <header>
    <div class="container">
      <RouterLink to="/">
        <img src="/src/assets/logo-adsr.svg" id="logo" alt="ADSR" />
      </RouterLink>
      <HeaderNavLinks />
      <HeaderSearch />
      <HeaderCTA />
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  z-index: 9999;
  height: 80px;
  width: 100%;
  background-color: black;
}
.container {
  max-width: 1600px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
}
#logo {
  width: 90px;
  height: 40px;
}
</style>

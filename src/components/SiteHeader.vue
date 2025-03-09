<script setup lang="ts">
import { RouterLink } from "vue-router";
import { LIST_ITEMS } from "@/constants/navigation";

import HeaderSearch from "./HeaderSearch.vue";
import HeaderCTA from "./HeaderCTA.vue";
</script>

<template>
  <header>
    <div class="container">
      <RouterLink to="/">
        <img src="/src/assets/logo-adsr.svg" id="logo" alt="ADSR" />
      </RouterLink>
      <ul class="nav-list">
        <li v-for="item in LIST_ITEMS" :key="item.label">
          <RouterLink :to="item.path">{{ item.label }}</RouterLink>
        </li>
      </ul>
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
}
#logo {
  width: 90px;
  height: 40px;
}
.nav-list {
  display: flex;
  height: 100%;
}

li {
  color: white;
  display: flex;
  align-items: center;
  padding-inline: 1.3rem;
  font-size: 1.4rem;
  font-weight: 300;
}
a {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
li a::after {
  content: "";
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 0.1rem;
  background-color: #014bff;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  border-radius: 0.3rem;
  -webkit-box-shadow: 0px 0px 16px 2px #014bff;
  -moz-box-shadow: 0px 0px 16px 2px #014bff;
  box-shadow: 0px 0px 16px 2px #014bff;
}
li:hover a::after {
  opacity: 1;
}
</style>

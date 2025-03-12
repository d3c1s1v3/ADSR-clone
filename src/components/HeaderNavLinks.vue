<script setup lang="ts">
import { RouterLink } from "vue-router";
import { LIST_ITEMS } from "@/constants/navigation";
</script>
<template>
  <div class="nav-list">
    <RouterLink v-for="item in LIST_ITEMS" :key="item.label" :to="item.path" class="navbar-item">{{
      item.label
    }}</RouterLink>
  </div>
</template>
<style scoped>
.nav-list {
  display: flex;
  height: 100%;
}

a {
  color: white;
  display: flex;
  align-items: center;
  padding-inline: 1.3rem;
  font-size: 1.4rem;
  font-weight: 300;
}
</style>

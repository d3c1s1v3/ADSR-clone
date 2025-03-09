<script setup lang="ts">
import { ref } from "vue";

const searchValue = ref("");

const handleSearch = () => {
  if (searchValue.value.trim() === "") return;
  console.log("Search value:", searchValue.value);
};
</script>
<template>
  <div class="container">
    <form @submit.prevent="handleSearch">
      <input type="text" placeholder="Search..." v-model="searchValue" />
      <button type="submit" class="search-icon">
        <font-awesome-icon icon="search" />
      </button>
    </form>
  </div>
</template>
<style scoped>
.container {
  height: 100%;
  flex: 3;
  position: relative;
}

form {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
input {
  width: 100%;
  height: 100%;
  outline: none;
  background-color: #111111;
  border: none;
  padding: 2rem;
  color: white;
}
.search-icon {
  color: white;
  position: absolute;
  right: 3rem;
  font-size: 2rem;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>

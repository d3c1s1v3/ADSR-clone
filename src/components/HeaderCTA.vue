<script setup lang="ts">
import { HEADER_CTA_ITEMS } from "@/constants/navigation";
</script>
<template>
  <div class="container">
    <button v-for="item in HEADER_CTA_ITEMS" :key="item.label">{{ item.label }}</button>
    <button>
      <font-awesome-icon icon="fa-cart-shopping" />
      <span><font-awesome-icon icon="fa-euro" /> 0.00</span>
    </button>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex: 2;
  height: 100%;
}
button {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  color: white;
  position: relative;
}

button:nth-child(1) {
  flex: 3;
  border: none;
  outline: none;
}
button:nth-child(2) {
  flex: 2;
  border: none;
  outline: none;
}

button:nth-child(2):before {
  content: "";
  position: absolute;
}

button:nth-child(3) {
  flex: 2;
  border: none;
  outline: none;
  background-color: #014bff;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 1.6rem;
  font-weight: bold;
}
button:nth-child(3):hover {
  background-color: #20bf00;
}
</style>

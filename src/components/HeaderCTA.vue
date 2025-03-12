<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="btn-group btn-group-register">
      <div class="overlay"></div>
      <button class="navbar-item">CREATE ACCOUNT</button>
      <div class="create-account"></div>
    </div>
    <div class="btn-group btn-group-sign-in">
      <div class="overlay"></div>
      <button class="navbar-item divider">SIGN IN</button>
      <div class="sign-in"></div>
    </div>
    <button class="cart-btn">
      <font-awesome-icon icon="fa-cart-shopping" />
      <span><font-awesome-icon icon="fa-euro" /> 0.00</span>
    </button>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  height: 100%;
  flex: 1;
}

.btn-group {
  height: 100%;
  display: flex;
}

.cart-btn {
  background-color: #014bff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  transition: 0.3s all;
  padding-inline: 3rem;
}
.cart-btn:hover {
  background-color: #20bf00;
}

button {
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
  padding-inline: 1.3rem;
  font-size: 1.4rem;
  font-weight: 300;
  background-color: transparent;
}

.create-account,
.sign-in {
  display: none;
  opacity: 0;
  z-index: 9999;
  position: absolute;
  width: 460px;
  height: 470px;
  background-color: #171717;
  transform: translateY(80px) translateX(-80px);
  transition: all 100ms;
}
.btn-group-register:hover .create-account {
  display: block;
  opacity: 1;
}
.btn-group-sign-in:hover .sign-in {
  display: block;
  opacity: 1;
}

.btn-group-register:hover .overlay,
.btn-group-sign-in:hover .overlay {
  display: block;
  opacity: 1;
}

.overlay {
  display: none;
  opacity: 0;
  position: fixed;
  top: 80px;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  transition: all 100ms;
}

.divider {
  position: relative;
}

.divider::before {
  content: "";
  background-color: #014bff;
  height: 2rem;
  width: 0.1rem;
  position: absolute;
  transform: translateX(-1.3rem);
}
</style>

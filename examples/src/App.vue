<template>
  <h1 class="tital">kot组件展示</h1>
  <nav class="nav">
    <router-link to="/">Button</router-link>
    <router-link to="/card">Card</router-link>
    <router-link to="/dialog">dialog</router-link>
  </nav>
  <div class="displayArea">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
h1.title {
  text-align: center;
  font-weight: 200;
}
p {
  text-align: center;
  font-weight: 200;
  margin-top: 1em;
  font-size: 18px;
}

.nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
}

.displayArea {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
</style>

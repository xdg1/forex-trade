<script setup>
import Navbar2 from './components/Navbar_UI.vue'
import Fooldal from './components/Fooldal.vue'
import Rolunk from './components/Rolunk.vue'
import Munkatarsaink from './components/Munkatarsaink.vue'
import Kapcsolat from './components/Kapcsolat.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
